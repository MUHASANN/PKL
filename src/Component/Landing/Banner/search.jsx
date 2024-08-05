import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center p-4 rounded">
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Masukkan..." 
                className="flex-grow p-2 rounded-[10px] border border-gray-400 w-[20em]" 
                aria-label="Search" 
            />
            <button 
                type="submit" 
                className="bg-blue-700 text-white p-2 ml-1 px-8 rounded-lg hover:bg-blue-500 hover:shadow-lg transition-colors"
            >
                Cari
            </button>
        </form>
    );
};

export default Search;
