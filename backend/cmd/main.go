package main

import (
	"fmt"
	"log"
	"os"
	"wedding-invitation-website/pkg/fiber"
	"wedding-invitation-website/pkg/postgres"
)

func main() {
	_, err := postgres.Connect()
	if err != nil {
		log.Fatal(err.Error())
	}
	fmt.Println("Connected to the database successfully")

	app := fiber.Start()
	app.Listen(":" + os.Getenv("APP_PORT"))

}
