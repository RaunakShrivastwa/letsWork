import React from "react";
import "./wizard.scss";

const Wizard = () => {
  const sdlc = [
    { title: "Meeting", status: "Done" },
    { title: "Planning", status: "none" },
    { title: "Designs", status: "proccessing" },
    { title: "Develop", status: "proccessing" },
    { title: "Testing", status: "pending" },
    { title: "SEO", status: "pending" },
    { title: "Production", status: "pending" },
    { title: "Maintains", status: "pending" },
  ];
  return (
    <div className="W-container">
      <div className="wizard">
      <div className="text_container">
        {sdlc.map((item) => (
          <div className="text_item">{item?.title}</div>
        ))}
      </div>

      <div className="wizard_line">
        {sdlc.map((item) => (
          <div
            title={`${item?.title} ${item?.status}`}
            className={`circle 
            ${item?.status == "Done" ? "done" : `${item.status == "proccessing" ? "proccessing" : "pending"}`}`}
          ></div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Wizard;
