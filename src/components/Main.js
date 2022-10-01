import { useMoralisFile, useMoralis } from "react-moralis";
import { React, useState } from "react";
import { Moralis } from "moralis";
import { ethers } from "ethers";

const marketPlaceABI = require("../ABIs/MarketplaceABI.json");

export default function Main(props) {
  // =======================================================================
  //useStates
  // =======================================================================
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [price, setTicketPrice] = useState("");
  const [ticketSaleDuration, setticketSaleDuration] = useState("");
  const [toggle, setToggle] = useState(false);

  // =======================================================================
  //Moralis and IPFS
  // =======================================================================
  //defining the metadata object
  const { moralisFile, saveFile } = useMoralisFile();
  const { authenticate, isInitialized } = useMoralis();
  let imageCID;

  // =======================================================================
  //IPFS image upload functionality
  // =======================================================================

  const saveImageIPFS = async (f) => {
    let moralisFile = await saveFile(f.name, file, {
      saveIPFS: true,
      metadata,
    });
    imageCID = await moralisFile.ipfs();
    console.log("Image uploaded at:" + imageCID);
    await console.log("Image metadata: ↓↓↓↓");
    await console.log(moralisFile._metadata);

    setToggle(true);
  };
  const handle = () => {
    saveImageIPFS(file);
  };

  // =======================================================================
  //IPFS event data upload
  // =======================================================================

  let metadata = {
    eventName: name,
    eventSymbol: symbol,
    numberOfTickets: numberOfTickets,
    prieInWei: price,
    ticketSaleDuration: ticketSaleDuration,
  };

  // =======================================================================
  //Marketplace contract function invocations
  // =======================================================================

  const createEventFunction = async () => {
    let provider = props.provider;
    const marketplaceAddress = "0x8e5c9A24053288CcC5ead816864c45403D9804d2";
    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      marketPlaceABI,
      provider.getSigner()
    );
    let transaction = await marketplaceContract.createEventContract(
      numberOfTickets,
      price,
      name,
      symbol,
      ticketSaleDuration
    );

    await transaction.wait();
    await props.getEvents();
  };
  return (
    <div className="main">
      <div className="App">
        <div className="container">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            className="eventName"
            onChange={(e) => setName(e.target.value)}
            placeholder="Pop Smoke Concert"
          />
          <label htmlFor="eventSymbol">Event Symbol</label>
          <input
            type="text"
            className="eventSymbol"
            placeholder="PSMC"
            onChange={(e) => setSymbol(e.target.value)}
          />
          <label htmlFor="ticketSupply">
            Number of tickets available for purchase
          </label>
          <input
            type="number"
            className="ticketSupply"
            placeholder="500"
            onChange={(e) => setNumberOfTickets(e.target.value)}
          />
          <label htmlFor="ticketPrice">
            Price of the ticket in <span style={{ fontWeight: 650 }}>Wei</span>
          </label>
          <input
            type="number"
            className="ticketPrice"
            placeholder="10000"
            onChange={(e) => setTicketPrice(e.target.value)}
          />
          <label htmlFor="ticketSaleDuration">Ticket sale duration</label>
          <input
            type="number"
            className="ticketSaleDuration"
            placeholder="in seconds"
            onChange={(e) => setticketSaleDuration(e.target.value)}
          />
          <label htmlFor="filename">Image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="createEvent filename"
          />
          <div id="ipfs">
            <button
              className="createEvent btn-sm ipfsbtn"
              onClick={() => authenticate()}
            >
              1. Allow storing on IPFS
            </button>
            <button className="createEvent btn-sm ipfsbtn" onClick={handle}>
              2. Upload Image to IPFS
            </button>
          </div>
          {toggle ? (
            <button
              type="button"
              className="createEvent"
              onClick={createEventFunction}
            >
              Create Event
            </button>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
}
