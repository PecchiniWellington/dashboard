import "./BreadCrumbs.scss";
import { NavLink, useLocation } from "react-router-dom";
import { IRouteModel, IRouteModelConvert } from "../../utils/router-model";

interface IBreadCrumbs {
  crumbList: IRouteModel[];
}

function BreadCrumbs({ crumbList }: IBreadCrumbs) {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb: IRouteModel | string) => {
      return crumb !== "";
    })
    .map((crumb: string) => {
      currentLink = currentLink + `/${crumb}`;
      const showCrumb = crumbList.filter((c) => {
        return c.includes(crumb as IRouteModel);
      });

      return (
        <>
          {showCrumb.map((crumbs: IRouteModel) => {
            return (
              <div className="crumb" key={crumbs}>
                <NavLink
                  to={currentLink}
                  className={({ isActive }) => (isActive ? "activated" : "")}
                >
                  {IRouteModelConvert[crumbs] as IRouteModelConvert}
                </NavLink>
              </div>
            );
          })}
        </>
      );
    });

  return <div className="vot__breadCrumbs">{crumbs}</div>;
}

export default BreadCrumbs;
