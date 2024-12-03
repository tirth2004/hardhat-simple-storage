require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
require("@nomicfoundation/hardhat-ethers");
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/8dngz1i7tnf-Y7CxRSzxtrNx5su_-Jk1`,
      accounts: ["8974e1f6067a2db4fa656c1064acd43d09e21c4208e3f5c69b43d6a6dcd80e3d"]
    }, 
    hardhatnode: {
      url: " http://127.0.0.1:8545/",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    } 
  },
  gasReporter :{
    enabled: true,
  }
};
