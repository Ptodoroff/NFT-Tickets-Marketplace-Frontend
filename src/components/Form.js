import React from "react";

export default function Form() {
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
          <input type="text" className="eventSymbol" placeholder="PSMK" />
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
      <div className="mintToWinner">
        <h3>Minting the winning token to the winner</h3>
        <span>- Input the id of the event that you have created</span>
        <span>- You can call the function only if: </span>
        <ul>
          <li>You are calling it from the wallet of the event organiser</li>
          <li>After the ticket sale period of the event has ended</li>
        </ul>
        <label htmlFor="mintToWinnerEventContractId">eventContractId</label>
        <input
          type="number"
          className="mintToWinnerEventContractId"
          placeholder="5"
        />
        <button
          type="button"
          className="mintToWinnerFunction createEvent"
          text-align="center"
        >
          Mint to winner
        </button>
      </div>
    </div>
  );
}
