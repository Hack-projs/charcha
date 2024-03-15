package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"github.com/gofiber/fiber/v2"
	"log"
	"strconv"
)

func UpdateProduct(c *fiber.Ctx) error {
	var product models.Product
	pid, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON("Error parsing JSON: " + err.Error())
	}
	err = c.BodyParser(&product)
	if err != nil {
		return c.Status(400).JSON("Error parsing JSON: " + err.Error())
	}
	//update product
	result := database.Database.Db.Model(models.Product{}).Where("id = ?", pid).Updates(&product)
	if result.Error != nil {
		return c.Status(500).SendString("Error updating product")
	}
	if result.RowsAffected == 0 {
		return c.Status(404).SendString("product not found")
	}
	log.Printf("product with id %v has been updated", pid)
	return c.SendString("product updated successfully")
}
