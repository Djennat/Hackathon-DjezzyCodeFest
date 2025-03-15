require("@nomicfoundation/hardhat-toolbox");

module.exports = {
 solidity: {
  compilers: [
    { version: "0.8.19" },
    { version: "0.8.20" },
    { version: "0.8.28" }
  ]
},
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/ede38d3d149f4c57aa97c0778173b873",
      accounts: ["1f9d705404537e37e07ac30713d3218d9f6a31888811cca2252d6ba0f0fe6750"] 
    }
  }
};