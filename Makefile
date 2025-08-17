include .env
export

DB_URL := postgres://$(DB_USER):$(DB_PASS)@$(DB_HOST):$(DB_PORT)/$(DB_NAME)?sslmode=disable

run:
	@go run cmd/main.go

migrate-status:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=db/migrations status

migrate-create:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=db/migrations create $(name) sql

migrate-up:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=db/migrations up

migrate-down:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=db/migrations down
