import React, { useEffect, useState } from "react";
import "./wizard.scss";

const Wizard = ({ project }) => {


  const wizardKeys = Object.keys(project || {});
  console.log("wizardkeys in trh", wizardKeys);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const doneCount = wizardKeys.reduce(
      (accumulator, item) =>
        project[item] === "Done" ? accumulator + 1 : accumulator,
      0
    );
    setCount(doneCount); // Update the state with the count
  }, [wizardKeys]);

  console.log("count", count);

  return (
    <div className="W-container">
      <div className="wizard">
        <div className="text_container">
          {wizardKeys.map((item) => (
            <div
              className={`text_item 
            ${
              project[item] == "Done"
                ? "done"
                : `${
                    project[item] == "proccessing" ? "proccessing" : "pending"
                  }`
            }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="wizard_line">
          <div className="progress" style={{ width: `${14.2 * count}%` }}></div>
          {wizardKeys.map((item) => (
            <div
              title={`${item} ${project[item]}`}
              className={`circle 
            ${
              project[item] == "Done"
                ? "Done"
                : `${item == "proccessing" ? "proccessing" : "pending"}`
            }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wizard;
