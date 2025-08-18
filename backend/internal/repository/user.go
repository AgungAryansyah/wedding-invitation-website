package repository

import (
	"database/sql"
	"errors"
	"wedding-invitation-website/model/entity"
	"wedding-invitation-website/pkg/response"

	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"
)

type IUserRepository interface {
	CreateUser(user *entity.User) error
	GetUser(name string) (*entity.User, error)
}

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) IUserRepository {
	return &UserRepository{db}
}

func (r *UserRepository) CreateUser(user *entity.User) error {
	query := `INSERT INTO users (id, name, password) VALUES ($1, $2, $3)`

	_, err := r.db.Exec(query, user.Id, user.Name, user.Password)
	var pgErr *pq.Error
	if errors.As(err, &pgErr) && pgErr.Code == "23505" {
		return &response.DuplicateAccount
	}

	return err
}

func (r *UserRepository) GetUser(name string) (user *entity.User, err error) {
	user = &entity.User{}
	query := `SELECT * FROM users WHERE name = $1`

	err = r.db.Get(user, query, name)
	if errors.Is(err, sql.ErrNoRows) {
		return nil, &response.UserNotFound
	}

	return user, err
}
