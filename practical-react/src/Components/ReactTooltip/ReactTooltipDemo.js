import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const CustomTippy = () => {
  return <span style={{ color: "yellow" }}>Colored Component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First child</div>
      <div>Second child</div>
    </div>
  );
});
const ReactTooltipDemo = () => {
  return (
    <div>
      <Tippy content="Basic tooltip" placement="left" delay={1000}>
        <button>Hover!</button>
      </Tippy>
      <Tippy
        content={<span style={{ color: "orange" }}>Colored</span>}
        placement="top"
        arrow={false}
      >
        <button>Hover!</button>
      </Tippy>
      <Tippy content={<CustomTippy />} placement="right">
        <button>Hover!</button>
      </Tippy>
      <Tippy content={<CustomTippy />} placement="bottom">
        <CustomChild />
      </Tippy>
    </div>
  );
};

export default ReactTooltipDemo;
