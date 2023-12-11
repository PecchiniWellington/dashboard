import { useContext, useEffect, useState } from "react";
import "./SideBarCollapse.scss";
import { NavLink, useLocation } from "react-router-dom";
import { IMenu } from "../SideBarConfig";
import { DashboardContext } from "../../../context/dashboardContext";

interface ISideBarCollapse {
  open: boolean;
  menu: IMenu;
}

function SideBarCollapse({ open, menu }: ISideBarCollapse) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);
  const location = useLocation();

  const { dispatch } = useContext(DashboardContext);

  const onOpenCollapse = () => {
    setOpenCollapse(!openCollapse);
    dispatch({ type: "UPDATE_TITLE", payload: menu.label });
    localStorage.setItem("title", JSON.stringify(menu.label));
  };

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("title")) || [];
  useEffect(() => {
    if (location.pathname.includes(menu.linkTo)) {
      setIsCurrent(location.pathname.includes(menu.linkTo));
      console.log(cartFromLocalStorage);
      dispatch({ type: "UPDATE_TITLE", payload: cartFromLocalStorage });
    } else {
      setOpenCollapse(false);
    }
  }, [
    cartFromLocalStorage,
    dispatch,
    location.pathname,
    menu.label,
    menu.linkTo,
  ]);
  return (
    <div>
      <div className="collapse">
        <NavLink
          onClick={onOpenCollapse}
          to={menu.linkTo}
          className={({ isActive }) =>
            isActive ? "activated" : "collapseLink"
          }
        >
          <div
            className={` ${open ? "collapseHeader" : "collapseHeaderClose"}`}
          >
            <i className="bx bxl-audible icon nav__icon"></i>
            <span className="link_name">{menu.label}</span>
            <i className="bx bx-chevron-down icon link_name collapse_icon"></i>
          </div>
        </NavLink>
        <ul
          className={` ${
            openCollapse && isCurrent && open ? "collapseShow" : "collapseHide"
          }`}
        >
          {menu.child &&
            menu.child.map((menu: any) => {
              return (
                <div className="collapse__sublink">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activated" : "nav_linkTest"
                    }
                    to={menu.linkTo}
                  >
                    {menu.label}
                  </NavLink>
                </div>
              );
            })}
        </ul>
      </div>
      <span className="tooltip">{menu.label}</span>
    </div>
  );
}

export default SideBarCollapse;
