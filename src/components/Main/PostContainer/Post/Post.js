import { Avatar } from "@material-ui/core";
import React from "react";
import {
  BiComment,
  BiDotsVerticalRounded,
  BiGroup,
  BiLike,
  BiShareAlt,
} from "react-icons/bi";

export const Post = ({
  authProfile,
  authName,
  postText,
  postImageLink,
  timestamp,
}) => {
  return (
    <div className=" rounded-md h-auto shadow-md bg-white pt-3 mx-2">
        <div className='flex justify-between items-center px-3 pt-2'>
          <div className="flex items-center  cursor-pointer">
            <Avatar src={authProfile} />
            <div className='ml-2'>
              <div className="font-medium">{authName}</div>
              <div className="font-light text-gray-300 text-xs flex items-center"><BiGroup className='text-lg' /> {timestamp}</div>
            </div>
          </div>
          <button className='text-2xl'><BiDotsVerticalRounded /></button>
        </div>
        
      {postText && (
        <div className='px-3'>
          <span className="py-5 font-normal block w-full ">
            {postText}
          </span>
        </div>
      )}
      <div style={{
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            objectFit:'cover',
            height: "550px",
            width:'100%',
            backgroundImage:`url(${postImageLink})`
        }} className="w-full overflow-hidden">
      </div>
      <div className='flex justify-center text-center font-semibold text-xs'>
          <span className='w-1/3 cursor-pointer hover:text-blue-600 border-b py-2'>4.6K Likes</span>
          <span className='w-1/3 cursor-pointer hover:text-blue-600 border-b py-2'>394 Comments</span>
          <span className='w-1/3 cursor-pointer hover:text-blue-600 border-b py-2'>58 Shares</span>
      </div>
      <div className="flex">
        <button className="w-1/3 hover:bg-gray-100 rounded-md px-5 py-3 hover:text-blue-700 text-center flex justify-center items-center text-2xl">
          <BiLike />
        </button>
        <button className="w-1/3 hover:bg-gray-100 rounded-md px-5 py-3 hover:text-blue-700 text-center flex justify-center items-center text-2xl">
          <BiComment />
        </button>
        <button className="w-1/3 hover:bg-gray-100 rounded-md px-5 py-3 hover:text-blue-700 text-center flex justify-center items-center text-2xl">
          <BiShareAlt />
        </button>
      </div>
    </div>
  );
};
