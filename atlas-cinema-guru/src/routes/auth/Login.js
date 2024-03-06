import React from "react";
import './auth.css';
import Button from '../../components/general/Button';

const Login = ({ username, password, setPassword, setUsername }) => {
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button label="Submit" type="submit" />
        </form>
    );
}

export default Login;

