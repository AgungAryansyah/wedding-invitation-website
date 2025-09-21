package entity

import "github.com/google/uuid"

type RSVP struct {
	Id          uuid.UUID `json:"id" db:"id"`
	UserId      uuid.UUID `json:"user_id" db:"user_id"`
	Name        string    `json:"name" db:"name"`
	PhoneNumber string    `json:"phone_number" db:"phone_number"`
	StatusId    int       `json:"status_id" db:"status_id"`
}
