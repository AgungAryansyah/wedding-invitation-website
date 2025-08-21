package dto

type CommentDto struct {
	Name      string `json:"name"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
}

type CreateComment struct {
	UserId  int    `json:"user_id" validate:"required,uuid"`
	Name    string `json:"name" validate:"required"`
	Content string `json:"content" validate:"required"`
}
