-- +goose Up
-- +goose StatementBegin
ALTER TABLE rsvps 
ADD phone_number VARCHAR(13) DEFAULT '';
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
ALTER TABLE rsvps
DROP COLUMN IF EXISTS phone_number;
-- +goose StatementEnd
