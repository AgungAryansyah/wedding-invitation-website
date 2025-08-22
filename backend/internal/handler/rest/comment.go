package rest

import (
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/pkg/response"

	"github.com/gofiber/fiber/v2"
)

func (h *Handler) CreateComment(ctx *fiber.Ctx) error {
	var createComment dto.CreateComment
	if err := ctx.BodyParser(&createComment); err != nil {
		return &response.BadRequest
	}

	if err := h.service.CommentService.CreateComment(createComment); err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "Comment created successfully", nil)
}

func (h *Handler) GetComments(ctx *fiber.Ctx) error {
	page := ctx.QueryInt("page", 1)
	pageSize := ctx.QueryInt("pageSize", 10)

	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 10
	}

	comments, err := h.service.CommentService.GetComments(page, pageSize)
	if err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "Comments retrieved successfully", comments)
}
