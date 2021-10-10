import React from 'react';
import avater from '../../img/avater.jpg';
import messanger from '../../img/messanger.png';
import friends from '../../img/friends.png';
import memories from '../../img/memories.png';
import groups from '../../img/group.png';
import marketplace from '../../img/marketplace.png';
import watch from '../../img/watch.png';
import blood_donations from '../../img/blood_donations.png';
import business_manager from '../../img/business_manager.png';
import campus from '../../img/campus.png';
import community_help from '../../img/community_help.png';
import covid from '../../img/covid.png';
import creator_studio from '../../img/creator_studio.png';
import emotional_health from '../../img/emotional_health.png';
import events from '../../img/events.png';
import pages from '../../img/pages.png';
import saved from '../../img/saved.png';
import LeftSidebarRow from './LeftSidebarRow/LeftSidebarRow';




const LeftSidebar = () => {
    return (
        <div className="overflow-y-auto overflow-x-hidden h-full">
            <LeftSidebarRow avater={avater} title='Raisul Islam' />
            <LeftSidebarRow src={messanger} title='Messanger' />
            <LeftSidebarRow src={friends} title='Friends' />
            <LeftSidebarRow src={groups} title='Groups' />
            <LeftSidebarRow src={memories} title='Memories' />
            <LeftSidebarRow src={marketplace} title='Marketpalce' />
            <LeftSidebarRow src={watch} title='Watch' />
            <LeftSidebarRow src={blood_donations} title='Blood Donations' />
            <LeftSidebarRow src={business_manager} title='Business Manager' />
            <LeftSidebarRow src={campus} title='Campus' />
            <LeftSidebarRow src={community_help} title='Community Help' />
            <LeftSidebarRow src={covid} title='COVID-19 Information Center' />
            <LeftSidebarRow src={creator_studio} title='Creator Studio' />
            <LeftSidebarRow src={emotional_health} title='Emotional Health' />
            <LeftSidebarRow src={events} title='Events' />
            <LeftSidebarRow src={pages} title='Pages' />
            <LeftSidebarRow src={saved} title='Saved' />
        </div>
    );
};

export default LeftSidebar;