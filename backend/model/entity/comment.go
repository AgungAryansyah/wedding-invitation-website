package entity

type Comment struct {
	ID        string `json:"id"`
	UserID    int    `json:"user_id"`
	Name      string `json:"name"`
	Content   string `json:"content"`
	CreatedAt string `json:"created_at"`
}
