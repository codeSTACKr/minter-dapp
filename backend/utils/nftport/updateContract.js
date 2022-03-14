const basePath = process.cwd();
const yesno = require('yesno');
let [UPDATE] = process.argv.slice(2);

const {
  fetchNoRetry,
} = require(`${basePath}/utils/functions/fetchWithRetry.js`);
let {
  CHAIN,
  PUBLIC_MINT_START_DATE,
  PRESALE_MINT_START_DATE,
  CONTRACT_ADDRESS,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  PRESALE_WHITELISTED_ADDRESSES
} = require(`${basePath}/src/config.js`);

const contract = {
  chain: CHAIN.toLowerCase(),
  contract_address: CONTRACT_ADDRESS,
};
let updateValue = '';

switch (UPDATE) {
  case "public_mint_start_date":
    contract.public_mint_start_date = PUBLIC_MINT_START_DATE;
    updateValue = PUBLIC_MINT_START_DATE;
    break;
  case "presale_mint_start_date":
    contract.presale_mint_start_date = PRESALE_MINT_START_DATE;
    updateValue = PRESALE_MINT_START_DATE;
    break;
  case "presale_whitelisted_addresses":
    contract.presale_whitelisted_addresses = PRESALE_WHITELISTED_ADDRESSES;
    updateValue = PRESALE_WHITELISTED_ADDRESSES;
    break;
  case "royalty_share":
    contract.royalty_share = ROYALTY_SHARE;
    updateValue = ROYALTY_SHARE;
    break;
  case "royalty_address":
    contract.royalty_address = ROYALTY_ADDRESS;
    updateValue = ROYALTY_ADDRESS;
    break;
  case "contract_address":
    contract.contract_address = CONTRACT_ADDRESS;
    updateValue = CONTRACT_ADDRESS;
    break;
  case "base_uri":
    contract.base_uri = BASE_URI;
    updateValue = BASE_URI;
    break;
  case "prereveal_token_uri":
    contract.prereveal_token_uri = PREREVEAL_TOKEN_URI;
    updateValue = PREREVEAL_TOKEN_URI;
    break;
  default:
    console.log("Invalid update statement. Exiting...");
    process.exit(0);
}

const updateContract = async () => {
  const ok = await yesno({
    question: `Updating ${UPDATE} to ${updateValue}, correct? (y/n):`,
    default: null,
  });
  
  if(!ok) {
    console.log("Exiting...");
    process.exit(0);
  }

  try {
    const url = `https://api.nftport.xyz/v0/contracts/collections`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contract),
    };
    const response = await fetchNoRetry(url, options);
    if(response.response === "OK") {
      console.log(`Contract Updated!`);
    } else {
      console.log(`Contract update failed!`);
    }
  } catch (error) {
    console.log(`CATCH: Contract update failed!`, `ERROR: ${error}`);
  }
};

updateContract();
