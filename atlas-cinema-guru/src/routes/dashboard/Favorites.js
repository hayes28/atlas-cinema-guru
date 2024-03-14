import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard'; // Make sure the path is correct

const Favorites = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const accessToken = localStorage.getItem('accessToken'); // Retrieve the stored token
            try {
                const response = await axios.get('http://localhost:8000/api/titles/favorite', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });
                setMovies(response.data); // Assuming the response data is directly the list of movies
            } catch (error) {
                console.error('Failed to fetch favorites:', error);
            }
        };

        fetchFavorites();
    }, []); // Empty dependency array ensures this runs once after initial component mount

    return (
        <div className="favorites">
            <h1>Movies you like</h1>
            <div className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} /> // Ensure that your MovieCard component is set up to receive a `movie` prop
                ))}
            </div>
        </div>
    );
};

export default Favorites;
