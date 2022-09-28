import React from "react";

export default function Main() {
  return (
    <div className="main">
      <div className="App">
        <div className="container">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            className="eventName"
            placeholder="Pop Smoke Concert"
          />
          <label htmlFor="eventSymbol">Event Symbol</label>
          <input type="text" className="eventSymbol" placeholder="PSMC" />
          <label htmlFor="ticketSupply">
            Number of tickets available for purchase
          </label>
          <input type="text" className="ticketSupply" placeholder="500" />
          <label htmlFor="ticketPrice">Price of the ticket</label>
          <input type="text" className="ticketPrice" placeholder="0.05 ETH" />
          <label htmlFor="ticketSaleDuration">Ticket sale duration</label>
          <input
            type="text"
            className="ticketSaleDuration"
            placeholder="Denominted in seconds "
          />

          <button type="button" className="createEvent">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}
