package fiber

import (
	"time"
	"wedding-invitation-website/pkg/response"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/limiter"
)

func Start() *fiber.App {
	app := fiber.New(
		fiber.Config{
			ErrorHandler: response.CustomErrorHandler,
		},
	)

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173", //should be updated for prod
		AllowMethods:     "GET, POST, DELETE, PATCH, PUT",
		AllowHeaders:     "Content-Type, Authorization, X-Requested-With",
		AllowCredentials: true,
	}))

	app.Use(limiter.New(limiter.Config{
		Max:        20,
		Expiration: 30 * time.Second,
		KeyGenerator: func(c *fiber.Ctx) string {
			return c.Get("x-forwarded-for")
		},
		LimiterMiddleware: limiter.SlidingWindow{},
		LimitReached: func(c *fiber.Ctx) error {
			return &response.TooManyRequests
		},
	}))
	return app
}
