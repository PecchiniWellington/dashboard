import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./DashboardLayout.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboardContext";

function DashboardLayout() {
  const location = useLocation();
  const { dashboards } = useContext(DashboardContext);
  return (
    <div className="dashboardLayout">
      <SideBar />
      <section className="home-section  ">
        <NavBar />

        <PageTitle>{dashboards.title}</PageTitle>

        <Routes>
          <Route
            path={`/dashboard`}
            element={<div className="text dashboardLayout__content"></div>}
          ></Route>
          <Route
            path={`/user`}
            element={<div className="text dashboardLayout__content"></div>}
          ></Route>
          <Route
            path={`/message`}
            element={<div className="text dashboardLayout__content"></div>}
          ></Route>
          <Route
            path={`/analytics`}
            element={<div className="text"></div>}
          ></Route>
          <Route
            path={`/fileManager`}
            element={<div className="text"></div>}
          ></Route>
          <Route path={`/order`} element={<div className="text"></div>}></Route>
          <Route
            path={`/settings`}
            element={<div className="text"></div>}
          ></Route>

          <Route
            path={`/components`}
            element={
              <div className="text">
                Components
                <Outlet />
              </div>
            }
          >
            <Route
              path={`/components/buttons`}
              element={<div className="text">buttons</div>}
            ></Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default DashboardLayout;
