import React, { useState } from 'react';

const Filter = ({ onFilterByRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    onFilterByRegion(region); 
  };

  return (
    <div className="mt-4">
      <label className="font-semibold mr-2">Filter by Region:</label>
      <select
        value={selectedRegion}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="All">All</option>
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
