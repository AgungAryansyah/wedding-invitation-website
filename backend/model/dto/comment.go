package dto

import (
	"time"

	"github.com/google/uuid"
)

type CommentDto struct {
	Name      string    `json:"name"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"created_at"`
}

type CreateComment struct {
	UserId  uuid.UUID `json:"user_id" validate:"required,uuid"`
	Name    string    `json:"name" validate:"required"`
	Content string    `json:"content" validate:"required"`
}

type CommentResponse struct {
	Data       []CommentDto   `json:"data"`
	Pagination PaginationMeta `json:"pagination"`
}
