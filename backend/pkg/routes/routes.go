package routes

import (
	"wedding-invitation-website/pkg/middleware"

	"github.com/gofiber/fiber/v2"
)

type Route struct {
	app *fiber.App
	//handler    rest.Handler
	middleware middleware.IMiddleware
}

func NewRoute(app *fiber.App /*	, handler rest.Handler*/, middleware middleware.IMiddleware) *Route {
	return &Route{
		app: app,
		//handler:    handler,
		middleware: middleware,
	}
}

func (r *Route) RegisterRoutes(port string) error {
	// routerGroup := r.app.Group("/api/v1")

	return r.app.Listen(":" + port)
}
