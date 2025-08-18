package dto

type RegisterReq struct {
	Name     string `json:"name" validate:"required,min=6" binding:"required"`
	Password string `json:"password" validate:"required" binding:"required"`
}

type LoginReq struct {
	Name     string `json:"name" validate:"required,min=6" binding:"required"`
	Password string `json:"password" validate:"required,gte=8" binding:"required"`
}

type LoginRes struct {
	Token string `json:"token"`
}
