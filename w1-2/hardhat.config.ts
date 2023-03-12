import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import env from "dotenv";

env.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "polygon_mumbai",
  networks: {
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.private_key]
    }
  },
  etherscan: {
    apiKey:  'RJM2T4H171EFAC9CWQCSWQ63KG1VRT2XV5'
  }
};

export default config;
