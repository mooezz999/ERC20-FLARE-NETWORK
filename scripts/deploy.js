// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require("dotenv").config()
const hre = require("hardhat");

async function main() {
  const OceanToken = await hre.ethers.getContractFactory("OceanToken");
  const oceanToken = await OceanToken.deploy(100000000, 50);

  await oceanToken.deployed();

  console.log("Ocean token deployed: ", oceanToken.address);
  

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
