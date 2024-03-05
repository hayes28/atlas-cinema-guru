import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

// Placeholder components - replace these with your actual components later
const Dashboard = ({ username }) => <div>Dashboard - Welcome, {username}!</div>;
const Authentication = () => <div>Authentication - User is not logged in</div>;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    // Get the value of accessToken from local storage
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios({
        method: 'POST',
        url: 'localhost:8000/api/auth/',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      })
      .then((response) => {
        // If the request is successful, set the user's username and set isLoggedIn to true
        setUserUsername(response.data.username);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // If the request is unsuccessful, log the error
        console.log(error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard username={userUsername} /> : <Authentication />}
    </div>
  );
}

export default App;
