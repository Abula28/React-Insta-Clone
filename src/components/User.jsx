import React from "react";
import profile_picture from "/img/default-profile-picture.png";
import "./User.scss";

export const User = ({ btn = "", followed = "" }) => {
  return (
    <div className="user">
      <div className="user-info">
        <img src={profile_picture} alt="profile_picture" />
        <div className="username">
          <p>username</p>
          <p>{followed}</p>
        </div>
      </div>
      <button>{btn}</button>
    </div>
  );
};
