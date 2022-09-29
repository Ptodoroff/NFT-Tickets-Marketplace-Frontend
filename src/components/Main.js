import { useMoralisFile, useMoralis } from "react-moralis";
import { React, useState } from "react";
import { Moralis } from "moralis";

let CidOfUploadedImage;

export default function Main() {
  //Moralis

  const { isUploading, moralisFile, saveFile } = useMoralisFile();
  const [file, setFile] = useState("");
  const { authenticate, isAuthenticated, user } = useMoralis();
  //IPFS Functionality
  const saveFileIPFS = async (f) => {
    console.log("FILE", f);
    const fileIpfs = await saveFile(f.name, file, { saveIPFS: true });
    await console.log(fileIpfs);
  };

  const handleFinal = () => {
    saveFileIPFS(file);
  };
  return (
    <div className="main">
      <div className="App">
        <div className="container">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            className="eventName"
            placeholder="Pop Smoke Concert"
          />
          <label htmlFor="eventSymbol">Event Symbol</label>
          <input type="text" className="eventSymbol" placeholder="PSMC" />
          <label htmlFor="ticketSupply">
            Number of tickets available for purchase
          </label>
          <input type="text" className="ticketSupply" placeholder="500" />
          <label htmlFor="ticketPrice">Price of the ticket</label>
          <input type="text" className="ticketPrice" placeholder="0.05 ETH" />
          <label htmlFor="ticketSaleDuration">Ticket sale duration</label>
          <input
            type="text"
            className="ticketSaleDuration"
            placeholder="Denominted in seconds "
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
            <button
              className="createEvent btn-sm ipfsbtn"
              onClick={handleFinal}
            >
              2. Upload Image to IPFS
            </button>
            <div>
              <button className="createEvent ipfsbtn">
                3. Upload Event Data to IPFS
              </button>
            </div>
          </div>
          <button type="button" className="createEvent">
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
}
