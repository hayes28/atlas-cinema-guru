// Register.js
import React, { useState } from "react";
import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setPassword, setUsername }) => {

    // password hidden by default
    const [hidden, setHidden] = useState(false);

    // toggle password visibility
    const togglePassword = () => {
        setHidden(!hidden);
    };

    return (
        <div className="register">
            <p>Create a new account</p>
                <Input
                    type='text'
                    label="Username:"
                    className="username"
                    value={username}
                    setValue={setUsername}
                    icon={faUser}
                />
                <Input
                    type="password"
                    label="Password:"
                    className="username"
                    value={password}
                    setValue={setPassword}
                    isHidden={hidden}
                    togglePassword={togglePassword}
                    icon={faLock}
                    showPassword={true}
                />
            <Button label="  Sign In" type='submit' className="login-button" icon={faPlus} />
        </div>
    );
}

export default Register;
