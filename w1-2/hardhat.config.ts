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
};

export default config;
