package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"github.com/gofiber/fiber/v2"
)

func CreateOrGetProduct(c *fiber.Ctx) error {
	var product models.Product

	//check for errors in parsing json
	err := c.BodyParser(&product)
	if err != nil {
		return c.Status(400).JSON("Error parsing JSON: " + err.Error())
	}
	//checkign if a product already exists

	existingProduct := models.Product{}
	if database.Database.Db.Where("name = ?", product.Name).First(&existingProduct).Error == nil {

		return c.Status(200).JSON("product exists already")
	}

	//create a new product
	result := database.Database.Db.Create(&product)
	if result.Error != nil {
		return c.Status(500).SendString("Error creating product")

	}

	return c.Status(200).JSON(product)
}
