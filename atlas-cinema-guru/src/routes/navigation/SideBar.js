import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Activity from '../../components/Activity';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';

// Functional Component Setup
export default function SideBar() {
    const [selected, setSelected] = useState('Home');
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    // Navigation Function
    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName}`);
    };

    // Function to open/close sidebar
    const toggleSidebar = () => {
        setSmall(!small);
    };

    // Fetch Activities
    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
            .then(res => {
                setActivities(res.data);
                setShowActivities(true); // If you want to show activities after fetching
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        // Function to adjust the sidebar's top position based on the header's height
        const adjustSidebarTop = () => {
            const header = document.querySelector('.header-nav'); // Select the header element
            const sidebar = document.querySelector('.sidebar'); // Select the sidebar element
            if (header && sidebar) {
                const headerHeight = header.offsetHeight; // Get the height of the header
                sidebar.style.top = `${headerHeight}px`; // Set the sidebar's top position to match the header's height
            }
        };

        adjustSidebarTop(); // Call the function on component mount

        // Optional: If your header might change height dynamically (e.g., due to window resizing), consider adding an event listener
        window.addEventListener('resize', adjustSidebarTop);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', adjustSidebarTop);
        };
    }, []);

    // Return components
    return (
        <nav className={`sidebar ${small ? '' : 'open'}`} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
            <ul className="navigation-menu">
                <li
                    className={`nav-item ${selected === 'home' ? 'selected' : ''}`}
                    onClick={() => setPage("home")}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faFolder} />
                    {!small && <span>Home</span>}
                </li>
                <li
                    className={`nav-item ${selected === 'favorites' ? 'selected' : ''}`}
                    onClick={() => setPage("favorites")}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faStar} />
                    {!small && <span>Favorites</span>}
                </li>
                <li
                    className={`nav-item ${selected === 'watchlater' ? 'selected' : ''}`}
                    onClick={() => setPage("watchlater")}
                >
                    <FontAwesomeIcon className="fa-icon" icon={faClock} />
                    {!small && <span>Watch Later</span>}
                </li>
            </ul>
            {showActivities && (
                <ul className="activity-list">
                    {activities.slice(0, 10).map((activity, index) => (
                        <Activity key={index} activity={activity} />
                    ))}
                </ul>
            )}
        </nav>
    );
};
