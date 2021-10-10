import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';


const Story = ({storyContentUrl, profile_name, avater}) => {
    return (
        <div className='story relative cursor-pointer rounded-xl' style={{background:`url(${storyContentUrl})`}}>
            <Avatar className='border-2 mt-3 ml-2 border-blue-600' src={avater} />
            <span className='absolute text-center w-full text-white bottom-3 font-semibold'>{profile_name}</span>
        </div>
    )
}

export default Story
