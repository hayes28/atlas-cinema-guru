// Dashboard.js
import React from "react";
import './dashboard.css';
import Header from "../navigation/Header.js";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
