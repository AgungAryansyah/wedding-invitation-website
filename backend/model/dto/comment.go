package dto

import (
	"github.com/google/uuid"
)

type CreateComment struct {
	UserId  uuid.UUID `json:"user_id" validate:"required,uuid"`
	Name    string    `json:"name" validate:"required"`
	Content string    `json:"content" validate:"required"`
}
