import React from 'react';

const Filter = ({ onFilter }) => {
  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  return (
    <div className="mb-4">
      <label htmlFor="region" className="mr-2 font-bold">
        Filter by Region:
      </label>
      <select
        id="region"
        onChange={(e) => onFilter(e.target.value)}
        className="p-2 border rounded"
      >
        {regions.map((region, index) => (
          <option key={index} value={region.toLowerCase()}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
