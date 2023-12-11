import "./DashboardLayout.scss";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Components from "../../pages/Componets/Components";
import PageTitle from "../../components/PageTitle/PageTitle";
import { DashboardContext } from "../../context/dashboardContext";
import ButtonSection from "../../sections/ButtonsSection/ButtonSection";
import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Button/Button";
import ButtonRound from "../../components/Buttons/ButtonRound/ButtonRound";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import SectionContainerRow from "../../components/SectionContainer/SectionContainerRow/SectionContainerRow";
import ButtonsBase from "../../sections/ButtonsSection/ButtonsBase/ButtonsBase";
import ButtonsAsync from "../../sections/ButtonsSection/ButtonAsync/ButtonsAsync";
import ButtonsIcons from "../../sections/ButtonsSection/ButtonsIcons/ButtonsIcons";

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
              element={
                <ButtonSection customClass="">
                  <ButtonsBase />
                  <ButtonsAsync />
                  <ButtonsIcons />

                  {/* <SectionContainer
                    title="Button filled"
                    description="Bottoni based riempiti"
                  >
                    <SectionContainerRow title="normal">
                      <Button type="button" projectType="primary">
                        Primary
                      </Button>
                      <Button type="button" projectType="secondary">
                        Secondary
                      </Button>
                      <Button type="button" projectType="success">
                        Success
                      </Button>
                      <Button type="button" projectType="warning">
                        Warning
                      </Button>
                      <Button type="button" projectType="error">
                        Error
                      </Button>
                      <Button type="button" projectType="info">
                        Info
                      </Button>
                      <Button type="button" projectType="light">
                        Light
                      </Button>
                      <Button type="button" projectType="dark">
                        Dark
                      </Button>
                    </SectionContainerRow>
                    <SectionContainerRow title="active">
                      <Button type="button" projectType="primary" active={true}>
                        Primary
                      </Button>
                      <Button
                        type="button"
                        projectType="secondary"
                        active={true}
                      >
                        Secondary
                      </Button>
                      <Button type="button" projectType="success" active={true}>
                        Success
                      </Button>
                      <Button type="button" projectType="warning" active={true}>
                        Warning
                      </Button>
                      <Button type="button" projectType="error" active={true}>
                        Error
                      </Button>
                      <Button type="button" projectType="info" active={true}>
                        Info
                      </Button>
                      <Button type="button" projectType="light" active={true}>
                        Light
                      </Button>
                      <Button type="button" projectType="dark" active={true}>
                        Dark
                      </Button>
                    </SectionContainerRow>

                    <SectionContainerRow title="disabled">
                      <Button
                        type="button"
                        projectType="primary"
                        disabled={true}
                      >
                        Primary
                      </Button>
                      <Button
                        type="button"
                        projectType="secondary"
                        disabled={true}
                      >
                        Secondary
                      </Button>
                      <Button
                        type="button"
                        projectType="success"
                        disabled={true}
                      >
                        Success
                      </Button>
                      <Button
                        type="button"
                        projectType="warning"
                        disabled={true}
                      >
                        Warning
                      </Button>
                      <Button type="button" projectType="error" disabled={true}>
                        Error
                      </Button>
                      <Button type="button" projectType="info" disabled={true}>
                        Info
                      </Button>
                      <Button type="button" projectType="light" disabled={true}>
                        Light
                      </Button>
                      <Button type="button" projectType="dark" disabled={true}>
                        Dark
                      </Button>
                    </SectionContainerRow>
                    <SectionContainerRow title="outline">
                      <Button type="button" projectType="primaryOutline">
                        Primary
                      </Button>
                      <Button type="button" projectType="secondaryOutline">
                        Secondary
                      </Button>
                      <Button type="button" projectType="successOutline">
                        Success
                      </Button>
                      <Button type="button" projectType="warningOutline">
                        Warning
                      </Button>
                      <Button type="button" projectType="errorOutline">
                        Error
                      </Button>
                      <Button type="button" projectType="infoOutline">
                        Info
                      </Button>
                      <Button type="button" projectType="lightOutline">
                        Light
                      </Button>
                      <Button type="button" projectType="darkOutline">
                        Dark
                      </Button>
                    </SectionContainerRow>
                  </SectionContainer> */}
                </ButtonSection>
              }
            ></Route>
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default DashboardLayout;
