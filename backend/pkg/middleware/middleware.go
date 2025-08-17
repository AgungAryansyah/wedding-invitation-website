package middleware

import (
	"wedding-invitation-website/pkg/jwt"

	"github.com/gofiber/fiber/v2"
)

type IMiddleware interface {
	Authentication(*fiber.Ctx) error
}

type Middleware struct {
	jwt jwt.IJWT
}

func NewMiddleware(jwt jwt.IJWT) IMiddleware {
	return &Middleware{
		jwt: jwt,
	}
}
