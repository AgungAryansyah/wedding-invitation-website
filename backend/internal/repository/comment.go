package repository

import (
	"wedding-invitation-website/model/entity"
	"wedding-invitation-website/pkg/response"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
)

type ICommentRepository interface {
	CreateComment(comment entity.Comment) error
	GetComments(page, pageSize int) ([]entity.Comment, int64, error)
	DeleteComment(id uuid.UUID) error
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

func (r *CommentRepository) GetComments(page, pageSize int) ([]entity.Comment, int64, error) {
	offset := (page - 1) * pageSize

	var total int64
	countQuery := `SELECT COUNT(*) FROM comments`
	if err := r.db.Get(&total, countQuery); err != nil {
		return nil, 0, err
	}

	if total == 0 {
		return nil, 0, &response.CommentNotFound
	}

	query := `SELECT id, user_id, name, content, created_at FROM comments ORDER BY created_at DESC LIMIT $1 OFFSET $2`
	var comments []entity.Comment
	if err := r.db.Select(&comments, query, pageSize, offset); err != nil {
		return nil, 0, err
	}

	return comments, total, nil
}

func (r *CommentRepository) DeleteComment(id uuid.UUID) error {
	query := `DELETE FROM comments WHERE id = $1`
	result, err := r.db.Exec(query, id)
	if err != nil {
		return err
	}

	rows, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if rows == 0 {
		return &response.CommentNotFound
	}

	return nil
}
