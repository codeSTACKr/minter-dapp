require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "CRAZY YOUNGSTERS";
const description = "STAY LOUD AND WEIRD";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const backgroundLayer = { name: "Common Layers/BACKGROUND" }; 
const backHairLayer = { name: "Common Layers/backhair" }; 
const HairLayer = { name: "Common Layers/HAIR" }; 
const eyesLayer = { name: "Common Layers/EYES" }; 
const mouthLayer = { name: "Common Layers/MOUTH" };
const eyebrowsLayer = { name: "Common Layers/EYEBROWS" };
const faceDecorationLayer = { name: "Common Layers/DECORATION" }; 
const clothesLayer = { name: "Common Layers/CLOTHES" };

const LayerOrder = (i) => {
  // console.log(i);
  return [
    backgroundLayer,
    { name: 'skin'+i+'/SPECIES' },
    
    eyebrowsLayer,
    eyesLayer,
    HairLayer,
    faceDecorationLayer,
    mouthLayer,
    { name: 'skin'+i+'/NOSE' },
    { name: 'skin'+i+'/ear' },
    clothesLayer,
];}

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: LayerOrder(1),
  },
  {
    growEditionSizeTo: 200,
    layersOrder: LayerOrder(2),
  },
  {
    growEditionSizeTo: 300,
    layersOrder: LayerOrder(3),
  },
  {
    growEditionSizeTo: 400,
    layersOrder: LayerOrder(4),
  }, 
  {
    growEditionSizeTo: 500,
    layersOrder: LayerOrder(5),
  }, {
    growEditionSizeTo: 600,
    layersOrder: LayerOrder(6),
  }, {
    growEditionSizeTo: 700,
    layersOrder: LayerOrder(7),
  }, 
  {
    growEditionSizeTo: 800,
    layersOrder: LayerOrder(8),
  },
  {
    growEditionSizeTo: 900,
    layersOrder: LayerOrder(9),
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: LayerOrder(10),
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3400,
  height: 3400,
  smoothing: false,
};

const extraMetadata = {
  // external_url: "https://codecats.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'CRAZY YOUNGSTERS';
const CONTRACT_SYMBOL = 'CYS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x1D2814c36b4b2835413890d91202644C49C9F120';
const TREASURY_ADDRESS = '0x1D2814c36b4b2835413890d91202644C49C9F120';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.07; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-29T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-10-28T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 700; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x1D2814c36b4b2835413890d91202644C49C9F120"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "waiting for me to be revealed huh?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeidaawarhyof45zmlfpb3dojikup7wptibodukrejcc5y7xwppgujy"; // Replace with your generic image that will display for all NFTs pre-reveal.

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
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
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
