import React from "react";
import 'general.css';

const SearchBar = ({ title, setTitle }) => {

        const handleInput = (e) => {
            setTitle(e.target.value);
        };

        return (
            <div className="search-bar">
                <input
                    type="search"
                    className="search-bar"
                    placeholder="Search..."
                    value={title}
                    onChange={handleInput}
                />
            </div>
        );
    };

export default SearchBar;
