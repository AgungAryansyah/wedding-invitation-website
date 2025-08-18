package service

import (
	"wedding-invitation-website/internal/repository"
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/model/entity"
	"wedding-invitation-website/pkg/jwt"
	"wedding-invitation-website/pkg/response"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type IAuthService interface {
	Register(register *dto.RegisterReq) error
	Login(login *dto.LoginReq, expiry int) (res *dto.LoginRes, err error)
}

type AuthService struct {
	UserRepository repository.IUserRepository
	jwt            jwt.IJWT
}

func NewAuthService(UserRepository repository.IUserRepository, jwt jwt.IJWT) IAuthService {
	return &AuthService{
		UserRepository: UserRepository,
		jwt:            jwt,
	}
}

func (s *AuthService) Register(register *dto.RegisterReq) error {
	hasedPassword, err := bcrypt.GenerateFromPassword([]byte(register.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user := &entity.User{
		Id:       uuid.New(),
		Name:     register.Name,
		Password: string(hasedPassword),
	}

	if err := s.UserRepository.CreateUser(user); err != nil {
		return err
	}

	return nil
}

func (s *AuthService) Login(login *dto.LoginReq, expiry int) (res *dto.LoginRes, err error) {
	user, err := s.UserRepository.GetUser(login.Name)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(login.Password))
	if err != nil {
		return nil, &response.InvalidCredentials
	}

	token, err := s.jwt.GenerateToken(user.Id)
	if err != nil {
		return nil, err
	}

	return &dto.LoginRes{
		Token: token,
	}, nil
}
