import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

export const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [moreActive, setMoreActive] = useState(false);

  const sideRef = useRef(null);

  //Client ID 177744582664-k51d82anfmaambmrvhu8kr2hpjhu7kre.apps.googleusercontent.com
  //client secret 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

  // console.log(sideRef.current.getBoundingClientRect().width);
  // useEffect(() => {}, []);
  return (
    <nav ref={sideRef} className="sidebar">
      <Link className="logo-link">
        {active ? (
          <InstagramIcon className="logo icon " />
        ) : (
          <img
            className="logo"
            src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt="instagram logo"
          />
        )}
      </Link>

      <div className="buttons">
        <Link to={"/"} className="side_buttons">
          <HomeIcon style={{ fontSize: "30px" }} /> <span>Home</span>
        </Link>
        <button to={"/"} className="side_buttons">
          <SearchIcon style={{ fontSize: "30px" }} /> <span>Search</span>
        </button>
        <Link to={"/"} className="side_buttons">
          <ExploreIcon style={{ fontSize: "30px" }} /> <span>Explore</span>
        </Link>
        <Link to={"/"} className="side_buttons">
          <SlideshowIcon style={{ fontSize: "30px" }} /> <span>Reels</span>
        </Link>
        <Link to={"/"} className="side_buttons">
          <ChatIcon style={{ fontSize: "30px" }} /> <span>Messages</span>
        </Link>
        <Link to={"/"} className="side_buttons">
          <FavoriteBorderIcon style={{ fontSize: "30px" }} />{" "}
          <span>Notification</span>
        </Link>
        <Link to={"/"} className="side_buttons">
          <AddCircleOutlineIcon style={{ fontSize: "30px" }} />{" "}
          <span>Create</span>
        </Link>
      </div>
      <div className="more">
        <div
          style={{ display: moreActive ? "flex" : "none" }}
          className="more-sect"
        >
          <div className="more-buttons">
            <button className="more-btn">
              <SettingsIcon /> <span>Settings </span>
            </button>
            <button className="more-btn">
              <HistoryToggleOffIcon /> <span>Your Activity</span>
            </button>
            <button className="more-btn">
              <TurnedInNotIcon /> <span>Saved</span>
            </button>
            <button className="more-btn">
              <Brightness2Icon /> <span>Switch Appearance</span>
            </button>
            <button className="more-btn">
              <FeedbackOutlinedIcon /> <span>Report a problem</span>
            </button>
          </div>
          <div className="switch">
            <button className="more-btn">Switch accounts</button>
          </div>
          <div className="switch log-out">
            <button className="more-btn">Log out</button>
          </div>
        </div>
        <button
          onClick={() => setMoreActive(!moreActive)}
          className="side_buttons"
        >
          <MenuIcon style={{ fontSize: "30px" }} /> <span>More</span>
        </button>
      </div>
    </nav>
  );
};
