import React from "react";
import { PostCreator } from "./PostCreator/PostCreator";
import { StoryRill } from "./StoryRill/StoryRill";
import "./Main.css";
import { ActiveStatusRow } from "./ActiveStatusRow/ActiveStatusRow";
import { PostContainer } from "./PostContainer/PostContainer";

const Main = () => {
  return (
    <div className="w-full px-7 pt-5">
      <StoryRill />
      <PostCreator />
      <ActiveStatusRow />
      <PostContainer />
    </div>
  );
};

export default Main;
