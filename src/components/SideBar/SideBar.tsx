import { useState } from "react";
import "./SideBar.scss";
import { IMenu, sideBarConfig } from "./SideBarConfig";
import SideBarLink from "./SideBarLink/SideBarLink";

interface ISideBar {}

function SideBar({}: ISideBar) {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i>
        <div className="logo_name">Code Effect</div>
        <i className="bx bx-menu btn" onClick={toggleButton}></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>

        {sideBarConfig.map((menu: IMenu) => (
          <SideBarLink menu={menu} />
        ))}
        <li className="profile">
          <div className="profile_details">
            <img src="profile.jpeg" alt="profile image" />
            <div className="profile_content">
              <div className="name">Wellintone</div>
              <div className="designation">Admin</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
