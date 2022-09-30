import "./App.css";
import { React, useState } from "react";
// =======================================================================
//components and dependencies
// =======================================================================

import logo from "./components/logo.png";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Event from "./components/Event.js";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

// =======================================================================
//web3Modal
// =======================================================================

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

// =======================================================================
// contract-related
// =======================================================================

const marketPlaceABI = require("./ABIs/MarketplaceABI.json");
let provider;
let account;
let events = [];

function App() {
  // =======================================================================
  //webmodal initialisation
  // =======================================================================

  async function connect() {
    web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
      theme: {
        background: "rgb(179, 193, 184)",
        hover: "rgb(255, 245, 219)",
      },
    });
    const web3ModalProvider = await web3Modal.connect();
    provider = new ethers.providers.Web3Provider(web3ModalProvider);
    account = (await provider.listAccounts())[0];
    getEvents();
  }

  // =======================================================================
  //displaying the created event contracts from the factory contract at address = marketplaceAddress
  // =======================================================================
  const [eventContracts, setEventContracts] = useState([]);

  async function getEvents() {
    const marketplaceAddress = "0xb6c05e5e2e78f2e90419eef2b651a05cab4a1c50";
    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      marketPlaceABI,
      provider
    );

    let eventFilter = marketplaceContract.filters.EventContractCreated();
    events = await marketplaceContract.queryFilter(eventFilter);

    setEventContracts(events);
  }

  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" className="nav-logo" />
          <div id="headerButtonWrapper">
            <button
              onClick={connect}
              type="button"
              className="connect btn btn-secondary text-center"
            >
              {account ? "Connected" : "Connect"}
            </button>
          </div>
        </nav>
      </header>

      <Main provider={provider} getEvents={getEvents} />
      <div className="eventDisplay">
        <h4 style={{ textAlign: "center" }}> Created Events:</h4>
        <div id="eventContainer">
          {eventContracts.map((eventContract, i) => (
            <Event
              index={i}
              account={account}
              provider={provider}
              eventContract={eventContract}
              key={i}
              className=""
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
