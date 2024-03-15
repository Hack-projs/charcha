package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	UserID          uint   `gorm:"notnull;" json:"user_id"`
	User            User   `gorm:"foreignKey:UserID;references:ID" json:"host_user"`
	Name            string `gorm:"notnull;" json:"name"`
	ProductCategory string `gorm:"notnull;" json:"product_category"`
	PositiveRatings uint64 `gorm:"notnull;default:0;" json:"positive_rating"`
	NegativeRatings uint64 `gorm:"notnull;default:0;" json:"negative_rating"`
	NeutralRatings  uint64 `gorm:"notnull;default:0;" json:"neutral_rating"`
}
