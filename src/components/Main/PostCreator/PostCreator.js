import { Avatar } from '@material-ui/core'
import React from 'react'
import { BiHappy, BiPhotoAlbum, BiVideoPlus } from 'react-icons/bi'

export const PostCreator = () => {
    return (
        <div className="shadow-md my-5 rounded-lg bg-white mx-3 md:mx-10 pt-3 px-4">
        <div className="flex pb-3">
          <Avatar
            className=" mr-1 md:mr-3 cursor-pointer"
            src="http://1.bp.blogspot.com/-rTUlvC7DWKg/VA4P6EF1mII/AAAAAAAAAEk/eC6Wmaj5WlM/s1600/facebook%2Bpicture%2Bnot%2Bclickable.jpg"
          />
          <input
            className="bg-gray-200 px-5 rounded-full w-full md:w-2/3 mr-0 md:mr-3 outline-none"
            placeholder="What's on your mind?"
            type="text"
          />
          <input
            className="bg-gray-200 hidden md:block px-5 rounded-full w-1/3 outline-none"
            placeholder="Image URL"
            type="text"
          />
        </div>
        <hr />
        <div className="flex w-full">
          <div className='w-1/3'>
            <label title='Live Video' htmlFor='live' className="cursor-pointer hover:bg-gray-200 bg-white rounded-md py-1 flex my-3 justify-center items-center w-full">
              <BiVideoPlus className="text-red-400 mr-2 text-3xl" />
              <span className="text-gray-500 md:block hidden font-semibold">Live Video</span>
            </label>
            <input className='outline-none' id='live' type="file" hidden />
          </div>
          <div className='w-1/3'>
            <label title='Photo/Video' htmlFor='photo' className="cursor-pointer hover:bg-gray-200 bg-white rounded-md py-1 flex my-3 justify-center items-center w-full">
              <BiPhotoAlbum className="text-green-400 mr-2 text-3xl" />
              <span className="text-gray-500 md:block hidden font-semibold">Photo/Video</span>
            </label>
            <input className='outline-none' id='photo' type="file" hidden />
          </div>
          <div className='w-1/3'>
            <label title="Feeling/Activity"  htmlFor='felling' className="cursor-pointer hover:bg-gray-200 bg-white rounded-md py-1 flex my-3 justify-center items-center w-full">
              <BiHappy className="text-yellow-400 mr-2 text-3xl" />
              <span className="text-gray-500 md:block hidden font-semibold">Feeling/Activity</span>
            </label>
            <input className='outline-none' id='felling' type="file" hidden />
          </div>
        </div>
      </div>
    )
}
