import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Filter from './Filter';
import '../css/CountryList.css'
import { useDarkMode } from '../components/DarkModeContext'; 

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showBackButton, setShowBackButton] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { isDarkMode } = useDarkMode(); // use the 
  

  // const darkModeStyles = {
  //   backgroundColor: isDarkMode ? '#2b2b2b' : 'white',
  //   color: isDarkMode ? '#ffffff' : 'black',
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data); // Set filteredCountries to all countries
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCountryClick = async (country) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country.name.common}`
      );
      setSelectedCountry(response.data[0]);
      setShowBackButton(true);
    } catch (error) {
      console.error('Error fetching country details:', error);
    }
  };

  const handleBorderCountryClick = (borderCountry) => {
    handleCountryClick({ name: { common: borderCountry } });
  };

  const getBorderCountryNames = (borders, allCountries) => {
    if (!borders || borders.length === 0) {
      return [];
    }

    return borders.map((border) => {
      const borderCountry = allCountries.find(
        (country) => country.cca3 === border
      );
      return borderCountry ? borderCountry.name.common : '';
    });
  };

  const handleBackButtonClick = () => {
    setSelectedCountry(null);
    setShowBackButton(false);
  };

  const handleSearch = (searchTerm) => {
    const filtered = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchTerm.toLowerCase());
    });
    setFilteredCountries(filtered);
  };

  const filterByRegion = (region) => {
    if (region === 'All') {
      setFilteredCountries(countries);
    } else {
      const results = countries.filter((country) => country.region === region);
      setFilteredCountries(results);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div className={` m-auto pl-6 pr-10 pt-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {showBackButton && (
       
       <button
  className={`mb-4 ml-5 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-blue-200 text-black'} font-bold py-2 px-4 rounded flex items-center`}
  onClick={handleBackButtonClick}
>
  <span className={`mr-2 mt-0 flex ${isDarkMode ? 'text-white' : 'text-black'}`}>&larr;</span> Back
</button>

      )}


          {/* Country details */}
      {selectedCountry ? (
        <div className={`cards mt-2 pb-40 pl-6 rounded-lg flex flex-col ${isDarkMode ? 'darkcard ' : ''}`}><br />
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/2">
            <img
              src={selectedCountry.flags.png}
              alt={`${selectedCountry.name.common} Flag`}
              className="w-full"
            />
          </div>
          <div>
            <div>
              <h1 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {selectedCountry.name.common}
              </h1>
            </div>
            <br />
            <div className="smallscreen flex column gap-10 w-full">
              <div className={`w-full md:w-1/2 text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <strong>Native Name:</strong> {selectedCountry.name.common}
                <br />
                <strong>Population:</strong>{' '}
                {selectedCountry.population.toLocaleString()}
                <br />
                <strong>Region:</strong> {selectedCountry.region}
                <br />
                <strong>Subregion:</strong> {selectedCountry.subregion}
                <br />
                <strong>Capital:</strong> {selectedCountry.capital}
                <br />
              </div>
              <div className={`w-400 text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <strong>Top Level Domain:</strong> {selectedCountry.tld}
                <br />
                <strong>Currencies:</strong>{' '}
                {Object.values(selectedCountry.currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
                <br />
                <strong>Languages:</strong>{' '}
                {Object.values(selectedCountry.languages).join(', ')}
                <br />
              </div>
            </div>
            <br />
            <div className={`text-lg gap-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <strong>Border Countries:</strong>{' '}
              {getBorderCountryNames(selectedCountry.borders, countries).map(
                (borderCountry) => (
                  <button
                    key={borderCountry}
                    className={`no-border p-2 rounded m-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-blue-200 text-black hover:text-white'}`}
                    onClick={() => handleBorderCountryClick(borderCountry)}>
                    {borderCountry}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      


      ) : (

        // Search and filter
        <div>
          <div className='searchfilter flex justify-between'>
            <Search onSearch={handleSearch} />
            <Filter onFilterByRegion={filterByRegion} />
          </div>


            {/* All Countries */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <li
                  key={index}
                  className="rounded-lg cursor-pointer"
                  onClick={() => handleCountryClick(country)}
                >
    <div className={`flex-col items-center ${isDarkMode ? 'bg-gray-800' : 'hover:bg-gray-100'}`}>
  <img
    src={country.flags.png}
    alt={`${country.name.common} Flag`}
    className="w-full h-48 m-auto"/>

  <p className="m-4">
    <strong
      className={`text m-auto ${isDarkMode ? 'white' : 'gray-900'} font-nunito-sans font-extrabold text-18 leading-26 transition-colors duration-300 hover:text-${isDarkMode ? 'blue' : 'gray-300'}`}>
      {country.name.common}
    </strong>

    <br /><br />
    <strong>Population:</strong>{' '}
    {country.population.toLocaleString()}<br />
    <strong>Region:</strong> {country.region}<br />
    <strong>Capital:</strong> {country.capital}<br />
  </p>
</div>

                </li>
              ))
            ) : (
              <p>No countries found.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryList;






