import React from 'react'
import NavBarItem from './NavBarItem'
export default function Navbar() {
  return (
    <div className="flex items-center justify-center space-x-2  dark:bg-gray-900 bg-amber-100"><NavBarItem title="Trending" params="fetchTrending" /> 
    <NavBarItem title="Top Rated" params="fetchTopRated" /></div>
  )
}
