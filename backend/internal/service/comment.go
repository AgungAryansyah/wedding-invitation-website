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
	GetComments(page, pageSize int) (*dto.DataWithPagination[entity.Comment], error)
	DeleteComment(id uuid.UUID) error
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

func (s *CommentService) GetComments(page, pageSize int) (*dto.DataWithPagination[entity.Comment], error) {
	comments, total, err := s.CommentRepository.GetComments(page, pageSize)
	if err != nil {
		return nil, err
	}

	pagination := dto.PaginationMeta{
		Page:       page,
		PageSize:   pageSize,
		Total:      total,
		TotalPages: int((total + int64(pageSize) - 1) / int64(pageSize)),
	}

	dataWithPagination := dto.DataWithPagination[entity.Comment]{
		Data:       comments,
		Pagination: pagination,
	}

	return &dataWithPagination, nil
}

func (s *CommentService) DeleteComment(id uuid.UUID) error {
	return s.CommentRepository.DeleteComment(id)
}
