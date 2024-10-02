const networks = {
	"arbitrum:sepolia" : "0x3258814758AC48fE9c0869d43Df8F13aD0cB2A25",
	"base:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"berachain:testnet" : "0x4FCA17c99Cd6eA508AD64D75Daa6a5BeBfdd5916",
	"bittorrent:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
    "bnb:testnet":"0x13cbEaAaBcC8a126dF2f7b1aA955251574191231",
	"botanix:testnet" : "0xd0876600e82CCAa4aA0ab0Cd8bEa9c74F5b46De3",
	"camp:testnetv1" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"celo:testnet" : "0x230e12e3954DBC5f0b2C8459607055f64730e6d4",
	"chiliz:testnet" : "0xd0876600e82CCAa4aA0ab0Cd8bEa9c74F5b46De3",
	"core:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"educhain:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"etherlink:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"filecoin:testnet" : "0x6388418CfEa921C323b91B173E10D7f8f1193680",
	"fuse:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"kaia:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"kii:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"linea:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"lisk:testnet" : "0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"meter:testnet" : "0x923720cA17B2e071542FE7419394EA717fdC1b98",
	"mode:testnet" : "0xf0F90a236c860FB79DbBA4Ad9Dd62b714268BD21",
	"morph:testnet":"0x86f5304600627e7897AaAfAD39853e3D18E71B43",
	"neox:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"opbnb:testnet":"0x0702B45d590372b5456BeC39e13a46c00Fc8F733",
	"pwrbtc:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"rootstock:testnet":"0xf0F90a236c860FB79DbBA4Ad9Dd62b714268BD21",
	"scroll:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"shardeum:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"shibarium:testnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168",
	"shido:testnet":"0x7D3789722F4d94A38852E794bf8C1f6cd53B47aB",
	"taraxa:testnet":"0x4da05dda2f0586327e956548fd3e88a508ba2168",
	"theta:testnet":"0x50f57850ccf3ebe7f19993facbb4caa4d10cc4ee",
	// Mainnets
	"bittorrent:mainnet":"0x4dA05ddA2F0586327E956548fd3E88a508ba2168"
}

const networksEIP1559 = ["bnb","opbnb","base","fuse"];

const monetizadoAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "usuario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "GrantedAccess",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "accessCost",
				"type": "uint256"
			}
		],
		"name": "addProtectedContent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newCost",
				"type": "uint256"
			}
		],
		"name": "changeAccessCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "feePlatform",
				"type": "uint256"
			}
		],
		"name": "changePlatformFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "currentUserHasAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlatformBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlatformFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "getProtectedContentByAddressAndId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "accessCost",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isProtected",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "sequenceId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amountAvailable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					}
				],
				"internalType": "struct Monetizadov1.ProtectedContentInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProtectedContentsForCurrentUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "accessCost",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isProtected",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "sequenceId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amountAvailable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					}
				],
				"internalType": "struct Monetizadov1.ProtectedContentInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hosting",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "payAccess",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "protectContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "unprotectContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMoneyFromContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMoneyPlatform",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



async function getContract(web3,contractNetwork, userAddress) {
    var contractPublic = await new web3.eth.Contract(monetizadoAbi,contractNetwork);
    if(userAddress != null && userAddress != undefined) {
      contractPublic.defaultAccount = userAddress;
    }
    return contractPublic;
  }

var iface = new ethers.utils.Interface(monetizadoAbi);

// Nombre de la nueva propiedad
const monetizadoProp = 'monetizado';


window[monetizadoProp] = {
    isPageEnabled : function() {
        const monetizationTag = document.querySelector('link[rel="monetizado"]');

        if (monetizationTag == null) {
            return false;
        }
        else {
            return true;
        }
    },
    validateNetworkFormat: function(networkFormat) {
        const parts = networkFormat.split("://");
        if(parts.length == 2) {
            if (networks.hasOwnProperty(parts[0])) {
                const subpartsCreator = parts[1].split("/");
                if(subpartsCreator.length == 2) {
                    return true;
                }
                else {
                    console.error("The content format is wrong. It should be:<creator address like 0x...>/<sequence Id for content>");
                    return false;
                }
            }
            else {
                console.error("The network doesn't exist for this Monetizado version");
                return false;
            }
        }else {
            console.error("Format error. It should be <network (bnb/opbnb)>:<type (mainnet/testnet)>://<creator address like 0x...>/<sequence Id for content>");
            return false;
        }
    },
    connectWeb3 : function(urlRPC) {
        return new Web3(new Web3.providers.HttpProvider(urlRPC));
    },
    userHasAccess: async function(Web3) {

        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var user = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.currentUserHasAccess(creatorId,sequenceId).encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              user = iface.decodeFunctionResult("currentUserHasAccess", user);
              return user[0];
          }
    },
    getContentInfo: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var contentInfo = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.getProtectedContentByAddressAndId(creatorId,sequenceId).encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              contentInfo = iface.decodeFunctionResult("getProtectedContentByAddressAndId", contentInfo);
              if(contentInfo.length > 0) {
                return contentInfo[0];
              }
              return null;
          }
    },
	getAmountForWithdraw: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var contentInfo = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.getProtectedContentByAddressAndId(creatorId,sequenceId).encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              contentInfo = iface.decodeFunctionResult("getProtectedContentByAddressAndId", contentInfo);
              if(contentInfo.length > 0) {
                return contentInfo[0].amountAvailable.toBigInt();
              }
              return null;
          }
    },
	getContentList: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var contentInfo = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.getProtectedContentsForCurrentUser().encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              contentInfo = iface.decodeFunctionResult("getProtectedContentsForCurrentUser", contentInfo);
              return contentInfo;
          }
    },
    payContent: async function(Web3,amount){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

		

        const contractNetwork = networks[parts[0]];

		const networkName = parts[0].split(':')[0];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

		const isEIP1559 = networksEIP1559.includes(networkName);

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            const query = contractPublic.methods.payAccess(creatorId,sequenceId);
            const encodedABI = query.encodeABI();
            const gasPrice = Web3.utils.toHex(await Web3.eth.getGasPrice());

			const paramsForEIP1559 = isEIP1559 ? {
				from: account, 
				to: contractNetwork,
				data: encodedABI,
				value: Web3.utils.numberToHex(amount),
				gasLimit: '0x5208',
				maxPriorityFeePerGas: gasPrice, 
				maxFeePerGas: gasPrice
			  } : { from: account, 
				to: contractNetwork,
				data: encodedABI,
				value: Web3.utils.numberToHex(amount),
				gasLimit: '0x5208'};

            var payContentId = await ethereum
            .request({
              method: 'eth_sendTransaction',
              params: [
                paramsForEIP1559
              ],
            });

            return payContentId;
          }
    },
	getPlatformFee: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var contentInfo = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.getPlatformFee().encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              contentInfo = iface.decodeFunctionResult("getPlatformFee", contentInfo);
              return contentInfo[0].toBigInt();
          }
    },
    unprotectContent: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

		

        const contractNetwork = networks[parts[0]];

		const networkName = parts[0].split(':')[0];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

		const isEIP1559 = networksEIP1559.includes(networkName);

		if (creatorId == account) {
			var contractPublic = await getContract(Web3,contractNetwork,account);

			if(contractPublic != undefined) {
				const query = contractPublic.methods.unprotectContent(sequenceId);
				const encodedABI = query.encodeABI();
				const gasPrice = Web3.utils.toHex(await Web3.eth.getGasPrice());

				const paramsForEIP1559 = isEIP1559 ? {
					from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208',
					maxPriorityFeePerGas: gasPrice, 
					maxFeePerGas: gasPrice
				} : { from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208'};

				var unprotectContentId = await ethereum
				.request({
				method: 'eth_sendTransaction',
				params: [
					paramsForEIP1559
				],
				});

				return unprotectContentId;
			}
		} else {
			console.error("You are not the owner of this creation");
		}
    },
    protectContent: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

		

        const contractNetwork = networks[parts[0]];

		const networkName = parts[0].split(':')[0];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

		const isEIP1559 = networksEIP1559.includes(networkName);

		if (creatorId == account) {
			var contractPublic = await getContract(Web3,contractNetwork,account);

			if(contractPublic != undefined) {
				const query = contractPublic.methods.protectContent(sequenceId);
				const encodedABI = query.encodeABI();
				const gasPrice = Web3.utils.toHex(await Web3.eth.getGasPrice());

				const paramsForEIP1559 = isEIP1559 ? {
					from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208',
					maxPriorityFeePerGas: gasPrice, 
					maxFeePerGas: gasPrice
				} : { from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208'};

				var protectContentId = await ethereum
				.request({
				method: 'eth_sendTransaction',
				params: [
					paramsForEIP1559
				],
				});

				return protectContentId;
			}
		} else {
			console.error("You are not the owner of this creation");
		}
    },
    changeAccessCost: async function(Web3,amount){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

		

        const contractNetwork = networks[parts[0]];

		const networkName = parts[0].split(':')[0];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

		const isEIP1559 = networksEIP1559.includes(networkName);

		if (creatorId == account) {
			var contractPublic = await getContract(Web3,contractNetwork,account);

			if(contractPublic != undefined) {
				const query = contractPublic.methods.changeAccessCost(sequenceId,amount);
				const encodedABI = query.encodeABI();
				const gasPrice = Web3.utils.toHex(await Web3.eth.getGasPrice());

				const paramsForEIP1559 = isEIP1559 ? {
					from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208',
					maxPriorityFeePerGas: gasPrice, 
					maxFeePerGas: gasPrice
				} : { from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208'};

				var changeAccessCostId = await ethereum
				.request({
				method: 'eth_sendTransaction',
				params: [
					paramsForEIP1559
				],
				});

				return changeAccessCostId;
			}
		} else {
			console.error("You are not the owner of this creation");
		}
    },
    withdrawMoneyFromContent: async function(Web3,amount){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

		

        const contractNetwork = networks[parts[0]];

		const networkName = parts[0].split(':')[0];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

		const isEIP1559 = networksEIP1559.includes(networkName);

		if (creatorId == account) {
			var contractPublic = await getContract(Web3,contractNetwork,account);

			if(contractPublic != undefined) {
				const query = contractPublic.methods.withdrawMoneyFromContent(sequenceId,amount);
				const encodedABI = query.encodeABI();
				const gasPrice = Web3.utils.toHex(await Web3.eth.getGasPrice());

				const paramsForEIP1559 = isEIP1559 ? {
					from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208',
					maxPriorityFeePerGas: gasPrice, 
					maxFeePerGas: gasPrice
				} : { from: account, 
					to: contractNetwork,
					data: encodedABI,
					gasLimit: '0x5208'};

				var withdrawMoneyFromContentId = await ethereum
				.request({
				method: 'eth_sendTransaction',
				params: [
					paramsForEIP1559
				],
				});

				return withdrawMoneyFromContentId;
			}
		} else {
			console.error("You are not the owner of this creation");
		}
    }
}