package repository

import "github.com/jmoiron/sqlx"

type Repository struct {
	UserRepository    IUserRepository
	RSVPRepository    IRSVPRepository
	CommentRepository ICommentRepository
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		UserRepository:    NewUserRepository(db),
		RSVPRepository:    NewRSVPRepository(db),
		CommentRepository: NewCommentRepository(db),
	}
}
