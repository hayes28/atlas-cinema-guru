// src/components/movies/Filter.js
import React from 'react';
import './movies.css';
import Tag from './Tag';

// Include any other imports for SearchBar and SelectInput if you have these components
import SearchBar from '../SearchBar';
import SelectInput from '../SelectInput';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
    // Handle additional logic if necessary

    return (
        <div className="filter">
            <SearchBar title={title} setTitle={setTitle} />
            <input type="number" value={minYear} onChange={e => setMinYear(e.target.value)} placeholder="Min Year" />
            <input type="number" value={maxYear} onChange={e => setMaxYear(e.target.value)} placeholder="Max Year" />
            <SelectInput options={[...]} value={sort} setValue={setSort} />
            <div className="tags-list">
                {['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'].map(genre => (
                    <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
                ))}
            </div>
        </div>
    );
};

export default Filter;

