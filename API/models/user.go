package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username          string `gorm:"type:varchar(100);not null;uniqueIndex; " json:"username"`
	Email             string `gorm:"type:varchar(100);not null;uniqueIndex; " json:"email"`
	ProfilePictureURL string `gorm:"type:text" json:"profile_picture_url"`
	ContactNumber     string `gorm:"type:varchar(10);not null;uniqueIndex;" json:"contact_number"`
}
