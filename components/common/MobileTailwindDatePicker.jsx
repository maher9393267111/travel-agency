import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const MobileTailwindDatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
      useRange={false}
      inputClassName="focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200"
      placeholder={"Check In - Check Out"}
    />
  );
};
export default MobileTailwindDatePicker;
