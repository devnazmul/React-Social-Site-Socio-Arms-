import { Add } from '@material-ui/icons'
import React from 'react'

export const CreateStory = ({profilePicture}) => {
    return (
        <div className='story relative cursor-pointer shadow-lg ml-3 rounded-xl' style={{backgroundImage:`url(${profilePicture})`,backgroundPosition:'top center'}}>
            <div className='bg-white rounded-br-xl rounded-bl-xl h-1/3 flex justify-between flex-col absolute w-full bottom-0'>
                <div className='bg-blue-600 border-2 absolute shadow right-10 bottom-10 h-10 w-10 rounded-full flex justify-center items-center'>
                    <Add className='text-white' />
                </div>
                <span className='text-black text-center pt-8 bottom-0'>Create Story</span>
            </div>
        </div>
    )
}
