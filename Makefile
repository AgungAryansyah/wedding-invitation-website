include .env
export

DB_URL := postgres://$(DB_USER):$(DB_PASS)@$(DB_HOST):$(DB_PORT)/$(DB_NAME)?sslmode=disable
MIGRATIONS_DIR := $(if $(wildcard backend/db/migrations),backend/db/migrations,db/migrations)

run:
	@go run backend/cmd/main.go

migrate-status:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=$(MIGRATIONS_DIR) status

migrate-create:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=$(MIGRATIONS_DIR) create $(name) sql

migrate-up:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=$(MIGRATIONS_DIR) up

migrate-down:
	@GOOSE_DRIVER=postgres GOOSE_DBSTRING=$(DB_URL) goose -dir=$(MIGRATIONS_DIR) down