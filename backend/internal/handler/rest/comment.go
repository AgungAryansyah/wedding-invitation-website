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
