import React from "react";


export default function MintModal ()
return (
    <div className="mintToWinner">
        <h3>Minting the winning token to the winner</h3>
        <span>- Input the id of the event that you have created</span>
        <span>- You can call the function only if: </span>
        <ul>
          <li>You are calling it from the wallet of the event organiser</li>
          <li>After the ticket sale period of the event has ended</li>
        </ul>
        <label htmlFor="mintToWinnerEventContractId">eventContractId</label>
        <input
          type="number"
          className="mintToWinnerEventContractId"
          placeholder="5"
        />
        <button
          type="button"
          className="mintToWinnerFunction createEvent"
          text-align="center"
        >
          Mint to winner
        </button>
      </div>
)