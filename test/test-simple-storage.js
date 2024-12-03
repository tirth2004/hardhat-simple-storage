const {ethers} = require("hardhat")
const {expect, assert } = require("chai")

describe("SimpleStorage", function() {
    let SimpleStorageFactory, simpleStorage;
    this.beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        // console.log("Deploying contract...")
        simpleStorage = await SimpleStorageFactory.deploy();
        await simpleStorage.waitForDeployment(); // Required for v6+
        // console.log(`Deployed contract to: ${simpleStorage.target}`);
    })

    it("Initial value should be zero", async function (){
        const curValue = await simpleStorage.getFavouriteNumber();
        const expectedValue = 0;
        
        assert.equal(curValue.toString(), expectedValue)
    })

    it("get fav number should return new number after changing the stored number", async function () {
        const newFavNumber = 69;
        const tx = await simpleStorage.store(newFavNumber);
        await tx.wait(1);
        
        const curValue = await simpleStorage.getFavouriteNumber();
        assert.equal(curValue.toString(), newFavNumber);
    })
})