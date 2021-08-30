import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReactDatePickerDemo = () => {
  const [date, setdate] = useState(null);
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={(date) => setdate(date)}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        maxDate={new Date()}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default ReactDatePickerDemo;
