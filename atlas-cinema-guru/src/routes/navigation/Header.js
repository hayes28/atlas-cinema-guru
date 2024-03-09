import React from "react";
import './navigation.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ userUsername, setIsLoggedIn }) => {
    console.log(setIsLoggedIn);
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <img src="https://picsum.photos/100/100" alt="avatar" />
            <p>Welcome, {userUsername}</p>
            <span onClick={logout}>
                <i className="icon-logout"></i> Logout
            </span>
        </nav>
    );
}

export default Header;
