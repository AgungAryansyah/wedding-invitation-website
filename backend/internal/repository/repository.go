package repository

import "github.com/jmoiron/sqlx"

type Repository struct {
	UserRepository IUserRepository
	RSVPRepository IRSVPRepository
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		UserRepository: NewUserRepository(db),
		RSVPRepository: NewRSVPRepository(db),
	}
}
