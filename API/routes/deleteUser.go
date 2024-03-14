package routes

import (
	"charcha-api/database"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"log"
	"strconv"
)

func DeleteService(c *fiber.Ctx) error {

	userID, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		log.Printf("Error converting service id to int: %v \n", err)
		return c.Status(400).SendString("invalid user Id")
	}

	result := database.Database.Db.Exec("DELETE FROM users WHERE id = $1", userID)
	if result.Error != nil {
		log.Printf("Error deleting user: %v\n", err)
		return c.Status(500).SendString("Error deleting user")
	}

	if result.RowsAffected == 0 {
		return c.Status(404).SendString("user not found")
	}

	responseMessage := fmt.Sprintf("user with id %d deleted", userID)
	log.Println(responseMessage)

	return c.Status(200).SendString(responseMessage)
}
