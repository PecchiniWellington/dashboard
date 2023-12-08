import { IMenu } from "../SideBarConfig";
import "./SideBarLink.scss";

interface ISideBarLink {
  menu: IMenu;
}

function SideBarLink({ menu }: ISideBarLink) {
  return (
    <li>
      <a href="#">
        <i className={`${menu.icon}`}></i>
        <span className="link_name">{menu.label}</span>
      </a>
      <span className="tooltip">{menu.label}</span>
    </li>
  );
}

export default SideBarLink;
