import React from "react";
import "./Home.scss";
import { Story } from "../components/Story";
export const Home = () => {
  return (
    <div className="home-sect">
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
  );
};
