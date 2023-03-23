const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x538f3425161aE29c8859c7129e8c753D75EcBbEC");

  await faucet.deployed();

  console.log("Faucet Contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
