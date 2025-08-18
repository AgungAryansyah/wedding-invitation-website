package rest

import (
	"os"
	"strconv"
	"time"
	"wedding-invitation-website/model/dto"
	"wedding-invitation-website/pkg/response"

	"github.com/gofiber/fiber/v2"
)

func (h *Handler) Register(ctx *fiber.Ctx) error {
	var register dto.RegisterReq
	if err := ctx.BodyParser(&register); err != nil {
		return err
	}

	if err := h.validator.Struct(register); err != nil {
		return err
	}

	if err := h.service.AuthService.Register(&register); err != nil {
		return err
	}

	return response.HttpSuccess(ctx, "success", nil)
}

func (h *Handler) Login(ctx *fiber.Ctx) error {
	var login dto.LoginReq
	if err := ctx.BodyParser(&login); err != nil {
		return err
	}

	if err := h.validator.Struct(login); err != nil {
		return err
	}

	expiry, err := strconv.Atoi(os.Getenv("JWT_EXPIRED"))
	if err != nil {
		return err
	}

	res, err := h.service.AuthService.Login(&login, expiry)
	if err != nil {
		return err
	}

	ctx.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    res.Token,
		Expires:  time.Now().Add(time.Duration(expiry) * time.Second),
		HTTPOnly: true,
		Secure:   false,
		Path:     "/",
		SameSite: "None",
	})

	return response.HttpSuccess(ctx, "success", nil)
}
