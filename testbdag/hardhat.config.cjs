require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { PRIVATE_KEY, RPC_URL, CHAIN_ID } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    blockdag: {
      url: RPC_URL,
      chainId: parseInt(CHAIN_ID),
      accounts: [PRIVATE_KEY],
    },
  },
};