import { Avatar } from '@material-ui/core';
import React from 'react';

const  LeftSidebarRow = ({src,avater,title,Icon}) => {
    return (
        <div className='flex items-center ml-2 px-3 w-full py-2 hover:bg-gray-300 rounded-lg'>
            {avater && <Avatar src={avater} /> }
            {src && <img className='object-cover h-7' src={src} alt='' /> }
            {Icon && <Icon/> }
            <p className='mx-1 text-base font-medium'>{title}</p>
        </div>
    );
};

export default  LeftSidebarRow;