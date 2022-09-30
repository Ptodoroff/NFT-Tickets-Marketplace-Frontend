import { React, useState } from "react";
import { ethers } from "ethers";

const eventContractABI = require("../ABIs/EventContractABI.json");

export default function Event(props) {
  const [price, setPrice] = useState("");
  const [os, toggleOs] = useState(false);

  let eventContract = props.eventContract;
  let provider = props.provider;
  let contractId = props.index;

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
        <h6 className="card-title">{eventContract.args[0]}</h6>
        <p className="card-text">
          {" "}
          address:{" "}
          <a
            target="_blank"
            href={`https://goerli.etherscan.io/address/${eventContract.args[1]}`}
          >
            {eventContract.args[1]}
          </a>
        </p>
        <p className="card-text"> contract ID: {contractId} </p>
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

        <label>Price</label>
        <br />
        <input
          type="number"
          className="ticketSupply"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price must match"
        />
        <a
          href="#"
          className="btn btn-primary small btn-sm card-button"
          onClick={buyTickets}
        >
          Buy ticket
        </a>
        <br />
        {os ? (
          <a target="_blank" href="https://testnets.opensea.io/account">
            View on OS
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
