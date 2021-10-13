import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { AvaterWithActiveStatus } from "./AvaterWithActiveStatus/AvaterWithActiveStatus";
import './ActiveStatusRow.css';
import { NavLink } from "react-router-dom";

export const ActiveStatusRow = () => {
  return (
    <div className="scroll-design mx-3 md:mx-10 px-3 py-2 bg-white rounded-md shadow-md flex">
      <NavLink to='/create-room' title='Create Room' className='flex w-12 h-12 md:w-80 items-center border-2 rounded-full cursor-pointer bg-gray-100 hover:border-purple-300 hover:bg-purple-100 pl-2 md:px-2 mr-4'>
          <BiVideoPlus className='text-purple-700 md:text-2xl text-2xl mr-2' /> <span className=' md:block hidden'> Create Room</span> 
      </NavLink>

      <div className='bar flex justify-center px-2 items-center overflow-x-scroll overflow-y-hidden'>
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
        <AvaterWithActiveStatus src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg" />
      </div>
    </div>
  );
};
