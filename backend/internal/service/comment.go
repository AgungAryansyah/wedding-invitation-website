package service

import (
	"time"
	"wedding-invitation-website/internal/repository"
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/model/entity"

	"github.com/google/uuid"
)

type ICommentService interface {
	CreateComment(createComment dto.CreateComment) error
}

type CommentService struct {
	CommentRepository repository.ICommentRepository
	UserRepository    repository.IUserRepository
}

func NewCommentService(commentRepository repository.ICommentRepository, userRepository repository.IUserRepository) ICommentService {
	return &CommentService{
		CommentRepository: commentRepository,
		UserRepository:    userRepository,
	}
}

func (s *CommentService) CreateComment(createComment dto.CreateComment) error {
	_, err := s.UserRepository.GetUserById(createComment.UserId)
	if err != nil {
		return err
	}

	comment := entity.Comment{
		Id:        uuid.New(),
		UserId:    createComment.UserId,
		Name:      createComment.Name,
		Content:   createComment.Content,
		CreatedAt: time.Now(),
	}

	if err := s.CommentRepository.CreateComment(comment); err != nil {
		return err
	}

	return nil
}
