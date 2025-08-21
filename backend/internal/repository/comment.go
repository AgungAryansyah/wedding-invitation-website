package repository

import (
	"wedding-invitation-website/model/entity"

	"github.com/jmoiron/sqlx"
)

type ICommentRepository interface {
	CreateComment(comment entity.Comment) error
}

type CommentRepository struct {
	db *sqlx.DB
}

func NewCommentRepository(db *sqlx.DB) ICommentRepository {
	return &CommentRepository{
		db: db,
	}
}
func (r *CommentRepository) CreateComment(comment entity.Comment) error {
	query := `INSERT INTO comments (id, user_id, name, content, created_at) VALUES (:id, :user_id, :name, :content, :created_at)`

	_, err := r.db.NamedExec(query, comment)
	if err != nil {
		return err
	}

	return nil
}
