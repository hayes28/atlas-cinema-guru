// Dashboard.js
import React from "react";
import './dashboard.css';
import Header from "../navigation/Header.js";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div className="dashboard">
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
    );
}

export default Dashboard;
