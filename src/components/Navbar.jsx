import React from 'react';
import { useState, useEffect } from 'react';

const seasons = ["winter", "spring", "summer", "fall", "upcoming"];
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const Logo = () => (
  <a href="#" className='py-1 px-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 text-lg shadow-lg'>MyAnimeCards</a>
)

const Menu = (props) => (
  <div className='md:flex flex-col md:flex-row absolute md:static bg-blue-800 w-full md:w-auto left-0 top-16 px-2 h-full z-10 py-2 md:py-0' id="menu" style={props.showMenu}>{props.children}</div>
)

const MenuTitle = (props) => (
  <button className='flex items-center justify-center py-1 px-2 text-lg font-semibold rounded-tl-lg rounded-tr-lg' id='seasons'><span className='material-icons-round mr-1 text-2xl'>{props.icon}</span>{props.title}</button>
)

const MenuItemsWrapper = (props) => (
  <ul className='text-left md:text-center bg-blue-800 md:absolute left-0 w-full md:py-1 rounded-lg pl-10 md:pl-0 w-max md:w-full md:hidden z-10 md:shadow-sm md:shadow-black'>{props.children}</ul>
)

export const Navbar = (props) => {  
  return (
    <header className='w-full bg-blue-800 text-white shadow-sm shadow-black'>
        <nav className='w-full max-w-screen-lg m-auto flex flex-row justify-between items-center p-5'>
            <Logo />
            <button className='material-icons-round flex md:hidden px-1 text-3xl' id='open-menu' onClick={props.displayMenu}>menu</button>
            <Menu showMenu={props.showMyMenu}>
              <div className='text-cyan-300 relative mr-4'>
                <MenuTitle icon="ac_unit" title="Seasons"/>
                <MenuItemsWrapper>{seasons.map(season => <li className='hover:text-current text-white cursor-pointer py-1 capitalize' id={season} onClick={props.getSeason}>{season}</li>)}</MenuItemsWrapper>
              </div>
              <div className='text-green-300 relative'>
                <MenuTitle icon="today" title="Schedules"/>
                <MenuItemsWrapper>{days.map(day => <li className='hover:text-current text-white cursor-pointer py-1 capitalize' id={day} onClick={props.getDay}>{day}</li>)}</MenuItemsWrapper>
              </div>
            </Menu>
        </nav>
    </header>
  )
}