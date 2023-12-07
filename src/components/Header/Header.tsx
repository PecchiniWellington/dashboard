import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Logo from "../Logo/Logo";
import LogoSrc from "../../assets/bravo_logo.svg";
import "./Header.scss";
import { IRouteModel } from "../../utils/router-model";
import Button from "../Buttons/Button/Button";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticate } = useSelector((state) => state.auth);

  /* TODO: refactor */
  async function handleSignOut() {
    try {
      await signOut();
      return navigate("/login");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <div className="vot__header">
      <div className="vot__headerContent">
        <Logo logoSrc={LogoSrc} size={120} />
        <div className="vorticeDash">
          <div className="left">Vortice - Dashboard</div>
          {isAuthenticate && (
            <Button
              customClass="right"
              type="button"
              projectType="empty"
              dispatchEvent={handleSignOut}
            >
              Sign out
            </Button>
          )}
        </div>
        {isAuthenticate && (
          <BreadCrumbs
            crumbList={[
              IRouteModel.USER,
              IRouteModel.SYSTEM,
              IRouteModel.INFORMATION,
            ]}
          ></BreadCrumbs>
        )}
      </div>
    </div>
  );
}

export default Header;
