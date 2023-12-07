import {
  faChevronRight,
  faHouse,
  faMoon,
  faSearch,
  faSignOut,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISideBar {}

function SideBar({}: ISideBar) {
  return (
    <nav className="dashboard__sideBar">
      <header>
        <div className="imageText">
          <span className="image">
            <img src="logo.png" alt="logo" />
          </span>
          <div className="text header-text">
            <span className="name">CodingLab</span>
            <span className="profession">Web Developer</span>
          </div>
        </div>

        <div className="toggle">
          <FontAwesomeIcon
            className="toggleIcon"
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </div>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <a href="#">
              <FontAwesomeIcon
                className="icon"
                icon={faSearch}
              ></FontAwesomeIcon>
              <div className="icon">
                <input type="search" placeholder="Search..." />
              </div>
            </a>
          </li>
          <ul className="menu-links">
            <li className="nav link">
              <a href="#">
                <div className="toggleIcon icon">
                  <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </div>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-content">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSignOut} />
            <span className="text nav-text">Logout</span>
          </a>
        </li>

        <li className="mode">
          <div className="moon-sun">
            <FontAwesomeIcon className="icon" icon={faMoon} />
            <FontAwesomeIcon className="icon" icon={faSun} />
          </div>
          <span className="text">Dark Mode</span>
          <div className="toggle-switch">
            <span className="switch"></span>
          </div>
        </li>
      </div>
    </nav>
  );
}

export default SideBar;
