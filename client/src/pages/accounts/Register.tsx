//Kali
import {Component} from "react";
import {Button, Card, Form} from "react-bootstrap";
import authService from "../../services/auth.service";

interface registerState {
    email: string,
    password: string,
    passwordConfirm: string,
    verified: boolean
}

export default class Register extends Component<{}, registerState> {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this)
        this.onSubmitRegister = this.onSubmitRegister.bind(this)
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
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

    onChangePasswordConfirm(event) {
        event.preventDefault()
        this.setState({ passwordConfirm: event.target.value })
    }

    onSubmitRegister(event) {
        event.preventDefault()
        if (this.state.password == this.state.passwordConfirm) {
            let roles = []
            authService.register(this.state.email, this.state.password, roles)
                .then( () => {})
        }
    }

    render() {
        return (
            <div>
                <Card style={{width: '20rem'}}>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <div>
                            <Form onSubmit={this.onSubmitRegister}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" onChange={this.onChangeEmail}>
                                    <Form.Label>Register with Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={this.onChangePassword}>
                                    <Form.Label>Create Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword" onChange={this.onChangePasswordConfirm}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}