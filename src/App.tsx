import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import SideBar from "./components/SideBar/SideBar";

function App() {
  /* window.onload = function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    searchBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
  }; */

  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">Dashboard</div>
      </section>
    </>
  );
}

export default App;
