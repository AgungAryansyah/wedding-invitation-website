package dto

import "github.com/google/uuid"

type RSVPResponse struct {
	Id       uuid.UUID `json:"id"`
	Name     string    `json:"name"`
	StatusId int       `json:"status_id"`
}

type CreateRSVP struct {
	UserId   uuid.UUID `json:"user_id" validate:"required"`
	Name     string    `json:"name" validate:"required"`
	StatusId int       `json:"status_id" validate:"required,gte=1,lte=3"`
}

type GetRSVPsResponse struct {
	Data       []RSVPResponse `json:"data"`
	Pagination PaginationMeta `json:"pagination"`
}
