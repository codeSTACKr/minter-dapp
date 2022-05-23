require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "GrouchyGorillas";
const description = "The GrouchyGorillas have just landed on the and have made themselves a home right on the Polygon blockchain!";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "1 Background" },
      { name: "2 GrouchyGorilla" },
      { name: "3 Tail" },
      { name: "4 Hair" },
      { name: "5 Eyes" },
      { name: "6 Belt" },
      { name: "7 Shoes" },
      { name: "8 Accessories" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 310,
  height: 420,
  smoothing: false,
};
const extraMetadata = {
  external_url: "https://ipfs.io/ipfs/QmU62Vv2pFMjyXAUYDpkcUWNAQgpRYuqLRoDMhWLdpGD3c", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'GrouchyGorillas';
const CONTRACT_SYMBOL = 'GrG';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xcc6CE1caF8D42ad3bf041f377f1F2C2FbC202b33';
const TREASURY_ADDRESS = '0xcc6CE1caF8D42ad3bf041f377f1F2C2FbC202b33';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 100; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-06-01T00:00:00+02:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-05-23T00:00:00+02:00l"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 0; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xcc6CE1caF8D42ad3bf041f377f1F2C2FbC202b33"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xcc6CE1caF8D42ad3bf041f377f1F2C2FbC202b33"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "The GrouchyGorillas have just landed on the and have made themselves a home right on the Polygon blockchain!"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmSDSGLxiyZuYoHAjGMUYp73eiApZoAQpCdUGCLRvxdV17?filename=Blue.png, https://ipfs.io/ipfs/QmepNFkLdqpf1AZyb2Spq1VQ39BiAEGtT4vbnnTUSGvrJt?filename=Green.png, https://ipfs.io/ipfs/QmTYXSv2wZUstWtgGj54fDuxhDz9eBHHrUtKDh61RAGUgH?filename=Orange.png, https://ipfs.io/ipfs/QmUaWX3esakibKuJ4xP37Cv1A5i3tdPGJCD6CYcjkEb6BS?filename=Purple.png, https://ipfs.io/ipfs/QmeVHBgxUL5VbzdML21UifKU5WJ7pMvC9pSoRCvED9QvyG?filename=Red.png"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "GrG",
  seller_fee_basis_points: 0, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://ipfs.io/ipfs/QmU62Vv2pFMjyXAUYDpkcUWNAQgpRYuqLRoDMhWLdpGD3c",
  creators: [
    {
      address: "0xcc6CE1caF8D42ad3bf041f377f1F2C2FbC202b33",
      share: 0,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
