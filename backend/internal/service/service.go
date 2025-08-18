package service

import (
	"wedding-invitation-website/internal/repository"
	"wedding-invitation-website/pkg/jwt"
)

type Service struct {
	AuthService IAuthService
}

func NewService(repository *repository.Repository, jwt jwt.IJWT) *Service {
	return &Service{
		AuthService: NewAuthService(repository.UserRepository, jwt),
	}
}
