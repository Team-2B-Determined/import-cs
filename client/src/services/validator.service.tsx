import validator from 'validator'

class validation {
    required(value) {
        if (!value.toString().trim().length) {
            return <div>require</div>
        }
    }

    email(value) {
        if(!validator.isEmail(value)) {
            return <div>{value} is not a valid email.</div>
        }
    }

    password(value) {
        if (value.length < 6 || value.length > 40) {
            return <div>The password must be between 6 and 40 characters.</div>
        }
    }
}

export default new validation()