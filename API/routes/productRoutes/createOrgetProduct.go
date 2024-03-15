package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"encoding/json"
	"fmt"
	"log"
	"os/exec"

	"github.com/gofiber/fiber/v2"
)

type SentimentResponse struct {
	Positive uint64 `json:"positive"`
	Negative uint64 `json:"negative"`
	Neutral  uint64 `json:"neutral"`
}

func CreateOrGetProduct(c *fiber.Ctx) error {
	var product models.Product

	// Check for errors in parsing JSON
	if err := c.BodyParser(&product); err != nil {
		return c.Status(400).JSON(fmt.Sprintf("Error parsing JSON: %v", err))
	}

	// Start a database transaction
	tx := database.Database.Db.Begin()

	// Check if a product already exists
	existingProduct := models.Product{}
	if err := tx.Where("name = ?", product.Name).First(&existingProduct).Error; err == nil {
		// Rollback the transaction if the product already exists
		tx.Rollback()
		return c.Status(200).JSON(existingProduct)
	}

	// Run Python script if product doesn't exist
	cmd := exec.Command("python", "D:/Charcha/charcha/API/execs/wrapper.py ", product.Name)
	// cmd.Stdin = strings.NewReader(product.Name)
	output, err := cmd.Output()
	log.Printf("%s", output)
	if err != nil {
		// Rollback the transaction if there's an error running the Python script
		tx.Rollback()
		log.Printf("Error running Python script: %v", err)
		// log.Printf("Python script output: %s", output)
		return c.Status(500).SendString("Error running Python script: " + err.Error())
	}

	// Parse the JSON response from the Python script
	var sentimentResponse SentimentResponse
	if err := json.Unmarshal(output, &sentimentResponse); err != nil {
		// Rollback the transaction if there's an error parsing the JSON response
		tx.Rollback()
		return c.Status(500).SendString("Error parsing JSON response from Python script: " + err.Error())
	}

	// Update the product with sentiment values
	product.PositiveRatings = sentimentResponse.Positive
	product.NegativeRatings = sentimentResponse.Negative
	product.NeutralRatings = sentimentResponse.Neutral

	// Create a new product
	if err := tx.Create(&product).Error; err != nil {
		// Rollback the transaction if there's an error creating the product
		tx.Rollback()
		return c.Status(500).SendString("Error creating product")
	}

	// Commit the transaction if everything is successful
	tx.Commit()

	return c.Status(200).JSON(product)
}
