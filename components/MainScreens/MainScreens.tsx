import React from 'react';

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectNav } from '../../reducers/navToggleSlice';

//Screens
import Home from '../Screens/Home';
import Work from '../Screens/Work';
import Projects from '../Screens/Projects';
import Achivements from '../Screens/Achievements';

const MainScreens = () => {
  const value = useSelector(selectNav);
  return (
    <div className='h-screen flex justify-center items-center'>
      {value === 'home' && <Home/>}
      {value === 'work' && <Work/>}
      {value === 'projects' && <Projects/>}
      {value === 'achivements' && <Achivements/>}
    </div>
  )
}

export default MainScreens