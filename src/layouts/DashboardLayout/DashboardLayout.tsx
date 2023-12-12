import "./DashboardLayout.scss";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Components from "../../pages/Componets/Components";
import PageTitle from "../../components/PageTitle/PageTitle";
import { DashboardContext } from "../../context/dashboardContext";
import ButtonSection from "../../sections/ButtonsSection/ButtonSection";
import ButtonsBase from "../../sections/ButtonsSection/ButtonsBase/ButtonsBase";
import ButtonsAsync from "../../sections/ButtonsSection/ButtonAsync/ButtonsAsync";
import ButtonsIcons from "../../sections/ButtonsSection/ButtonsIcons/ButtonsIcons";
import AccordionSection from "../../sections/AccordionSection/AccordionSection";
import AlertsSection from "../../sections/AlertsSection/AlertsSection";
import BadgeSection from "../../sections/BadgeSection/BadgeSection";
import BreadCrumbSection from "../../sections/BreadCrumbSection/BreadCrumbSection";

function DashboardLayout() {
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

          <Route path={`/components`} element={<Components />}>
            <Route
              path={`/components/buttons`}
              element={<ButtonSection customClass="" />}
            ></Route>
            <Route
              path={`/components/accordions`}
              element={<AccordionSection customClass="" />}
            ></Route>
            <Route
              path={`/components/alerts`}
              element={<AlertsSection customClass="" />}
            ></Route>
            <Route
              path={`/components/badges`}
              element={<BadgeSection customClass="" />}
            ></Route>
            <Route
              path={`/components/breadcrumbs`}
              element={<BreadCrumbSection customClass="" />}
            ></Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default DashboardLayout;
