import React, { useState } from "react";
import "./Dashboard.scss";
import Sidebar from "./sidebar/Sidebar";
import {Eye, Maximize, Menu } from "react-feather";
import Wizard from "./wizard/Wizard";
import ProjectInfo from "./wizard/Projectinfo/ProjectInfo";
import AdminInfo from "./AdminInfo/AdminInfo";
import Member from "./Member/Member";

const Dashboard = () => {
  const website = "https://lets-work-two.vercel.app/";
  return (
    <div className="dashboard_con">
      {/* <Sidebar /> */}
      <div className="d-none d-lg-flex d-xl-flex d-md-flex">
        <Sidebar />
      </div>

      {/* for the Body */}
      <div className="Dbody flex-grow-1 m-1 d-flex flex-column gap-1">
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
        </div>

        {/* for the project voew */}
        <div className="iframe flex-grow-1 custome_radius">
          <iframe
            className="box_shadow custome_border w-100 h-100 custome_radius"
            src={website}
            title="description"
          ></iframe>
          <a href={website}>
            <Maximize className="eye cursor-pointer" />
          </a>
        </div>

        {/* for the Dbody Footer */}
        <div className="Dbody_footer custome_radius box_shadow mb-1 d-flex align-items-center px-3">
          <div className="d-flex gap-5">
                 <Eye />
                 <span>Wireframes</span>
                 <Member />
                 
          </div>
          <span className="flex-grow-1 d-flex justify-content-end">Total PriseL: $120.45</span>
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
        <div class="offcanvas-body d-flex">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
