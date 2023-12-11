import { NavLink } from "react-router-dom";
import { IMenu } from "../SideBarConfig";
import "./SideBarLink.scss";
import { DashboardContext } from "../../../context/dashboardContext";
import { useContext, useEffect } from "react";

interface ISideBarLink {
  menu: IMenu;
}

function SideBarLink({ menu }: ISideBarLink) {
  const { dispatch } = useContext(DashboardContext);
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("title")) || [];

  const handleNavLink = () => {
    dispatch({ type: "UPDATE_TITLE", payload: menu.label });
    localStorage.setItem("title", JSON.stringify(menu.label));
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TITLE", payload: cartFromLocalStorage });
  }, [cartFromLocalStorage, dispatch]);
  return (
    <li>
      <NavLink
        onClick={handleNavLink}
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
