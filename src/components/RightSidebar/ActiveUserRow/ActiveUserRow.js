import { Avatar } from "@material-ui/core";
import React from "react";

export const ActiveUserRow = ({ avater, url, name, online }) => {
  return (
    <div className=" ml-2 px-3 w-full py-1 hover:bg-gray-300 rounded-lg">
      <a className="flex items-center" href={url}>
        <div className="relative w-10 mx-2 cursor-pointer">
          <Avatar className="shadow-sm" src={avater} />
            {online ? <span className="bg-green-600 border-2 border-white h-3 w-3 block rounded-full absolute bottom-0 right-0"></span> : <span className="bg-red-600 border-2 border-white h-3 w-3 block rounded-full absolute bottom-0 right-0"></span> }
        </div>
        <p className="mx-1 text-base font-medium">{name}</p>
      </a>
    </div>
  );
};
