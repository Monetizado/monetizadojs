# Monetizado Javascript library (MonetizadoJS)

MonetizadoJS is the library that allows you to implement [Monetizado](https://github.com/Monetizado/Contracts) directly on your Web pages, including static content, especially if you do not have access to the backend.

**This is the first version**

## How to use

1. On the page you want to monetize, import Web3.JS and Ethers.JS. You can do it from CDN, for example:
```
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
<script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
```

2. Download and import monetizadov1.js
```
<script src="./monetizado.js"></script>
```

3. [Create the protected content using the smart contract](https://github.com/Monetizado/Contracts)
4. Add a link tag in the head of the html code of your page, with the attribute "rel" with the value "monetized" and in href it follows the following structure:

**<link rel="monetizado" href="network://creator_address/sequence_id" />**

- network: It is the network where the content has been protected. At the moment, only "opbnb:testnet" and "bnb:testnet" are available.
- creator_address: It is the address (0x..) of the content creator. It can be your address if you are the creator.
- sequence_id: It is the Id that the contract was terminated when you specified the new protected content (starts from 0 onwards, it is numeric).

For example:
```
<link rel="monetizado" href="opbnb:testnet://0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5/0" />
```

The previous example means that the content is protected (by Id 0), by the creator (0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5), and that combination is who the payment must be made to to unlock it.
