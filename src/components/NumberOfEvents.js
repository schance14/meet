import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Number of events must be more than 0.";
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  };
  return (
    <div id="number-of-events">
      <input
        type="text"
        id="eventInputNumber"
        defaultValue="32"
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
