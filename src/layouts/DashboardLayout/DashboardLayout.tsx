import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./DashboardLayout.scss";

function DashboardLayout() {
  return (
    <>
      <SideBar />
      <section className="home-section">
        <NavBar />
        <div className="text">Dashboard</div>
      </section>
    </>
  );
}

export default DashboardLayout;
