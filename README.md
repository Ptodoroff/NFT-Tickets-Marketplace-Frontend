# Read Me

![Project Image](https://ipfs.moralis.io:2053/ipfs/Qmc8J3Fvje1UCSgNymJW5phnZsPeCSwEXtLomaMY8hS3D9)

> Todoroff Events Co. - a decentralised application to create events and buy tickets.

---

### Table of Contents

- [Description](#description)
- [Netlify Link](#Netlify)
- [Technologies](#technologies)
- [Installation](#installation)
- [How To Use](#how-to-use)

---

## Description

This repository represents the frontend of the event management application. The webpage is user focused, not event organiser-focused, and is used to interact with an already deployed Marketplace (factory) contract, sitting at: **0x8e5c9A24053288CcC5ead816864c45403D9804d2** on the Goerli testnet. If you are an event organiser and want to draw a winner or withdraw the proceeds from the ticket sale of your event, please follow the steps to generate a UI from the project's contracts repository (outlined in the README.md file) and you could execute these functions.\

The dapp has the following functionalities implemented:\

- **Creating an event** (the button for the event creation appears after the user has: \ **1.** allowed storing on IPFS (syntactic sugar that I use as a synonym for "authentication to use Moralis' IPFS functionality")\
  **2.** Uploaded an image to IPFS\
- **Uploading an image with the metadata, which is input by the user**\
- **Creating an event contract and deploying it on the Goerli Testnet**\
- **Allowing any user to select an event and buy a ticket for it during the sale period, for the designated price**\
- **A link to the user's Opensea account, which appears when the transaction for buying a ticket has been mined.**\

---

## Netlify

- You can save time and computational resources by accessing the Dapp directly at https://lustrous-maamoul-d2a084.netlify.app// Make sure to:\
- Have Goerli test ether. You can get some at: [goerlifaucet.com](https://goerlifaucet.com/)\
- Connect your wallet to the dapp and then **double check that it is connected to the Goerli testnet by taking a look at your wallet's dashboard!**\

---

#### Technologies

- React
- Javascript
- Moralis
- Web3Modal
- IPFS
- ethers.js
- HTML
- CSS
- Netlify
- Bootstrap

[Back To The Top](#read-me)

---

#### Installation

If you prefer cloning the repository onto your local machine, run the following commands:

`git clone https://github.com/Ptodoroff/NFT-Tickets-Marketplace-Frontend `
run `npm install`
Navigate to the `src` folder and run `npm start`

**make sure that you use react-scripts version 4.0.3, react-dom version 17.0.0, react version 17.0.0**. This is required by the WalletConnect module of Web3Modal, otherwise the application will not work properly.\

**Important:** `Request has been blocked by CORS policy` may sometimes appear as an error. This can easily be solved by using an Chrome extension like [Cross Domain - CORS] (https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai)\

DISCLAIMER: Although it is not a recommended practice, I have not masked the API key by Infura, nor the credentials required by Moralis in a .env file, in order to save the designated users/recruiters/clients time and aid the entire installation process.

---

## How To Use

Once the Dapp is opened, click the `Connect` button and authorise your wallet. Make sure that you are connected to the Goerli testnet by taking a quick glance at your wallet extension's dashboard. After that, the usage cycle could be summarised as follows:

1. Input the arguments for your event - name, symbol, ticket price, sale duration, ticket supply , etc.
2. Select an image or any other file that could be related to your event.
3. Authorise your wallet to use the IPFS uploading functionality by clicking ot `Allow storing on IPFS`. It is important ot do this before actually proceeding to the next step.\
4. Click `Upload Image to IPFS`.
5. A `Create event` button is displayed. Clicking on it will deploy an instance of of the event contract with the parameters that were passed in the input boxes.
6. After the transaction is mined, a card will appear that contains a link to the contract, information about it and a `Buy tickets` button. \
7. Click the `Buy tickets` button after inputting the exact price of a ticket for this event. The price is denominated in **wei**.
   **Note** - the transaction will revert if it is sent after the ticket sale period has ended or if the input price does not match the one of the ticket for the selected event. When the transaction is confirmed , a link to view the account's NFTs on opensea and the newly minted ticket ( may require Opensea authentication if not used before)

---

## Author Info

- LinkedIn - [Petar Todorov](https://www.linkedin.com/in/petargtodorov/)
- Blog - [0xTodorov](https://0xtodorov.hashnode.dev/)

[Back To The Top](#read-me-template)
