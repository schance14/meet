import { useState } from "react";

const NumberOfEvents = () => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
  };
  const [eventNumber, setEventNumber] = useState("32");
  return (
    <div id="number-of-events">
      <input
        type="text"
        id="eventInputNumber"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
