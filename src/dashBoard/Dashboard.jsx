import React, { useState } from "react";
import "./Dashboard.scss";
import Sidebar from "./sidebar/Sidebar";
import { Menu } from "react-feather";

const Dashboard = () => {

  return (
    <div className="dashboard_con">
      <div className="side_large  d-none d-lg-flex d-xl-flex d-md-flex">
        <Sidebar />
      </div>
      {/* <Sidebar /> */}

      <div className="Dbody w-100 m-1">
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
