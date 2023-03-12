import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const Count = await ethers.getContractFactory("Counter");
  const count = await Count.deploy();

  await count.deployed();

  console.log(
    `Count deployed to ${count.address} by ${deployer.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
