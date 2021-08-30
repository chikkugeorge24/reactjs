import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

const ReactIconDemo = () => {
  return (
    <IconContext.Provider value={{ color: "blue", size: "10rem" }}>
      <div>
        <FaReact />
        <MdAlarm />
      </div>
    </IconContext.Provider>
  );
};

export default ReactIconDemo;
