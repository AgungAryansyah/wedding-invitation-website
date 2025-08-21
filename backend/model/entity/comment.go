package entity

import (
	"time"

	"github.com/google/uuid"
)

type Comment struct {
	Id        uuid.UUID `json:"id" db:"id"`
	UserId    uuid.UUID `json:"user_id" db:"user_id"`
	Name      string    `json:"name" db:"name"`
	Content   string    `json:"content" db:"content"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
}
