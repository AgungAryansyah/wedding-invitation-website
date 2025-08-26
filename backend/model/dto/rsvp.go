package dto

import "github.com/google/uuid"

type CreateRSVP struct {
	UserId   uuid.UUID `json:"user_id" validate:"required"`
	Name     string    `json:"name" validate:"required"`
	StatusId int       `json:"status_id" validate:"required,gte=1,lte=3"`
}
