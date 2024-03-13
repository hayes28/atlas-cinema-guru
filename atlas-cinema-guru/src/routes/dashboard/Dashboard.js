import React from 'react';
import './dashboard.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../navigation/Header.js';
import SideBar from '../navigation/SideBar.js';

// Components to be created later
// import HomePage from '../your-components/HomePage';
// import Favorites from '../your-components/Favorites';
// import WatchLater from '../your-components/WatchLater';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
            <div className="dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
                <Routes>
                    {/* These routes will render the respective components when navigated to */}
                    <Route path="/home" element={<div>HomePage Component</div>} />
                    <Route path="/favorites" element={<div>Favorites Component</div>} />
                    <Route path="/watchlater" element={<div>WatchLater Component</div>} />

                    {/* Catch-all route - redirects any other path to "/home" */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Dashboard;
