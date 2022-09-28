import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" className="nav-logo" />
        <button type="button" className="connect btn btn-secondary text-center">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
}

export default Header;
