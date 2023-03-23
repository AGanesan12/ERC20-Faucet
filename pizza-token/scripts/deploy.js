const hre = require("hardhat");

async function main() {
  const PizzaToken = await hre.ethers.getContractFactory("PizzaToken");
  const pizzaToken = await PizzaToken.deploy(100000000, 50);

  await pizzaToken.deployed();

  console.log("Pizza Token deployed: ", pizzaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
