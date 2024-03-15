package main

import (
	"charcha-api/database"
	"charcha-api/routes/productRoutes"
	"charcha-api/routes/userRoutes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})
	//user routes
	app.Post("/user", userRoutes.CreateUser)
	app.Get("/user/:id", userRoutes.GetService)
	app.Delete("/user/:id", userRoutes.DeleteService)
	app.Get("/userall", userRoutes.GetallUsers)

	//product routes
	app.Post("/product", productRoutes.CreateOrGetProduct)
	app.Get("/product/:id", productRoutes.GetProduct)
	app.Put("/product/:id", productRoutes.UpdateProduct)
	app.Get("/productall", productRoutes.Getallprods)
}

func main() {
	app := fiber.New()

	database.ConnectToDB()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
	}))

	SetupRoutes(app)

	app.Listen(":3000")

}
