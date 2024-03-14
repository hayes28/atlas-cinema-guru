import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const WatchLater = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const fetchWatchLaterMovies = async () => {
            const accessToken = localStorage.getItem('accessToken'); // Retrieve the stored token
            const response = await axios.get('http://localhost:8000/api/titles/watchlater/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setMovies(response.data); // Assuming the response data is directly the list of movies
        };

        fetchWatchLaterMovies();
    }, []); // Empty dependency array ensures this runs once after initial component mount

    return (
        <div className="watch-later">
            <h1>Movies to Watch Later</h1>
            <div className="movies-list">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>Your watch later list is empty.</p>
                )}
            </div>
        </div>
    );
};

export default WatchLater;
