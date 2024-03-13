// Login.js
import React, { useState } from "react";
import './auth.css';
// import Dashboard from "../dashboard/Dashboard";
import Button from '../../components/general/Button';
import Input from "../../components/general/Input";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setPassword, setUsername }) => {

    // password hidden by default
    const [hidden, setHidden] = useState(false);

    // toggle password visibility
    const togglePassword = () => {
        setHidden(!hidden);
    };


    return (
        <div className="login">
            <p>Sign in with your account</p>
            <div className="user-label">
            <Input
                type='text'
                label="Username:"
                value={username}
                setValue={setUsername}
                className="input-user"
                icon={faUser}
            />
            <Input
                type="password"
                label="Password:"
                value={password}
                setValue={setPassword}
                className="input-password"
                isHidden={hidden}
                togglePassword={togglePassword}
                icon={faKey}
                showPassword={true}
            />
            </div>
            <Button label="  Sign In" type='submit' className="login-button" icon={faKey} />
        </div>
    );
}

export default Login;
