package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name            string `gorm:"notnull;" json:"name"`
	ProductCategory string `gorm:"notnull;" json:"product_category"`
	//Price           float64 `gorm:"notnull" json:"price"`
	PositiveRatings uint64 `gorm:"notnull;default:0;" json:"rating"`
	NegativeRatings uint64 `gorm:"notnull;default:0;" json:"rating"`
	NeutralRatings  uint64 `gorm:"notnull;default:0;" json:"rating"`
}
