// Kali
// login forms from:
// https://react-bootstrap.github.io/components/forms/
import {Component} from "react";
import {Button, Card, Nav} from "react-bootstrap";
import Form from 'react-validation/build/form.js';
import Input from 'react-validation/build/input.js';
import authService from "../../services/auth.service";
import validationService from "../../services/validator.service"

interface loginState {
    email: string,
    password: string
}


export default class Login extends Component<{}, loginState> {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmitLogin = this.onSubmitLogin.bind(this)
        this.state = {
            email: "",
            password: ""
        }
    }

    onChangeEmail(event) {
        event.preventDefault()
        this.setState({ email: event.target.value })
    }

    onChangePassword(event) {
        event.preventDefault()
        this.setState({ password: event.target.value })
    }

    onSubmitLogin(event) {
        event.preventDefault()
        authService.login(this.state.email, this.state.password)
            .then( () => {})
    }

    render() {
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>

                        <Form onSubmit={this.onSubmitLogin}>
                            <div>
                                <label>
                                    <br/>
                                    Email Address
                                    <Input
                                        type='email'
                                        name='email'
                                        onChange={this.onChangeEmail}
                                        validations={[validationService.required, validationService.email]}/>
                                </label>
                            </div>

                            <div>
                                <label>
                                    <br/>
                                    Password
                                    <Input
                                        type='password'
                                        name='password'
                                        onChange={this.onChangePassword}
                                        validations={[validationService.required, validationService.password]}/>
                                </label>
                            </div>

                            <div>
                                <br/>
                                Don't have an account?
                                <Nav.Link href="./register">Register Here</Nav.Link>
                            </div>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>




                </Card.Body>
            </Card>
        )
    }
}