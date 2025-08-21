package service

import (
	"wedding-invitation-website/internal/repository"
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/model/entity"

	"github.com/google/uuid"
)

type IRSVPService interface {
	CreateRSVP(create dto.CreateRSVP) error
	GetRSVPs(page, pageSize int) (*dto.GetRSVPsResponse, error)
}

type RSVPService struct {
	RSVPRepository repository.IRSVPRepository
	UserRepository repository.IUserRepository
}

func NewRSVPService(RSVPRepository repository.IRSVPRepository, UserRepository repository.IUserRepository) IRSVPService {
	return &RSVPService{
		RSVPRepository: RSVPRepository,
		UserRepository: UserRepository,
	}
}

func (s *RSVPService) CreateRSVP(create dto.CreateRSVP) error {
	_, err := s.UserRepository.GetUserById(create.UserId)
	if err != nil {
		return err
	}

	rsvp := entity.RSVP{
		Id:       uuid.New(),
		UserId:   create.UserId,
		Name:     create.Name,
		StatusId: create.StatusId,
	}

	if err := s.RSVPRepository.CreateRSVP(rsvp); err != nil {
		return err
	}

	return nil
}

func (s *RSVPService) GetRSVPs(page, pageSize int) (*dto.GetRSVPsResponse, error) {
	rsvps, total, err := s.RSVPRepository.GetRSVPs(page, pageSize)
	if err != nil {
		return nil, err
	}

	rsvpResponses := make([]dto.RSVPResponse, len(rsvps))
	for i, rsvp := range rsvps {
		rsvpResponses[i] = dto.RSVPResponse{
			Id:       rsvp.Id,
			Name:     rsvp.Name,
			StatusId: rsvp.StatusId,
		}
	}

	totalPages := int((total + int64(pageSize) - 1) / int64(pageSize))

	response := &dto.GetRSVPsResponse{
		Data: rsvpResponses,
		Pagination: dto.PaginationMeta{
			Page:       page,
			PageSize:   pageSize,
			Total:      total,
			TotalPages: totalPages,
		},
	}

	return response, nil
}
