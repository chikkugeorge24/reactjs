import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ReactColorPickerDemo = () => {
  const [color, setcolor] = useState("#fff");
  const [showcolorpicker, setshowcolorpicker] = useState(false);
  return (
    <div>
      <button onClick={() => setshowcolorpicker(!showcolorpicker)}>
        {showcolorpicker ? "Close color picker" : "Show color picker"}
      </button>
      {showcolorpicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setcolor(updatedColor.hex)}
        />
      )}
    </div>
  );
};

export default ReactColorPickerDemo;
