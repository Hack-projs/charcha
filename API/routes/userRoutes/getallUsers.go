package userRoutes

import (
	"charcha-api/database"
	"charcha-api/models"

	"github.com/gofiber/fiber/v2"
)

func GetallUsers(c *fiber.Ctx) error {
	users := []models.User{}
	err := database.Database.Db.Find(&users).Error
	if err != nil {
		return c.Status(500).JSON("Error fetching users")
	}
	return c.Status(200).JSON(users)
}
