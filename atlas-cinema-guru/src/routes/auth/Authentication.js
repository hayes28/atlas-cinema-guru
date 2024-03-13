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
    const [hoveredTab, setHoveredTab] = useState(null);

    // We now handle the hover state with a single function
    const handleMouseEnter = (tabName) => {
        setHoveredTab(tabName); // 'signIn' or 'signUp'
    };

    const handleMouseLeave = () => {
        setHoveredTab(null); // No tab is hovered
    };

    const handleSignIn = () => {
        setSwitch(true);
        setHoveredTab(null); // No tab is hovered when one is active
    };

    const handleSignUp = () => {
        setSwitch(false);
        setHoveredTab(null); // No tab is hovered when one is active
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
        <form className="authentication" onSubmit={handleSubmit}>
            <div className='toggle-auth'>
                <Button
                    type="button"
                    onMouseEnter={() => handleMouseEnter('signIn')}
                    onMouseLeave={handleMouseLeave}
                    label="Sign In"
                    onClick={handleSignIn}
                    className={_switch ? "button-active" : hoveredTab === 'signUp' ? "button-hover" : "button-inactive"}
                />
                <Button
                    type="button"
                    onMouseEnter={() => handleMouseEnter('signUp')}
                    onMouseLeave={handleMouseLeave}
                    label="Sign Up"
                    onClick={handleSignUp}
                    className={!_switch ? "button-active" : hoveredTab === 'signIn' ? "button-hover" : "button-inactive"}
                />
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
