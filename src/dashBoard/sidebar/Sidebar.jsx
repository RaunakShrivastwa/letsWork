import React, { useState } from "react";
import {
  Award,
  FileText,
  Mail,
  Menu,
  MessageCircle,
  RefreshCcw,
  Sun,
  User,
} from "react-feather";
import "./Sidebar.scss";
import UpdateStatus from "../../Model/UpdateStatus";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const hideSideBar = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={`Dsidebar m-1 d-flex  custome_radius box_shadow ${
        toggle ? "show " : "hide"
      }`}
    >
      <div className="header d-flex align-items-center px-2">
        <img
          width={"40px"}
          height={"40px"}
          className={`rounded-circle ${
            toggle ? "d-xl-block d-lg-block d-md-block d-none" : "d-none"
          }`}
          src="https://cdn-icons-png.flaticon.com/256/8904/8904881.png"
          alt=""
        />
        <Menu
          className="d-xl-block d-lg-block d-md-block d-none"
          onClick={hideSideBar}
        />
      </div>

      {/* for the sidebar body */}
      <div className="sideBody">
        <ul>
          <li className="li_profile">
            <img
              className={`box_shadow profile custome_border p-1 m-2 ${
                toggle ? "d-block" : "d-none"
              }`}
              src="/programming.png"
              alt=""
            />
          </li>
          <li className={`${toggle ? "" : "hide_text"}`}>
            <div className="d-flex align-items-center h-100 px-3 gap-2">
              <User />
              <span className={`${toggle ? "d-block" : "d-none"}`}>
                Hello Bunny
              </span>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div className="d-flex align-items-center h-100 px-3 gap-2">
              <Mail />
              <span className={`${toggle ? "d-block" : "d-none"}`}>
                {" "}
                Connect@Shubham@gmail.com{" "}
              </span>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div className="d-flex align-items-center h-100 px-3 gap-2">
              <Award />
              <span className={`${toggle ? "d-block" : "d-none"}`}>
                {" "}
                Fullstack Developer{" "}
              </span>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div
              className={`d-flex align-items-center h-100 px-3 gap-2 ${
                toggle ? "w-100" : ""
              } `}
            >
              <FileText />
              <select
                name=""
                id=""
                className={`w-100 h-100 border-0 ${
                  toggle ? "d-block" : "d-none"
                } `}
              >
                <option value="Past Projects">Past Projects</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="E-Commerce">E-Commerce</option>
              </select>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div
              className={`d-flex align-items-center h-100 px-3 gap-2 ${
                toggle ? "w-100" : ""
              } `}
            >
              <FileText />
              <select
                name=""
                id=""
                className={`w-100 h-100 border-0 ${
                  toggle ? "d-block" : "d-none"
                } `}
              >
                <option value="Recent Projects">Recent Projects</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="E-Commerce">E-Commerce</option>
              </select>
            </div>
          </li>

          <li
            className={`${toggle ? "" : "hide_text"}`}
            style={{ color: "var(--green)" }}
          >
            <div className="d-flex align-items-center h-100 px-3 gap-2">
              <MessageCircle />
              <span className={`${toggle ? "d-block" : "d-none"}`}>
                Chat Now
              </span>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div
              className={`d-flex align-items-center h-100 px-3 gap-2 ${
                toggle ? "w-100" : ""
              } `}
            >
              <FileText />
              <select
                name=""
                id=""
                className={`w-100 h-100 border-0 ${
                  toggle ? "d-block" : "d-none"
                } `}
              >
                <option value="Recent Projects">Payment Status</option>
                <option value="E-Commerce">Initial Payment</option>
                <option value="E-Commerce">Half Payment</option>
                <option value="E-Commerce">Full Payment </option>
              </select>
            </div>
          </li>

          <li className={`${toggle ? "" : "hide_text"}`}>
            <div className="d-flex align-items-center h-100 px-3 gap-2">
              <RefreshCcw />
              <span
                className={`${toggle ? "d-block" : "d-none"}`}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Update Status
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* for the footer */}
      <div className="footer d-flex  align-items-center px-2">
        <span className={`${toggle ? "d-block" : "d-none"}`}>Back</span>
        <Sun />
      </div>
      
    </div>
  );
};

export default Sidebar;
