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

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
        axios.post(url, { username, password })
        .then((res) => {
            setUserUsername(res.data.username);
            setIsLoggedIn(true);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>Authentication</h1>
            <form>
                <Button type="button" label="Sign In" onClick={handleSignIn} className={_switch ? "active" : ""} />
                <Button type="button" label="Sign Up" onClick={handleSignUp} className={_switch ? "" : "active"} />
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
                <Button label="Submit" type='submit' onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default Authentication;
