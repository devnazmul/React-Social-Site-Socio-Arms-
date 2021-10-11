import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';


const Story = ({storyContentUrl, profileName, avater}) => {
    return (
        <div className='story shadow-lg relative cursor-pointer rounded-xl' style={{backgroundImage:`url(${storyContentUrl})`}}>
            <Avatar className='border-2 mt-3 ml-2 border-blue-600' src={avater} />
            <span className='absolute text-center w-full text-white bottom-3 font-semibold'>{profileName}</span>
        </div>
    )
}

export default Story
