import React, { useState } from "react";
import "./Dashboard.scss";
import Sidebar from "./sidebar/Sidebar";
import { Menu } from "react-feather";
import Wizard from "./wizard/Wizard";
import Wizardlist from "./wizard/Wizardlist";
import ProjectInfo from "./wizard/Projectinfo/ProjectInfo";

const Dashboard = () => {
  return (
    <div className="dashboard_con">
      {/* <Sidebar /> */}
      <div className="d-none d-lg-flex d-xl-flex d-md-flex">
      <Sidebar />
      </div>

      {/* for the Body */}
      <div className="Dbody flex-grow-1 m-1">
        {/* nav */}
        <nav className="w-100 d-flex px-2 d-xl-none d-lg-none d-md-none justify-content-between align-items-center">
          <img
            src="/programming.png"
            className="box_shadow p-1 custome_border m-1"
            alt=""
          />
          <Menu
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          />
        </nav>
        {/* for the status of Project */}
       <Wizard />
       <div className="wizard_con d-flex">
        <ProjectInfo />
        {/* <Wizardlist /> */}
       </div>
      </div>

      {/* canvas */}
      <div
        class="offcanvas offcanvas-start p-0"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-body">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
