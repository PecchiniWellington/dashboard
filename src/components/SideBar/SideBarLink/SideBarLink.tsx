import { NavLink } from "react-router-dom";
import { IMenu } from "../SideBarConfig";
import "./SideBarLink.scss";
import { DashboardContext } from "../../../context/dashboardContext";
import { useContext } from "react";

interface ISideBarLink {
  menu: IMenu;
}

function SideBarLink({ menu }: ISideBarLink) {
  const { dispatch } = useContext(DashboardContext);
  return (
    <li>
      <NavLink
        onClick={() => dispatch({ type: "UPDATE_TITLE", payload: menu.label })}
        to={menu.linkTo}
        className={({ isActive }) => (isActive ? "activated" : "sideBarLink")}
      >
        <i className={`${menu.icon}`}></i>
        <span className="link_name">{menu.label}</span>
      </NavLink>
      <span className="tooltip">{menu.label}</span>
    </li>
  );
}

export default SideBarLink;
