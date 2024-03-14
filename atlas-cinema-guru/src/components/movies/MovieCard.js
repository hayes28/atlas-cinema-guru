// src/components/movies/MovieCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movies.css';
// Import FontAwesomeIcon and the specific icons you need
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState
        (false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        // Note: Replace 'userID' with the actual user ID
        const userID = 'userID'; // This should come from the user's state or context

        // Get the user's favorites
        axios.get(`/api/titles/favorite/${userID}`)
            .then(response => {
                setIsFavorite(response.data.includes(movie.imdbId));
            })
            .catch(error => console.error('Error fetching favorites:', error));

        // Get the user's watch later list
        axios.get(`/api/titles/watchlater/${userID}`)
            .then(response => {
                setIsWatchLater(response.data.includes(movie.imdbId));
            })
            .catch(error => console.error('Error fetching watch later list:', error));
    }, [movie.imdbId]);

    const handleClick = (type) => {
        // Depending on whether it's a favorite/watch later, post/delete to the server
        const action = (type === 'favorite' && !isFavorite) || (type === 'watchlater' && !isWatchLater) ? 'post' : 'delete';
        axiosaction
            .then(() => {
                if (type === 'favorite') {
                    setIsFavorite(!isFavorite);
                } else {
                    setIsWatchLater(!isWatchLater);
                }
            })
            .catch(error => console.error(Error updating ${ type }:, error));
    };

    return (
        <li className="movie-card">
            {/* Icons for favoriting/watch later functionality /}
{/ <FontAwesomeIcon icon="..." onClick={() => handleClick('favorite')} className={icon ${isFavorite ? 'active' : ''}} /> /}
{/ <FontAwesomeIcon icon="..." onClick={() => handleClick('watchlater')} className={icon ${isWatchLater ? 'active' : ''}} /> */}
            <h3>{movie.title}</h3>
            <p>{movie.synopsis}</p>
            <div>{movie.genres.map(genre => <span key={genre}>{genre}</span>)}</div>
        </li>
    );
};

export default MovieCard;
