// https://eth-mainnet.g.alchemy.com/v2/OHzR8b83FBOpQ8jnE9CcO1WinNizRiQe
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "OHzR8b83FBOpQ8jnE9CcO1WinNizRiQe";
const GOERLI_PRIVATE_KEY = "da13860b4c62cf9d447db319aac5d2d859a2ac7f75fd4080a347c7aa31c02133";

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
