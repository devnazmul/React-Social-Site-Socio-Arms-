import { Avatar } from "@material-ui/core";
import React from "react";

const LeftSidebarRow = ({ src, avater, title, Icon, url }) => {
  return (
    <div className=" ml-2 px-3 w-full py-2 hover:bg-gray-300 rounded-lg">
      <a className='flex items-center' href={url} >
        {avater && <Avatar  style={{ height: '30px', width: '30px' }} src={avater} />}
        {src && <img className="object-cover h-7" src={src} alt="" />}
        {Icon && <Icon />}
        <p className="mx-2 text-base font-medium">{title}</p>
      </a>
    </div>
  );
};

export default LeftSidebarRow;
