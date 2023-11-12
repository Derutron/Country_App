import React, { useState } from 'react';
import { useDarkMode } from './DarkModeContext';
import '../css/Filter.css'

const Filter = ({ onFilterByRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const { isDarkMode } = useDarkMode(); // Use the dark mode context hook

  const handleChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onFilterByRegion(region);
  };

  return (
    <div className={`mt-4 ${isDarkMode ? 'dark' : ''}`}>
      <select
        value={selectedRegion}
        onChange={handleChange}
        className={`filterinput p-2 no-border rounded ${isDarkMode ? 'bg-gray-900 text-white' : 'border'}`}
      >
        <option value="All">Filter by Region:</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
};

export default Filter;