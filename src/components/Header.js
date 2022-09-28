import React from "react";
import logo from "./logo.png";

//web3Onboard
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();
// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: "0x5",
      token: "gETH",
      label: "GOERLI Ethereum",
      rpcUrl: `${process.env.INFURA_KEY}`,
    },
  ],
});

function Header() {
  //web3Onboard
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  return (
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
  );
}

export default Header;
