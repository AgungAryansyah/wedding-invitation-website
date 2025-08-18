package repository

import (
	"wedding-invitation-website/model/entity"

	"github.com/jmoiron/sqlx"
)

type IRSVPRepository interface {
	CreateRSVP(rsvp entity.RSVP) error
}

type RSVPRepository struct {
	db *sqlx.DB
}

func NewRSVPRepository(db *sqlx.DB) IRSVPRepository {
	return &RSVPRepository{
		db: db,
	}
}

func (r *RSVPRepository) CreateRSVP(rsvp entity.RSVP) error {
	query := `INSERT INTO rsvps (id, user_id, name, status_id) VALUES (:id, :user_id, :name, :status_id)`

	_, err := r.db.NamedExec(query, rsvp)
	return err
}
