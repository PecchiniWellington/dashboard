import {
  IRouteModel,
  IRouteModelConvert,
} from "../../utils/models/router.model";
import "./BreadCrumbs.scss";
import { NavLink } from "react-router-dom";

interface IBreadCrumbs {
  routes: any;
  separator?: string;
}

function BreadCrumbs({ routes, separator }: IBreadCrumbs) {
  return (
    <div className="breadCrumbs">
      {routes
        .split("/")
        .filter((crumb: IRouteModel | string) => {
          return crumb !== "" && crumb !== "/";
        })
        .map((currentLink: string, index: number) => (
          <>
            {index !== 0 && <div>{separator}</div>}
            <div className="crumb" key={currentLink}>
              <NavLink
                to={currentLink}
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                {currentLink as IRouteModelConvert}
              </NavLink>
            </div>
          </>
        ))}
    </div>
  );
}

export default BreadCrumbs;
