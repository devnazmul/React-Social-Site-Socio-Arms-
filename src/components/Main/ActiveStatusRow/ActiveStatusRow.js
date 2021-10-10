import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { AvaterWithActiveStatus } from "./AvaterWithActiveStatus/AvaterWithActiveStatus";
import './ActiveStatusRow.css';

export const ActiveStatusRow = () => {
  return (
    <div className="ActiveStatusRow mx-2 px-3 py-2 bg-white rounded-md shadow-md flex">
      <div className='flex w-80 items-center border-2 rounded-full bg-gray-100 hover:bg-white px-5 mr-4'>
          <BiVideoPlus className='text-purple-700 text-2xl mr-2' /> Create Room
      </div>
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
