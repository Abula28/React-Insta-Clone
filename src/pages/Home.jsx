import React from "react";
import "./Home.scss";
import { Story } from "../components/Story";
import { User } from "../components/User";
export const Home = () => {
  return (
    <div className="home-sect">
      <div className="story-posts-section">
        <div className="stories">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
      </div>
      <div className="suggested">
        <div className="profile">
          <User followed="Name Surname" btn="Switch" />
        </div>
        <div className="suggestion">
          <h5>Suggested for you</h5>
          <button>See all</button>
        </div>
        <div className="profile">
          <User followed="followed by lorem..." btn="Follow" />
        </div>
        <div className="profile">
          <User followed="followed by lorem..." btn="Follow" />
        </div>
        <div className="profile">
          <User followed="followed by lorem..." btn="Follow" />
        </div>
        <div className="profile">
          <User followed="followed by lorem..." btn="Follow" />
        </div>
      </div>
    </div>
  );
};
