package routes

import (
	"wedding-invitation-website/internal/handler/rest"
	"wedding-invitation-website/pkg/middleware"

	"github.com/gofiber/fiber/v2"
)

type Route struct {
	app        *fiber.App
	handler    *rest.Handler
	middleware middleware.IMiddleware
}

func NewRoute(app *fiber.App, handler *rest.Handler, middleware middleware.IMiddleware) *Route {
	return &Route{
		app:        app,
		handler:    handler,
		middleware: middleware,
	}
}

func (r *Route) RegisterRoutes(port string) error {
	routerGroup := r.app.Group("/api/v1")

	r.mountAuth(routerGroup)
	r.mountRSVP(routerGroup)
	r.mountComment(routerGroup)

	return r.app.Listen(":" + port)
}

func (r *Route) mountAuth(routerGroup fiber.Router) {
	auth := routerGroup.Group("/auth")

	auth.Post("/register", r.handler.Register)
	auth.Post("/login", r.handler.Login)
}

func (r *Route) mountRSVP(routerGroup fiber.Router) {
	rsvp := routerGroup.Group("/rsvp")

	rsvp.Post("/", r.handler.CreateRSVP)
	rsvp.Get("/", r.handler.GetRSVPs)
	rsvp.Delete("/:id", r.handler.DeleteRSVP)
}

func (r *Route) mountComment(routerGroup fiber.Router) {
	comment := routerGroup.Group("/comment")

	comment.Post("/", r.handler.CreateComment)
	comment.Get("/", r.handler.GetComments)
	comment.Delete("/:id", r.handler.DeleteComment)
}
