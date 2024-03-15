package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"

	"github.com/gofiber/fiber/v2"
)

func Getallprods(c *fiber.Ctx) error {
	products := []models.Product{}
	err := database.Database.Db.Find(&products).Error
	if err != nil {
		return c.Status(500).JSON("Error fetching products")
	}
	return c.Status(200).JSON(products)
}
