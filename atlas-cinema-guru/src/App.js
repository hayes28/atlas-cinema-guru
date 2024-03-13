// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';
import Dashboard from './routes/dashboard/Dashboard';
// import Header from './routes/navigation/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    console.log(setIsLoggedIn);
    // Get the value of accessToken from local storage
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios({
        method: 'POST',
        url: 'http://localhost:8000/api/auth/',
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
    <div className={`App ${isLoggedIn ? 'dashboard-view' : 'auth-view'}`}>
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
}

export default App;
