import React from 'react';
import './App.css'
import Header from './components/Header';
import CountryList from './components/CountryList';
import { DarkModeProvider, useDarkMode } from './components/DarkModeContext';



function App() {
  const { isDarkMode } = useDarkMode();
 
  return (
    <DarkModeProvider>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header/>
        <CountryList/>
      </div>
    </DarkModeProvider>
  );
}

export default App;

