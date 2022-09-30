import "./App.css";
import { React, useEffect, useState } from "react";

//components
import logo from "./components/logo.png";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Event from "./components/Event.js";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

//web3Modal
let web3Modal;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        5: "https://goerli.infura.io/v3/d92c482888c64718a93cfbc3082b73be",
      },
    },
  },
};

// initializing Onboard with Metamask and WalletConnect

const rpcAPIKey = "d92c482888c64718a93cfbc3082b73be";
const rpcUrl = "https://goerli.infura.io/v3/d92c482888c64718a93cfbc3082b73be";

const marketPlaceABI = require("./ABIs/MarketplaceABI.json");
let provider;
// the
let events = [];
function App() {
  //webmodal

  async function connect() {
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });
    const web3ModalProvider = await web3Modal.connect();
    provider = new ethers.providers.Web3Provider(web3ModalProvider);
  }

  // =======================================================================
  //displaying the created events
  // =======================================================================
  const [eventName, setEventName] = useState("");

  async function getEvents() {
    const marketplaceAddress = "0x3DD5057C940596b631CE4FeBF6Dbf6ecB1c68A0E";
    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      marketPlaceABI,
      provider
    );

    let eventFilter = marketplaceContract.filters.EventContractCreated();
    events = await marketplaceContract.queryFilter(eventFilter);
    console.log(events);
    setEventName(events);
  }

  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            onClick={connect}
            type="button"
            className="connect btn btn-secondary text-center"
          >
            Connect
          </button>
          <button onClick={getEvents}>Events</button>
        </nav>
      </header>

      <Main />
      <div className="eventDisplay">
        <h4 style={{ textAlign: "center" }}> Created Events:</h4>
        <div id="eventContainer">
          {events.map((eventContract, i) => (
            <Event eventContract={eventContract} key={i} className="" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
