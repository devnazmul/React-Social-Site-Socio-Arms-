import React from "react";
import { NavLink } from "react-router-dom";
import { BiGroup, BiMoviePlay } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineHome, AiOutlineMessage, AiOutlineSearch, AiOutlineShop } from "react-icons/ai";
import { MdGridView, MdOutlineNotificationsNone } from "react-icons/md";
import { BsController } from "react-icons/bs";
import logo from '../../icons/fbLogo.svg';
import avater from '../../img/avater.jpg';

const Header = () => {
  return (
    <div className="md:flex justify-between h-auto md:max-h-20 shadow-xl z-10 py-2">
      <div className='hidden md:flex w-full md:w-1/4 '>
          <img className='mx-2 ' src={logo} alt="" />
          <div className='flex w-full text-gray-400 justify-center items-center px-2 bg-gray-300 rounded-full'>
              <AiOutlineSearch className='text-2xl mr-2' />
              <input className='bg-transparent h-full w-full outline-none' placeholder='Search' type="text" />
          </div>
      </div>
      <nav className='flex w-full justify-around items-center text-3xl md:w-2/4'>
        <NavLink className='py-1 px-5 h-full rounded-lg hover:bg-gray-200 text-gray-400' activeClassName='border-b-2 border-blue-500 rounded-none text-blue-500 text-white' to="/home">
          <AiOutlineHome />
        </NavLink>
        <NavLink className='py-1 px-5 h-full rounded-lg hover:bg-gray-200 text-gray-400' activeClassName='border-b-2 border-blue-500 rounded-none text-blue-500 text-white' to="/video">
          <BiMoviePlay />
        </NavLink>
        <NavLink className='py-1 px-5 h-full rounded-lg hover:bg-gray-200 text-gray-400' activeClassName='border-b-2 border-blue-500 rounded-none text-blue-500 text-white' to="/store">
          <AiOutlineShop />
        </NavLink>
        <NavLink className='py-1 px-5 h-full rounded-lg hover:bg-gray-200 text-gray-400' activeClassName='border-b-2 border-blue-500 rounded-none text-blue-500 text-white' to="/groups">
          <BiGroup />
        </NavLink>
        <NavLink className='py-1 px-5 h-full rounded-lg hover:bg-gray-200 text-gray-400' activeClassName='border-b-2 border-blue-500 rounded-none text-blue-500 text-white' to="/games">
          <BsController />
        </NavLink>
      </nav>
      <div className='w-full md:w-1/4 hidden md:flex text-2xl justify-between items-center pr-5'>
        <NavLink className='flex font-medium text-sm items-center bg-gray-300 p-1 rounded-full text-gray-800' activeClassName='text-blue-500 bg-blue-100' to='/profile'>
            <img className='object-cover rounded-full max-h-9' src={avater} alt="" />
            <span className='mx-2' >Md Raisul</span>
        </NavLink>
        <button className='bg-gray-300 p-2 rounded-full text-gray-800'>
            <MdGridView/>
        </button>
        <button className='bg-gray-300 p-2 rounded-full text-gray-800'>
            <AiOutlineMessage/>
        </button>
        <button className='bg-gray-300 p-2 rounded-full text-gray-800'>
            <MdOutlineNotificationsNone/>
        </button>
        <button className='bg-gray-300 p-2 rounded-full text-gray-800'>
            <AiFillCaretDown/>
        </button>
      </div>
    </div>
  );
};

export default Header;
