package repository

import (
	"wedding-invitation-website/model/entity"
	"wedding-invitation-website/pkg/response"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type IRSVPRepository interface {
	CreateRSVP(rsvp entity.RSVP) error
	GetRSVPs(page, pageSize int) ([]entity.RSVP, int64, error)
	DeleteRSVP(id uuid.UUID) error
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

func (r *RSVPRepository) GetRSVPs(page, pageSize int) ([]entity.RSVP, int64, error) {
	offset := (page - 1) * pageSize

	var total int64
	countQuery := `SELECT COUNT(*) FROM rsvps`
	if err := r.db.Get(&total, countQuery); err != nil {
		return nil, 0, err
	}

	query := `SELECT id, user_id, name, status_id FROM rsvps ORDER BY name LIMIT $1 OFFSET $2`
	var rsvps []entity.RSVP
	if err := r.db.Select(&rsvps, query, pageSize, offset); err != nil {
		return nil, 0, err
	}

	return rsvps, total, nil
}

func (r *RSVPRepository) DeleteRSVP(id uuid.UUID) error {
	query := `DELETE FROM rsvps WHERE id = $1`
	result, err := r.db.Exec(query, id)
	if err != nil {
		return err
	}

	rows, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rows == 0 {
		return &response.RSVPNotFound
	}

	return nil
}
