import React, { useState } from 'react';
import { useDarkMode } from './DarkModeContext'; 
import '../css/Search.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useDarkMode(); // Use the dark mode context hook

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    onSearch(searchTerm);
  };

  return (
    <form className={`my-4 flex items-center ${isDarkMode ? 'dark' : ''}`} onSubmit={handleSearch} style={{ marginLeft: '26px', border: 'none'}}>
      <div className="relative">
        <button
          type="submit"
          className={`absolute bottom-1 right-21 mt-2 mr-3 ml-2 px-2 py-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-md`}
        >
          <svg
            className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-6a8 8 0 11-16 0 8 8 0 0116 0z"
            ></path>
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search for a country..."
          className={`custom-input rounded-md  ${isDarkMode ? 'bg-gray-800 text-white' : 'border'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
