import React, { useState } from "react";

const Q4 = () => {
  const options = ["Sagar", "Bijoy", "Hironmoy"];
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <h1>Selected value is - {selectedValue}</h1>
    </>
  );
};
export default Q4;
