import React from "react";
import "./Home.scss";
import Spline from "@splinetool/react-spline";
import zIndex from "@mui/material/styles/zIndex";
function Home() {
  return (
    <div className="main_section mb-4 position-relative">
      <main
        className="position-absolute"
        style={{
          top: "0",
          zIndex: "2",
          width: "100vw",
          height: "100vh",
          opacity: "0.1",
        }}
      >
        <Spline scene="https://prod.spline.design/QJux19H-ZNmuB1Dm/scene.splinecode" />
      </main>
      <div className="wrapper">
        <div className="left">
          <p className="f26 slogn fw-medium">We build what you love</p>
          <p className="title h1">
            Best Web & Mobile App{" "}
            <span style={{ color: "var(--pink);" }}>Development</span> Company
          </p>
          <p className="f20 desc">
            High Quality Web & Mobile Application Design & Development Solution,
            that will help you to achieve new heights in your business.
          </p>
          <div className="btn_grp mt-5 mb-4">
            <button className="btn custome_radius">Talk To Cansult</button>
            <button className="btn custome_radius">Hire us</button>
          </div>
        </div>

        <div className="right">
          <img
            className="img-fluid items img1"
            src="./programming.png"
            alt=""
          />
          <img
            className="img-fluid items img1"
            src="./new-Mask-group-3.webp"
            alt=""
          />
          <img className="img-fluid items img2" src="./gardening.png" alt="" />
          <img className="img-fluid items img2" src="./www.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
