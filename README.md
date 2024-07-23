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

3. [Create the protected content using the smart contract](https://github.com/Monetizado/Contracts) or in the [Manager](https://monetizado.github.io/manager/)
4. Add a link tag in the head of the HTML code of your page, with the attribute "rel" with the value "monetized" and in href it follows the following structure:

**<link rel="monetizado" href="network://creator_address/sequence_id" />**

- network: It is the network where the content has been protected.
- creator_address: It is the address (0x..) of the content creator. It can be your address if you are the creator.
- sequence_id: It is the Id that the contract was terminated when you specified the new protected content (starts from 0 onwards, it is numeric).

For example:
```
<link rel="monetizado" href="opbnb:testnet://0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5/0" />
```

The previous example means that the content is protected (by Id 0), by the creator (0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5 for example), and that combination is the payment must be made to unlock it.
5. Use the window.monetizado property (instructions below).

## Available Networks 
For the Monetizado link tag, you have the following list of networks:

### Testnet
- **arbitrum:sepolia**
- **base:testnet**
- **berachain:testnet**
- **bittorrent:testnet**
- **bnb:testnet**
- **botanix:testnet**
- **camp:testnetv1**
- **celo:testnet**
- **chiliz:testnet**
- **core:testnet**
- **etherlink:testnet**
- **filecoin:testnet**
- **linea:testnet**
- **lisk:testnet**
- **meter:testnet**
- **mode:testnet**
- **morph:testnet**
- **opbnb:testnet**
- **rootstock:testnet**
- **scroll:testnet**
- **shardeum:testnet**
- **shido:testnet**
- **taraxa:testnet**
- **theta:testnet**

### Mainnet
- **bittorrent:mainnet**

If you need the Smart Contracts Ids for those networks, you can get them [here](https://github.com/Monetizado/Contracts/blob/main/README.md#contract-ids).

## window.monetizado

window.monetizado is the injected property that allows you to enable and use **monetizado** on your HTML page or static content.

### window.monetizado.isPageEnabled

It is the function that returns if monetized has been well implemented in the HTML page (instructions above).
Returns a bool indicating whether it is enabled to operate or not.

Example: 
```
const isEnabled = window.monetizado.isPageEnabled();
if(isEnabled) {
  // do something
}
```

### window.monetizado.validateNetworkFormat

This function validates if the URI format of the tag link is correct to use monetizado.
Returns a bool indicating whether it is right to operate or not.

Example: 
```
const linkMonetizado = "opbnb:testnet://0xda3ec0b8bddd2e8bdedede3333fbaf938fcc18c5/0";
const isRight = window.monetizado.validateNetworkFormat(linkMonetizado);
if(isRight) {
  // do something
}
```

### window.monetizado.userHasAccess

This function checks if the current user (visitor) has access to the page (has paid for the content). This function receives as a parameter a Web3 object with the provider, and returns a bool indicating whether or not the user has access.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
var access = await window.monetizado.userHasAccess(web3);
if(access) {
  // Show exclusive content
}
```

### window.monetizado.getContentInfo

This function returns information about the protected content (price, name, creator, ID, among others). This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
var content = await window.monetizado.getContentInfo(web3);
if(content != null) {
  // Show content info and price
}
```

### window.monetizado.getAmountForWithdraw

This function returns information about the available amount to withdraw from the content creator. This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
var amountWithdraw = await window.monetizado.getAmountForWithdraw(web3);
if(amountWithdraw != null) {
  // Show available amount
}
```

### window.monetizado.getContentList

This function returns the list of all creations by the creator specified in the link tag. This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
var creationList = await window.monetizado.getContentList(web3);
if(creationList != null) {
  // Show list
}
```

### window.monetizado.payContent

This method allows the current user (visitor) to pay for the content using their Web3 wallet (tested with Metamask for now)

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
var amount = // amount to pay (you can get this from getContentInfo()).
// Connect user with Metamask for example
...
var txId = await window.monetizado.payContent(web3, amount);
if(txId != null) {
  // Show exclusive content
}
```

### window.monetizado.getPlatformFee

This function returns the platform fee in percentage. This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
var platformFee = await window.monetizado.getPlatformFee(web3);
if(platformFee != null) {
  // Show list
}
```

### window.monetizado.unprotectContent

This method releases the content so that anyone can access it and not pay for it (for example for particular events or situations)(only executable by the content owner). This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
await window.monetizado.unprotectContent(web3);
// reload and show the content
```

### window.monetizado.protectContent

This method again restricts the content so that only people who pay for it can access it (only executable by the content owner). This function receives as a parameter a Web3 object with the provider.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
await window.monetizado.protectContent(web3);
// reload and pay for the content
```

### window.monetizado.changeAccessCost

This method changes the access cost to access the content (only executable by the content owner). This function receives as parameters a Web3 object with the provider and the new amount/cost.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
await window.monetizado.changeAccessCost(web3, newCost);
// reload and verify to pay
```

### window.monetizado.withdrawMoneyFromContent

This method allows the content creator to claim the available money paid by users. This function receives as parameters a Web3 object with the provider and the new amount to claim/withdraw.

Example: 
```
var web3 = new Web3(new Web3.providers.HttpProvider("https://opbnb-testnet-rpc.bnbchain.org"));
// Connect user with Metamask for example
...
await window.monetizado.withdrawMoneyFromContent(web3, amount);
// reload and verify in the wallet
```

## Demos

You can check some demos here:
- [Simple web with plain HTML in different chains](https://github.com/Monetizado/demosmonetizado).
