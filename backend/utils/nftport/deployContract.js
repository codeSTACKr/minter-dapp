const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const yesno = require('yesno');

const {
  fetchWithRetry,
} = require(`${basePath}/utils/functions/fetchWithRetry.js`);
const {
  CHAIN,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_MINT_START_DATE
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

  if (!fs.existsSync(path.join(`${basePath}/build`, "/contract"))) {
    fs.mkdirSync(path.join(`${basePath}/build`, "contract"));
  }

  try {
    const url = `https://api.nftport.xyz/v0/contracts`;
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
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    };
    const response = await fetchWithRetry(url, options);
    fs.writeFileSync(`${basePath}/build/contract/_deployContractResponse.json`, JSON.stringify(response, null, 2));
    if(response.response === "OK") {
      console.log(`Contract ${CONTRACT_NAME} deployment started.`);
    } else {
      console.log(`Contract ${CONTRACT_NAME} deployment failed`);
    }
  } catch (error) {
    console.log(`CATCH: Contract ${CONTRACT_NAME} deployment failed`, `ERROR: ${error}`);
  }
};

deployContract();
