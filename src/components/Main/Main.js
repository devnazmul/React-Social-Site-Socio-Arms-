import React from "react";
import { PostCreator } from "./PostCreator/PostCreator";
import { StoryRill } from "./StoryRill/StoryRill";
import { ActiveStatusRow } from "./ActiveStatusRow/ActiveStatusRow";
import { PostContainer } from "./PostContainer/PostContainer";

const Main = () => {
  return (
    <div className=" w-full mt-10 px-7 bg-gray-100 h-auto pt-5 z-10">
      <StoryRill />
      <PostCreator />
      <ActiveStatusRow />
      <PostContainer />
    </div>
  );
};

export default Main;
