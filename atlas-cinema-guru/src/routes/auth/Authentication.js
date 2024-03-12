// Authorization.js
import React, { useState } from 'react';
import './auth.css';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import axios from 'axios';


const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [_switch, setSwitch] = useState(true);

    const handleSignIn = () => {
        setSwitch(true);
    };

    const handleSignUp = () => {
        setSwitch(false);
    };

    const handleSubmit = async (onSubmit) => {
        onSubmit.preventDefault();
        const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
        try {
            const response = await axios.post(url, { username, password });

            const { accessToken } = response.data;

            if (accessToken) {
                localStorage.setItem('accessToken', accessToken); // Set the accessToken in local storage
                setUserUsername(username); // Set the user's username
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Authentication error:', error);
        }
    };

    return (
        <form className="auth-container" onSubmit={handleSubmit}>
            <div>
                <Button type="button" label="Sign In" onClick={handleSignIn} className={_switch ? "button-active" : "button-inactive"} />
                <Button type="button" label="Sign Up" onClick={handleSignUp} className={_switch ? "button-inactive" : "button-active"} />
            </div>
                {_switch ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
            </form>
    );
}

export default Authentication;
