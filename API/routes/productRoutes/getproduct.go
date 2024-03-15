package productRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
	"github.com/gofiber/fiber/v2"
	"strconv"
)

func GetProduct(c *fiber.Ctx) error {
	ProductID, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON("Error parsing JSON: " + err.Error())
	}
	product := models.Product{}
	err = database.Database.Db.Where("id = ?", ProductID).First(&product).Error
	if err != nil {
		return c.Status(404).JSON("product does not exist")
	}

	productDetails := fiber.Map{
		"name":             product.Name,
		"product_category": product.ProductCategory,
		"positive_ratings": product.PositiveRatings,
		"negative_ratings": product.NegativeRatings,
		"neutral_ratings":  product.NeutralRatings,
	}

	return c.Status(200).JSON(productDetails)
}
