//Kali
import {Component} from "react";
import {Button, Card, Nav} from "react-bootstrap";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import authService from "../../services/auth.service";
import validationService from "../../services/validator.service"

interface registerState {
    email: string,
    password: string,
    password2: string,
    message: string
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
            password2: "",
            message: ""
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
        this.setState({ password2: event.target.value })
    }

    onSubmitRegister(event) {
        event.preventDefault()
        if (this.state.password == this.state.password2) {
            let roles = []
            authService.register(this.state.email, this.state.password, roles)
                .then( () => {
                    authService.login(this.state.email, this.state.password)
                        .then( () => {
                            if (authService.isLoggedIn()) {
                                //Apply settings
                            }
                            else {
                                this.setState({message: "Email already in use"})
                            }
                        })
                })
        }
        else {
            this.setState({password: ''})
            this.setState({password2: ''})
        }
    }

    render() {
        return (
            <Card style={{width: '20rem'}}>
                <Card.Body>
                    <Card.Title>Registration</Card.Title>

                    <Form onSubmit={this.onSubmitRegister}>
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
                            <label>
                                <br/>
                                Confirm Password*
                                <Input
                                    type='password'
                                    name='password confirm'
                                    onChange={this.onChangePasswordConfirm}
                                    validations={[validationService.required, validationService.password]}/>
                            </label>
                        </div>

                        <div>
                            <br/>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </div>

                        <div>
                            {"\t" + this.state.message}
                        </div>

                        <div>
                            <br/>
                            Already have an account?
                            <Nav.Link href="./login">Login Here</Nav.Link>
                        </div>
                    </Form>

                </Card.Body>
            </Card>

        )
    }
}