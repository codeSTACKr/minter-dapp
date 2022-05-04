const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const yesno = require('yesno');

const {
  fetchNoRetry,
} = require(`${basePath}/utils/functions/fetchWithRetry.js`);
let {
  CHAIN,
  GENERIC,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_MINT_START_DATE,
  PRESALE_WHITELISTED_ADDRESSES
} = require(`${basePath}/src/config.js`);

const deployContract = async () => {
  const ok = await yesno({
    question: `Is all REQUIRED contract information correct in config.js? (y/n):`,
    default: null,
  });
  
  if(!ok) {
    console.log("Exiting...");
    process.exit(0);
  }

  if(GENERIC) {
    try {
      let jsonFile = fs.readFileSync(`${basePath}/build/ipfsMetasGeneric/_ipfsMetasResponse.json`);
      let metaData = JSON.parse(jsonFile);
      if(metaData.response === "OK") {
        if(!PREREVEAL_TOKEN_URI) {
          PREREVEAL_TOKEN_URI = metaData.metadata_uri;
        }
      } else {
        console.log('There is an issue with the metadata upload. Please check the /build/_ipfsMetasGeneric/_ipfsMetasResponse.json file for more information. Running "npm run upload_metadata" may fix this issue.');
      }
    } catch (err) {
      console.log(`/build/_ipfsMetasGeneric/_ipfsMetasResponse.json file not found. Run "npm run upload_metadata" first.`);
      console.log(`Catch: ${err}`);
      process.exit(0);
    }
  } else {
    try {
      let jsonFile = fs.readFileSync(`${basePath}/build/ipfsMetas/_ipfsMetasResponse.json`);
      let metaData = JSON.parse(jsonFile);
      if(metaData.response === "OK") {
        if(!BASE_URI) {
          BASE_URI = metaData.metadata_directory_ipfs_uri;
        }
      } else {
        console.log('There is an issue with the metadata upload. Please check the /build/_ipfsMetas/_ipfsMetasResponse.json file for more information. Running "npm run upload_metadata" may fix this issue.');
      }
    } catch (err) {
      console.log(`/build/_ipfsMetasGeneric/_ipfsMetasResponse.json file not found. Run "npm run upload_metadata" first.`);
      process.exit(0);
    }
  }

  if (!fs.existsSync(path.join(`${basePath}/build`, "/contract"))) {
    fs.mkdirSync(path.join(`${basePath}/build`, "contract"));
  }

  try {
    const url = `https://api.nftport.xyz/v0/contracts/collections`;
    const contract = {
      chain: CHAIN.toLowerCase(),
      name: CONTRACT_NAME,
      symbol: CONTRACT_SYMBOL,
      owner_address: OWNER_ADDRESS,
      metadata_updatable: METADATA_UPDATABLE,
      royalties_share: ROYALTY_SHARE,
      royalties_address: ROYALTY_ADDRESS,
      max_supply: MAX_SUPPLY,
      mint_price: MINT_PRICE,
      tokens_per_mint: TOKENS_PER_MINT,
      treasury_address: TREASURY_ADDRESS,
      public_mint_start_date: PUBLIC_MINT_START_DATE,
      presale_mint_start_date: PRESALE_MINT_START_DATE,
      base_uri: BASE_URI,
      prereveal_token_uri: PREREVEAL_TOKEN_URI,
      presale_whitelisted_addresses: PRESALE_WHITELISTED_ADDRESSES
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    };
    const response = await fetchNoRetry(url, options);
    fs.writeFileSync(`${basePath}/build/contract/_deployContractResponse.json`, JSON.stringify(response, null, 2));
    if(response.response === "OK") {
      console.log(`Contract deployment started.`);
    } else {
      console.log(`Contract deployment failed`);
    }
    console.log(`Check /build/contract/_deployContractResponse.json for more information. Run "npm run get_contract" to get the contract details.`);
  } catch (error) {
    console.log(`CATCH: Contract deployment failed`, `ERROR: ${error}`);
  }
};

deployContract();
