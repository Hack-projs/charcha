package main

import (
	"charcha-api/database"
	"charcha-api/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	database.ConnectToDB()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	//user routes
	app.Post("/user", routes.CreateUser)
	app.Get("/user/:id", routes.GetService)
	app.Delete("/user/:id", routes.DeleteService)
	app.Listen(":3000")
}
