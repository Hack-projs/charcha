package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username      string `gorm:"not null;uniqueIndex; " json:"username"`
	Email         string `gorm:"not null;uniqueIndex; " json:"email"`
	ContactNumber string `gorm:"not null;uniqueIndex;" json:"contact_number"`
}
