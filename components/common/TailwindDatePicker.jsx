import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const TailwindDatePicker = () => {
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
      inputClassName="focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200"
      placeholder={"Check In - Check Out"}
      showShortcuts={true}
      showFooter={true}
    />
  );
};
export default TailwindDatePicker;
