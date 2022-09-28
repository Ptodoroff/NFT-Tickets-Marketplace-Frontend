import "./App.css";

//components
import logo from "./components/logo.png";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Event from "./components/Event.js";

//web3Onboard
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";

// initialize Onboard
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
      rpcUrl: `${process.env.INFURA_KEY}`,
    },
  ],
});

function App() {
  //web3Onboard
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            disabled={connecting}
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
        <Event />
      </div>
      <Footer />
    </div>
  );
}

export default App;
