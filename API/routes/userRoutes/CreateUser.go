package userRoutes

import (
	"charcha-api/database"
	"charcha-api/models"
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
		return c.Status(200).JSON("user exists")
	}

	result := database.Database.Db.Create(&user)
	if result.Error != nil {
		return c.Status(500).SendString("Error creating user")

	}

	//log.printf("User successfully created. ID: %v\n", models.User.ID)
	return c.SendString("Created User")

}

//
//func GetFirebaseUserData(c *fiber.Ctx) error {
//	// uid := c.Params("uid")
//	authHeader := c.Get("Authorization")
//	if authHeader == "" {
//		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
//			"message": "Authorization header is missing",
//		})
//	}
//
//	// Extract the token from the Authorization header
//	tokenParts := strings.Split(authHeader, " ")
//	if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
//		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
//			"message": "Invalid Authorization header format",
//		})
//	}
//	idToken := tokenParts[1]
//
//	uid, err := helpers.VerifyIDToken(context.Background(), helpers.InitializeAppDefault(), idToken)
//	if err != nil {
//		// log.Printf("Error verifying ID token: %v\n", token)
//		return c.Status(401).SendString("Invalid ID token")
//	}
//
//	log.Printf("ID token verified: %v\n", uid)
//
//	app := helpers.InitializeAppDefault()
//
//	// Fetch user data from Firebase authentication
//	user, err := getFirebaseUser(context.Background(), app, uid)
//	if err != nil {
//		log.Printf("Error fetching user data from Firebase: %v\n", err)
//
//		if auth.IsUserNotFound(err) {
//			return c.Status(404).SendString("User not found")
//		}
//
//		return c.Status(500).SendString("Error fetching user data from Firebase")
//	}
//
//	var createUser models.User
//	if err := c.BodyParser(&createUser); err != nil {
//		log.Printf("Error parsing JSON request body: %v\n", err)
//		return c.Status(400).JSON("Error parsing JSON: " + err.Error())
//	}
//
//	var existingUser models.User
//
//	if err := database.Database.Db.Where("email = ?", user.Email).First(&existingUser).Error; err == nil {
//		log.Printf("User with email %s already exists. Returning existing user.\n", user.Email)
//		return c.Status(200).JSON(existingUser)
//	}
//
//	userData := &models.User{
//		// "UID":         user.UID,
//		Name:              user.DisplayName,
//		Email:             user.Email,
//		ProfilePictureURL: user.PhotoURL,
//		ContactNumber:     createUser.ContactNumber,
//		Gender:            createUser.Gender,
//		YOB:               createUser.YOB,
//	}
//
//	result := database.Database.Db.Create(&userData)
//	if result.Error != nil {
//		log.Printf("Error creating user: %v\n", result.Error)
//		return c.Status(500).SendString("Error creating user")
//	}
//
//	log.Printf("User successfully created. ID: %v\n", userData)
//
//	return c.Status(200).JSON(userData)
//}

//func getFirebaseUser(ctx context.Context, app *firebase.App, uid string) (*auth.UserRecord, error) {
//	client, err := app.Auth(ctx)
//	if err != nil {
//		return nil, err
//	}
//
//	user, err := client.GetUser(ctx, uid)
//	if err != nil {
//		return nil, err
//	}
//
//	return user, nil
//}
