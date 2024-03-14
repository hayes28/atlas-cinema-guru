import React from 'react';
import './dashboard.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../navigation/Header.js';
import SideBar from '../navigation/SideBar.js';

import HomePage from '../dashboard/HomePage.js';
import Favorites from '../dashboard/Favorites.js';
import WatchLater from '../dashboard/WatchLater.js';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
            <div className="dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
                <Routes>
                    {/* These routes will render the respective components when navigated to */}
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/favorites" element={<Favorites />}/>
                    <Route path="/watchlater" element={<WatchLater/>}/>

                    {/* Catch-all route - redirects any other path to "/home" */}
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Dashboard;
