import {useContext} from 'react';
import './App.css'
import { ThemeContext } from './components/ContextTheme'
import Header from './components/Header';
// import Search from './components/Search';
import Filter from './components/Filter';
import CountryList from './components/CountryList';



function App() {
  const {darkTheme} = useContext(ThemeContext)

  const bgLight = "App"
  const bgDark = "Appdark"
 
  return (
      <div className={!darkTheme?`${bgLight}`:`${bgDark}`}>
      <Header/>
      <Filter/>
        {/* <Search/> */}
      <CountryList/>
      
    </div>
  );
}

export default App;

