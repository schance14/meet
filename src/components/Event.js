// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h3>{event.summary}</h3>
      <p>{event.location}</p>
      <p>{event.created}</p>
      <button
        className="details-btn"
        onClick={() => {
          showDetails ? setShowDetails(false) : setShowDetails(true);
        }}
      >
        {showDetails ? "hide details" : "show details"}{" "}
      </button>
      {showDetails ? (
        <div className="details">
          <h3>Event Details</h3>
          <p>{event.description}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
