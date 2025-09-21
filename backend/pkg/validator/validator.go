package validator

import (
	"regexp"

	"github.com/go-playground/validator/v10"
)

func RegisterValidator(v *validator.Validate) {
	v.RegisterValidation("phone", IndonesianPhone)
}

func IndonesianPhone(fl validator.FieldLevel) bool {
	phone := fl.Field().String()
	pattern := `^(\+62|62|0)8\d{8,13}$`
	re := regexp.MustCompile(pattern)
	return re.MatchString(phone)
}
