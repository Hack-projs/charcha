package routes

import (
	"charcha-api/database"
	"charcha-api/models"
	"github.com/gofiber/fiber/v2"
	"log"
	"strconv"
)

func GetService(c *fiber.Ctx) error {
	UserID, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		log.Printf("Error converting service id to int: %v \n", err)
		return c.Status(400).SendString("invalid user Id")
	}

	//fetch service details
	var user models.User
	if err := database.Database.Db.Where("id=?", UserID).First(&user).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Failed to fetch user details"})
	}

	//creating response format
	userDetails := fiber.Map{
		"username":       user.Username,
		"email":          user.Email,
		"contact_number": user.ContactNumber,
	}
	return c.Status(fiber.StatusOK).JSON(userDetails)
}
