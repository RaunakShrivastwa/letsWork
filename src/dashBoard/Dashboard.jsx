import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import Sidebar from "./sidebar/Sidebar";
import { Eye, Maximize, Menu } from "react-feather";
import Wizard from "./wizard/Wizard";
import ProjectInfo from "./wizard/Projectinfo/ProjectInfo";
import Member from "./Member/Member";
import UpdateStatus from "../Model/UpdateStatus";
import cookie from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const website = "https://www.feedocenter.com/?trk=public_post-text#/";
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [token, setToken] = useState();
  const [project, setProject] = useState({});

  console.log("user state is", user)
  console.log("dashboard component is rendering", project);

  function setCurentProject(projectName, selectedFrom) {
    const projectDetail = user[selectedFrom].reduce(
      (acc, value) => {
        if(value.projectName === projectName){
          return {...value}
      }
      return acc;
    }
    , {});
    console.log("projectDetail", projectDetail);
    setProject(projectDetail)
  }

  useEffect(() => {
    const ids = cookie.get("id");

    const tokens = cookie.get("token");
    if (ids) {
      setId(JSON.parse(ids));
    }
    console.log(tokens + "toekn");
    if (tokens) {
      setToken(tokens);
    }
  }, []);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:9000/letswork/user/api/user/fetch/${id}`,
          { headers: { Authorization: `${token}` } }
        );
        console.log("res is", response);
        setUser(response.data.user);
        console.log(
          "user is",
          response.data.user?.currentProjects[
            response.data.user?.currentProjects.length - 1
          ]
        );
        setProject(
          response.data.user?.currentProjects[
            response.data.user?.currentProjects.length - 1
          ]
        );
      } catch (error) {
        console.log("error");
      }
    };

    fetchData(id);
  }, [id]);

  return (
    <div className="dashboard_con">
      <Sidebar user={user} setCurentProject={setCurentProject} />
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
        <Wizard project={project.wizard} />
        <div className="wizard_con d-flex">
          <ProjectInfo />
        </div>

        {/* for the project voew */}
        <div className="iframe flex-grow-1 custome_radius">
          <iframe
            className="box_shadow custome_border w-100 h-100 custome_radius"
            src={project?.projectUrl}
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
          <span className="flex-grow-1 d-flex justify-content-end">
            Total PriseL: $120.45
          </span>
        </div>
      </div>

      {/* canvas */}
      <div
        class="offcanvas offcanvas-sidebar offcanvas-start p-0 "
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
      <UpdateStatus />
    </div>
  );
};

export default Dashboard;
