// Login.js
import React from "react";
import './auth.css';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="input-user"
                />
            </div>
            <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faKey} className="input-icon" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="input-password"
                />
            </div>
            <Button label="  Sign In" type='submit' className="login-button" icon={faKey} />
        </div>
    );
}

export default Login;
