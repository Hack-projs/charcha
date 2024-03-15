package userRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"log"

	"github.com/gofiber/fiber/v2"
)

func CreateUser(c *fiber.Ctx) error {
	var user models.User
	err := c.BodyParser(&user)
	if err != nil {
		return c.Status(400).JSON("Error parsing JSON: " + err.Error())

	}

	existingUser := models.User{}
	if database.Database.Db.Where("email = ?", user.Email).First(&existingUser).Error == nil {
		return c.Status(200).JSON("user email exists")
	}

	result := database.Database.Db.Create(&user)
	if result.Error != nil {
		return c.Status(500).SendString("Error creating user")

	}

	log.Printf("User successfully created. ID: %v\n", user.ID)
	return c.SendString("Created User")

}
