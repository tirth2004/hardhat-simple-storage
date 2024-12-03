const { ethers } = require("hardhat");

const hre = require("hardhat");
console.log("Bruh");
async function main() {
  console.log("Hey");
  // Load the deployed address and contract ABI
  const abi = require("../artifacts/contracts/SimpleStorage.sol/SimpleStorage.json").abi
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//   console.log( await ethers.getSigners())
  const SimpleContract = await ethers.getContractAt(abi, address);
  

    
    const simpleStorage = await SimpleContract.attach(address);
    

//   // Interact with the contract
  let currentValue = await simpleStorage.getFavouriteNumber(); // Example method
  console.log("Current Value:", currentValue.toString());

  const tx = await simpleStorage.store(100); // Example method to store a value
  await tx.wait();
  console.log("Stored new value successfully!");
  currentValue = await simpleStorage.getFavouriteNumber();
  console.log("Current Value:", currentValue.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});