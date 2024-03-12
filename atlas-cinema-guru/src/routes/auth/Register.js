// Register.js
import React from "react";
import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setPassword, setUsername }) => {
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="register">
            <p>Create a new account</p>
            <input
                type="text"
                placeholder="Username:"
                value={username}
                onChange={handleUsernameChange}
                className="input-user"
                icon={faUser}
            />
            <input
                type="password"
                placeholder="Password:"
                value={password}
                onChange={handlePasswordChange}
                className="input-password"
                icon={faLock}
            />
            <Button label="  Sign Up" type='submit' className="signup-button" icon={faPlus} />
        </div>
    );
}

export default Register;
