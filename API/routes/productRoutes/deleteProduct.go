package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"log"

	"github.com/gofiber/fiber/v2"
)

func DeleteProduct(c *fiber.Ctx) error {
	pid := c.Params("id")
	result := database.Database.Db.Where("id = ?", pid).Delete(&models.Product{})
	if result.Error != nil {
		return c.Status(500).SendString("Error deleting product")
	}
	if result.RowsAffected == 0 {
		return c.Status(404).SendString("product not found")
	}
	log.Printf("product with id %v has been deleted", pid)
	return c.SendString("product deleted successfully")
}
