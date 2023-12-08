import "./NavBar.scss";

interface INavBar {}

function NavBar({}: INavBar) {
  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </>
  );
}

export default NavBar;
