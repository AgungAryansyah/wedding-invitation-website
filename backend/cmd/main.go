package main

import (
	"wedding-invitation-website/pkg/fiber"
)

func main() {

	app := fiber.Start()
	app.Listen(":" + "3000")
}
