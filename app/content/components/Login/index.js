import React, { PureComponent } from "react";
import { Control, Form } from 'react-redux-form';
import { updateComponentMode } from "../../../actions/forms";
import { connect } from "react-redux";

import "./Login.scss";
const logo = require('../../../assets/images/logo.png');

const mapStateToProps = state => {
    return {
        loginForm: state.form.login
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateComponentMode: newComponentMode => { dispatch(updateComponentMode(newComponentMode)) }
    }
}

class LoginImpl extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            username: 'admin',
            password: 'admin'
        };
    }

    getError() {
        const username = this.props.loginForm.username;
        const password = this.props.loginForm.password;
        if (username === '' && password === '') {
            return 'Username and Password cannot be left blank';
        }
        if (password === '') {
            return 'Password cannot be empty!';
        }
        if (username === '') {
            return 'Username cannot be empty!';
        }
        return null;
    }

    handleLogin = () => {
        const error = this.getError();
        if (error !== null) {
            this.setState({ error: true, errorMessage: this.getError() });
        } else {
            console.log("Login Successful");
            window.open('#/MainScreen', '_self');
        }
    };

    render() {
        return (
            <div className="login-screen">
                <Form model="form.login" className="login-form" name="login-form" onSubmit={this.handleLogin}>
                    <div className="text-center">
                        <img src={logo} alt="_Tribyl" title="Welcome to Tribyl" />
                    </div>
                    <Control.text
                        id="username"
                        placeholder="Username"
                        model=".username" />
                    <i className="prompt-icon ion-person" />
                    <Control
                        id="password"
                        type="password"
                        placeholder="Password"
                        model=".password" />
                    <i className="prompt-icon ion-locked" />
                    <p className={this.state.error ? 'd-block error-message' : 'd-none error-message'}>
                        <i className="ion-ios-information" />
                        {this.state.errorMessage}
                    </p>
                    <button type="submit">
                        Login Now
                    </button>
                    <a className="forgot-password-link">Lost your password?</a>
                </Form>
            </div>
        );
    }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginImpl);
