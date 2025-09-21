package rest

import (
	"strconv"
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/pkg/response"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func (h *Handler) CreateRSVP(ctx *fiber.Ctx) error {
	var create dto.CreateRSVP
	if err := ctx.BodyParser(&create); err != nil {
		return &response.BadRequest
	}

	if err := h.validator.Struct(create); err != nil {
		return err
	}

	if err := h.service.RSVPService.CreateRSVP(create); err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "RSVP created successfully", nil)
}

func (h *Handler) GetRSVPs(ctx *fiber.Ctx) error {
	pageStr := ctx.Query("page", "1")
	pageSizeStr := ctx.Query("page_size", "10")

	page, err := strconv.Atoi(pageStr)
	if err != nil {
		return &response.BadRequest
	}

	pageSize, err := strconv.Atoi(pageSizeStr)
	if err != nil {
		return &response.BadRequest
	}

	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 10
	}

	result, err := h.service.RSVPService.GetRSVPs(page, pageSize)
	if err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "RSVPs retrieved successfully", result)
}

func (h *Handler) DeleteRSVP(ctx *fiber.Ctx) error {
	id, err := uuid.Parse(ctx.Params("id"))
	if err != nil {
		return &response.BadRequest
	}

	if err := h.service.RSVPService.DeleteRSVP(id); err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "RSVP deleted successfully", nil)
}
