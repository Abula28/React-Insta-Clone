import React from "react";
import postData from "../posts.json";
import "./Posts.scss";
export const Posts = () => {
  return (
    <div className="main-post">
      {postData.map((e, i) => {
        return (
          <div className="post-content">
            <div className="prof">
              <div className="prof-text">
                <img className="prof-pic" src={e.profile_picture} alt="" />
                <p className="userName">{e.user}</p> • <p>{e.post_duration}</p>
              </div>
              <button>...</button>
            </div>
            <div className="image">
              <img className="post-pic" src={e.post} alt="post" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
