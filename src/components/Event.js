import React from "react";
import logo from "./logo.png";

export default function Event() {
  return (
    <div className="card" style={{ width: "10rem" }}>
      <img className="card-img-top" src={logo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary small btn-sm card-button">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
