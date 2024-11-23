import React, { useState } from "react";
import "./Dashboard.scss";
import { Menu, Sun } from "react-feather";

const Dashboard = () => {
  const [width, setWidth] = useState("350px");
  const [toggle, setToggle] = useState(true);

  const hideSideBar = () => {
    setToggle(!toggle);
  };

  return (
    <div className="dashboard_con">
      <div className={`Dsidebar box_shadow ${toggle ? "show" : "hide"}`}>
        <div className="header d-flex align-items-center px-2">
          <img
            width={"40px"}
            height={"40px"}
            className={`rounded-circle ${toggle ? "d-block" : "d-none"}`}
            src="https://cdn-icons-png.flaticon.com/256/8904/8904881.png"
            alt=""
          />
          <Menu onClick={hideSideBar} />
        </div>
        <div className="sideBody">Body</div>

        <div className="footer d-flex  align-items-center px-2">
          <span className={`${toggle ? "d-block" : "d-none"}`}>Back</span>
          <Sun />
        </div>
      </div>

      <div className="Dbody">Content</div>
    </div>
  );
};

export default Dashboard;
