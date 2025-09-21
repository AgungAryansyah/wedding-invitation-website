package main

import (
	"log"
	"os"
	"wedding-invitation-website/internal/handler/rest"
	"wedding-invitation-website/internal/repository"
	"wedding-invitation-website/internal/service"
	"wedding-invitation-website/pkg/env"
	"wedding-invitation-website/pkg/fiber"
	"wedding-invitation-website/pkg/jwt"
	"wedding-invitation-website/pkg/middleware"
	"wedding-invitation-website/pkg/postgres"
	"wedding-invitation-website/pkg/routes"
	pkg_val "wedding-invitation-website/pkg/validator"

	"github.com/go-playground/validator/v10"
)

func main() {
	err := env.Load()
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	db, err := postgres.Connect()
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	jwt := jwt.NewJwt()
	middleware := middleware.NewMiddleware(jwt)

	validator := validator.New(validator.WithRequiredStructEnabled())
	pkg_val.RegisterValidator(validator)

	repository := repository.NewRepository(db)
	service := service.NewService(repository, jwt)
	handler := rest.NewHandler(service, middleware, validator)

	app := fiber.Start()
	route := routes.NewRoute(app, handler, middleware)
	route.RegisterRoutes(os.Getenv("APP_PORT"))
}
