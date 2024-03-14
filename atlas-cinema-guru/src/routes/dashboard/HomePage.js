import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    const loadMovies = async (pageParam) => {
        try {
            const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
                params: {
                    minYear,
                    maxYear,
                    genres: genres.join(','), // assuming the API expects a comma-separated list
                    title,
                    sort,
                    page: pageParam,
                }
            });
            setMovies(prevMovies => [...prevMovies, ...response.data]); // Append new movies
            setPage(pageParam); // Update the page state
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        loadMovies(page); // Load initial movies
    }, [minYear, maxYear, genres, sort, title]); // Reload movies when these parameters change

    return (
        <div className="homepage">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <div className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Button text="Load More.." onClick={() => loadMovies(page + 1)} />
        </div>
    );
};

export default HomePage;
