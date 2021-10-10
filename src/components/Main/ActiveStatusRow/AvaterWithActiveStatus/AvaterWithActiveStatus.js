import { Avatar } from "@material-ui/core";
import React from "react";

export const AvaterWithActiveStatus = ({src}) => {

  return (
    <div className="relative w-10 mx-2 cursor-pointer">
      <Avatar className='shadow-sm' src={src} />
      <span className="bg-green-600 border-2 border-white h-3 w-3 block rounded-full absolute bottom-0 right-0"></span>
    </div>
  );
};
