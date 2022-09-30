import { React, useState } from "react";
import { ethers } from "ethers";

const eventContractABI = require("../ABIs/EventContractABI.json");

export default function Event(props) {
  const [price, setPrice] = useState("");
  const [os, toggleOs] = useState(false);

  let eventContract = props.eventContract;
  let provider = props.provider;

  async function buyTickets() {
    const eventContractAddress = eventContract.args[1];
    const eventContractInstance = new ethers.Contract(
      eventContractAddress,
      eventContractABI,
      provider.getSigner()
    );
    let tx = await eventContractInstance.mint({ value: price });
    await tx.wait();
    await toggleOs(true);
  }
  return (
    <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{eventContract.args[0]}</h5>
        <p className="card-text"> address: {eventContract.args[1]} </p>
        <p className="card-text">
          {" "}
          Total tickets for sale: {Number(eventContract.args[6])}{" "}
        </p>
        <p className="card-text">
          {" "}
          Price: {Number(eventContract.args[4])} Wei{" "}
        </p>
        <p className="card-text">
          {" "}
          Ticket sale duration:{" "}
          {Math.floor(Number(eventContract.args[5]) / 60).toFixed(2)} minutes
        </p>
        <a
          href="#"
          className="btn btn-primary small btn-sm card-button"
          onClick={buyTickets}
        >
          Buy ticket
        </a>
        <input
          type="number"
          className="ticketSupply"
          onChange={(e) => setPrice(e.target.value)}
        />
        {os ? <a href="https://testnets.opensea.io/account">View on OS</a> : ""}
      </div>
    </div>
  );
}
