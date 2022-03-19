class validator {

    email(value) {
        if (value.include`@` && value.length > 5 && value.length < 50) {
            return "valid"
        }
        else {
            return "Invalid email"
        }
    }

    password(value) {
        if (value.length > 8 && value.length < 50) {
            return "valid"
        }
        else {
            return "Password must be between 8 and 50 characters"
        }
    }
}

export default new validator()