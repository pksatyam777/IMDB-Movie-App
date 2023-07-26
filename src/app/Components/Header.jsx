import React from 'react';
import MenuItems from './MenuItems';
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import DarkModeSwitch from './DarkModeSwitch';
function Headers() {
  return <div className='flex justify-between mx-2 items-center py-2'>
    <div className='menu-items flex'>
    <MenuItems title="Home" address="/" Icon={AiFillHome} />
    <MenuItems title="About" address="/about" Icon={FcAbout} />
    </div>
    <div className='logo-items flex items-center space-x-5'>
      <DarkModeSwitch />
      <span className='bg-amber-500 font-bold rounded-lg p-2'>IMDB</span> <span className='p-2 font-bold'>Clone</span>
    </div>   
  </div>;
}

export default Headers;

