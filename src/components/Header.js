import React from 'react';
import halfmoonIcon from '../icons/half_moon.svg';
import { useDarkMode } from './DarkModeContext';
import '../css/Header.css'

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`header flex justify-between ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <p className={`text1 text-${isDarkMode ? 'white' : 'black-700'} font-nunito-sans text-2xl font-extrabold mt-4`}>Where in the world?</p>
      <div className='group5 h-fit flex justify-between items-start gap-2 mt-4'>
        <img src={halfmoonIcon} alt="Halfmoon Icon" className="w-5 h-5" onClick={toggleDarkMode} style={{ cursor: 'pointer' }} />
        <p className={`text2 text-${isDarkMode ? 'white' : 'gray-700'} font-semibold text-base`}>Dark Mode</p>
      </div>
    </div>
  );
};

export default Header;
