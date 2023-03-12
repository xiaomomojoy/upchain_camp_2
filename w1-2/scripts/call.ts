import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const Count = await ethers.getContractFactory("Counter");
  const contract = await Count.attach(process.env.contract_address);

  const result = await contract.add(5);
  console.log("Transaction hash:", result.hash);
  const countNum = await contract.counter();
  console.log("count result:", countNum);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
