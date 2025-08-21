-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS status(
    id SMALLSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO status (name) VALUES
    ('Hadir'),
    ('Tidak Hadir'),
    ('Belum Pasti');

CREATE TABLE IF NOT EXISTS rsvps(
    id UUID PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    status_id SMALLINT NOT NULL  REFERENCES status(id) ON DELETE CASCADE
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS rsvps;
DROP TABLE IF EXISTS status;
-- +goose StatementEnd
