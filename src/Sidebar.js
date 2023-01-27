import React from "react";

import { FiServer } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { ImWarning } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import { BsExclamationOctagon } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import { SiTarget } from "react-icons/si";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_title">
        <div className="image_wow">
          <FaGlobe className="globe" />
          <h2>WOW</h2>
        </div>
        <div className="sidebar_icon">
          <SiTarget className="target" />
        </div>
      </div>
      <div className="sidebar_options_container">
        <div className="sidebar_options dashboard">
          <FiServer className="sidebar_icons" />
          <h4>Dashboard</h4>
        </div>
        <div className="sidebar_options">
          <FiUser className="sidebar_icons" />
          <h4>WOW Users</h4>
        </div>
        <div className="sidebar_options">
          <FiVideo className="sidebar_icons" />
          <h4>Video Clips</h4>
        </div>
        <div className="sidebar_options">
          <ImWarning className="sidebar_icons" />
          <h4>Reported Content</h4>
        </div>
        <div className="sidebar_options">
          <BsStack className="sidebar_icons" />
          <h4>Category</h4>
        </div>
        <div className="sidebar_options">
          <BsExclamationOctagon className="sidebar_icons" />
          <h4>Info Page</h4>
        </div>
        <div className="sidebar_options">
          <TiMessages className="sidebar_icons" />
          <h4>FAQ</h4>
        </div>
        <div className="sidebar_options">
          <FaBell className="sidebar_icons" />
          <h4>Push Notification</h4>
        </div>
        <div className="sidebar_options">
          <FiUserPlus className="sidebar_icons" />
          <h4>Internal User</h4>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
