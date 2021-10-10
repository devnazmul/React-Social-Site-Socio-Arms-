import React from 'react';
import LeftSidebarRow from '../LeftSidebar/LeftSidebarRow/LeftSidebarRow';
import avater from '../../img/avater.jpg';

const RightSidebar = () => {
    return (
        <div>
            <LeftSidebarRow avater={avater} title='Four Arms Tech' />
            
        </div>
    );
};

export default RightSidebar;