import React, { useState } from "react";
import postData from "../posts.json";
import "./Posts.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export const Posts = () => {
  const [liked, setLiked] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const handleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const handleInputChange = (index, newValue) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [index]: newValue,
    }));
  };

  return (
    <div className="main-post">
      {postData.map((e, i) => {
        const isLiked = liked[i] || false;

        return (
          <div key={i} className="post-content">
            <div className="prof">
              <div className="prof-text">
                <img className="prof-pic" src={e.profile_picture} alt="" />
                <p className="userName">{e.user}</p> • <p>{e.post_duration}</p>
                {e.follow ? <button>Follow</button> : null}
              </div>
              <button>...</button>
            </div>
            <div className="image">
              <img className="post-pic" src={e.post} alt="post" />
            </div>

            <div className="actions-section">
              <div className="like-comment">
                {isLiked ? (
                  <FavoriteOutlinedIcon
                    className="icons like-icon colored"
                    onClick={() => handleLike(i)}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon
                    className="icons like-icon"
                    onClick={() => handleLike(i)}
                  />
                )}
                <ModeCommentOutlinedIcon className="icons" />
                <SendOutlinedIcon className="icons" />
              </div>
            </div>

            <p className="likes">{e.likes} Likes</p>
            <p className="comment">
              <strong>{e.user}</strong> {e.comment}
            </p>
            <p className="comments">View all {e.comments} comments</p>

            <label>
              <input
                value={inputValues[i] || ""}
                onChange={(e) => handleInputChange(i, e.target.value)}
                type="text"
                placeholder="Add a comment..."
              />
              {inputValues[i]?.trim() !== "" ? (
                <button className="add-comment">Post</button>
              ) : null}
            </label>
          </div>
        );
      })}
    </div>
  );
};
