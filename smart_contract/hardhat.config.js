require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = import.meta.env.VITE_GOERLI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli : {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [
        GOERLI_PRIVATE_KEY,
      ],
    },
  },
};
