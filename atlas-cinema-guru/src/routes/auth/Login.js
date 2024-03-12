// Login.js
import React from "react";
import './auth.css';
// import Dashboard from "../dashboard/Dashboard";
import Button from '../../components/general/Button';
// import Input from "../../components/general/Input";
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setPassword, setUsername }) => {
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login">
            <p>Sign in with your account</p>
            <input
                type="text"
                placeholder="Username:"
                value={username}
                onChange={handleUsernameChange}
                icon={faUser}
                className="input-user"
            />
            <input
                type="password"
                placeholder="Password:"
                value={password}
                onChange={handlePasswordChange}
                className="input-password"
            />
            <Button label="  Sign In" type='submit' className="login-button" icon={faKey} />
        </div>
    );
}

export default Login;

