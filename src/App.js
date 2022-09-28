import "./App.css";
import { React, useEffect } from "react";
//components
import logo from "./components/logo.png";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Event from "./components/Event.js";

//web3Onboard
import {
  init,
  useConnectWallet,
  useSetChain,
  useWallets,
} from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";

import { ethers } from "ethers";

//defining the metadata object
let metadata = {};

// initializing Onboard with Metamask and WalletConnect
const walletConnect = walletConnectModule({
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["metamask"],
  },
});

const injected = injectedModule();

init({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: "0x5",
      token: "gETH",
      label: "GOERLI Ethereum",
      rpcUrl: "https://goerli.infura.io/v3/d92c482888c64718a93cfbc3082b73be",
    },
  ],
});

let provider;

function App() {
  //web3Onboard
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const connectedWallets = useWallets();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null;
    } else {
      provider = new ethers.providers.Web3Provider(wallet.provider, "any");
    }
  }, [wallet]);

  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            hidden={wallet}
            onClick={() =>
              wallet ? disconnect({ label: wallet.label }) : connect()
            }
            type="button"
            className="connect btn btn-secondary text-center"
          >
            {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
          </button>
        </nav>
      </header>

      <Main />
      <div className="eventContainer">
        <h4 style={{ textAlign: "center" }}> Creted Events:</h4>
        {wallet ? <Event className="eventContainer" /> : ""}
      </div>
      <Footer />
    </div>
  );
}

export default App;
