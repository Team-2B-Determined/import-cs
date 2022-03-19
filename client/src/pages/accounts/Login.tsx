// Kali
// login forms from:
// https://react-bootstrap.github.io/components/forms/
import {Component} from "react";
import {Button, Card, Form, Nav} from "react-bootstrap";
import authService from "../../services/auth.service";

interface loginState {
    email: string,
    password: string,
    verified: boolean
}


export default class Login extends Component<{}, loginState> {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmitLogin = this.onSubmitLogin.bind(this)
        this.state = {
            email: "",
            password: "",
            verified: true,
            // should be false
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
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <div>

                            <Form onSubmit={this.onSubmitLogin}>
                                <Form.Group className="login-email" controlId="formBasicEmail" onChange={this.onChangeEmail}>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={this.onChangePassword}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember this login" />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled = {!this.state.verified}>
                                    Login
                                </Button>
                            </Form>

                            <Card.Text> Don't have an account?
                                <Nav.Link href="./register">Register Here</Nav.Link>
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}