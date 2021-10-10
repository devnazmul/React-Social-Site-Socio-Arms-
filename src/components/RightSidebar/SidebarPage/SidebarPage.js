import React from 'react'
import { BiNotification, BiPodcast } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import LeftSidebarRow from '../../LeftSidebar/LeftSidebarRow/LeftSidebarRow'

export const SidebarPage = ({avater,title,url}) => {
    return (
        <div className='mb-5'>
            <LeftSidebarRow avater={avater} title={title} url={url} />
            <div className='pl-6 mt-1 '>
                <Link to='/' className='flex items-center text-sm text-gray-400 mb-2 ml-2 px-3 w-full py-2 hover:bg-gray-200 rounded-lg'><BiNotification className='text-xl mr-2' /> Notifications</Link>
                <Link to='/' className='flex items-center text-sm text-gray-400 mb-2 ml-2 px-3 w-full py-2 hover:bg-gray-200 rounded-lg'><BiPodcast className='text-xl mr-2' /> Use Promotional Ads</Link>
            </div>
        </div>
    )
}
