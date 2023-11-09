// import React, {useContext} from 'react';
// import '../css/Navigation.css'
// import MoonIcon from '../icons/moon.svg';
// import SunIcon from '../icons/002-sun.svg'
// import { ThemeContext } from './ContextTheme';


// const Header = () => {
//   const {darkTheme,themeHandler} = useContext(ThemeContext)


//   return (
//    <div className='group6'>
//       {!darkTheme ? <p className='text1'>devfinder</p> : <p className='text1a'>devfinder</p>}

//       <div className='group5'>
//           {!darkTheme ? <p className='text2'>DARK</p> : <p className='text2a'>LIGHT</p>}
//           {!darkTheme ? <img className='path-icon' onClick={themeHandler} src={MoonIcon} alt="Path Icon" /> : 
//           <img className='path-icon1' onClick={themeHandler} src={SunIcon} alt="Path Icon" />}
//       </div>
//    </div>
//   );
// }

// export default Header;




import React from 'react'
import halfmoonIcon from '../icons/half_moon.svg'

const Header = () => {
  return (
    <div className='header w-1440 h-20 flex-shrink-0 flex justify-between bg bg-yellow-200'>
      <p className='text1 text-black-700 font-nunito-sans text-2xl font-extrabold ml-20 mt-4'>Where in the world?</p>
      <div className='group5 h-fit flex justify-center items-start gap-2 mt-4 mr-20 bg-red-300'>
        <img src={halfmoonIcon} alt="Halfmoon Icon" className="w-5 h-5" />
        <p className='text2 text-gray-700 font-semibold text-base'>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header

