package rest

import (
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/pkg/response"

	"github.com/gofiber/fiber/v2"
)

func (h *Handler) CreateRSVP(ctx *fiber.Ctx) error {
	var create dto.CreateRSVP
	if err := ctx.BodyParser(&create); err != nil {
		return &response.BadRequest
	}

	if err := h.service.RSVPService.CreateRSVP(create); err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "RSVP created successfully", nil)
}
