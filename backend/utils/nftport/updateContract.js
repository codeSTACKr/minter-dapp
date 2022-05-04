(async () => {
  const fs = require("fs");
  const basePath = process.cwd();
  const yesno = require("yesno");
  const { program } = require("commander");

  program.option("-u, --update <field>", "Field to update");

  program.parse(process.argv);

  const options = program.opts();

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
    PRESALE_WHITELISTED_ADDRESSES,
  } = require(`${basePath}/src/config.js`);

  const contract = {
    chain: CHAIN.toLowerCase(),
    contract_address: CONTRACT_ADDRESS,
  };
  let updateValue = "";

  const getWhiteList = async () => {
    // create promise
    return new Promise(async (resolve, reject) => {
      const url = `https://api.nftport.xyz/v0/me/contracts/collections?chain=${CHAIN.toLowerCase()}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetchNoRetry(url, options);
      if (response.response === "OK") {
        const contractInfo = response.contracts.filter(
          (contract) =>
            contract.address.toLowerCase() === CONTRACT_ADDRESS.toLowerCase()
        );
        const presaleWhitelistedAddresses =
          contractInfo[0]?.presale_whitelisted_addresses || [];
        resolve(presaleWhitelistedAddresses);
      } else {
        console.log(`Whitelist fetch failed!`);
        reject(response);
      }
    });
  };

  switch (options.update) {
    case "public_mint_start_date":
      contract.public_mint_start_date = PUBLIC_MINT_START_DATE;
      updateValue = PUBLIC_MINT_START_DATE;
      break;
    case "presale_mint_start_date":
      contract.presale_mint_start_date = PRESALE_MINT_START_DATE;
      updateValue = PRESALE_MINT_START_DATE;
      break;
    case "presale_whitelisted_addresses":
      const addresses_add = PRESALE_WHITELISTED_ADDRESSES.map((address) =>
        address.toLowerCase()
      );
      const existingAddresses = await getWhiteList();
      contract.presale_whitelisted_addresses = [
        ...existingAddresses,
        ...addresses_add,
      ];
      updateValue = `include ${PRESALE_WHITELISTED_ADDRESSES}`;
      break;
    case "presale_whitelisted_addresses_remove":
      const addresses_remove = PRESALE_WHITELISTED_ADDRESSES.map((address) =>
        address.toLowerCase()
      );
      const existingAddressesList = await getWhiteList();
      const updatedAddresses = existingAddressesList.filter((address) => !addresses_remove.includes(address));
      contract.presale_whitelisted_addresses = updatedAddresses;
      updateValue = `remove ${PRESALE_WHITELISTED_ADDRESSES}`;
      break;
    case "royalty_share":
      contract.royalty_share = ROYALTY_SHARE;
      updateValue = ROYALTY_SHARE;
      break;
    case "royalty_address":
      contract.royalty_address = ROYALTY_ADDRESS;
      updateValue = ROYALTY_ADDRESS;
      break;
    case "base_uri":
      if (!BASE_URI) {
        try {
          let jsonFile = fs.readFileSync(
            `${basePath}/build/ipfsMetas/_ipfsMetasResponse.json`
          );
          let metaData = JSON.parse(jsonFile);
          if (metaData.response === "OK") {
            BASE_URI = metaData.metadata_directory_ipfs_uri;
          } else {
            console.log(
              'There is an issue with the metadata upload. Please check the /build/_ipfsMetas/_ipfsMetasResponse.json file for more information. Running "npm run upload_metadata" may fix this issue.'
            );
          }
        } catch (err) {
          console.log(
            `/build/_ipfsMetasGeneric/_ipfsMetasResponse.json file not found. Run "npm run upload_metadata" first.`
          );
          process.exit(0);
        }
      }
      contract.base_uri = BASE_URI;
      updateValue = BASE_URI;
      break;
    case "prereveal_token_uri":
      if (!PREREVEAL_TOKEN_URI) {
        try {
          let jsonFile = fs.readFileSync(
            `${basePath}/build/ipfsMetasGeneric/_ipfsMetasResponse.json`
          );
          let metaData = JSON.parse(jsonFile);
          if (metaData.response === "OK") {
            PREREVEAL_TOKEN_URI = metaData.metadata_uri;
          } else {
            console.log(
              'There is an issue with the metadata upload. Please check the /build/_ipfsMetasGeneric/_ipfsMetasResponse.json file for more information. Running "npm run upload_metadata" may fix this issue.'
            );
          }
        } catch (err) {
          console.log(
            `/build/_ipfsMetasGeneric/_ipfsMetasResponse.json file not found. Run "npm run upload_metadata" first.`
          );
          console.log(`Catch: ${err}`);
          process.exit(0);
        }
      }
      contract.prereveal_token_uri = PREREVEAL_TOKEN_URI;
      updateValue = PREREVEAL_TOKEN_URI;
      break;
    default:
      console.log("Invalid update statement. Exiting...");
      process.exit(0);
  }

  const updateContract = async () => {
    const ok = await yesno({
      question: `Updating ${options.update} to ${updateValue}, correct? (y/n):`,
      default: null,
    });

    if (!ok) {
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
      if (response.response === "OK") {
        console.log(`Contract Updated!`);
      } else {
        console.log(`Contract update failed!`);
      }
    } catch (error) {
      console.log(`CATCH: Contract update failed!`, `ERROR: ${error}`);
    }
  };

  updateContract();
})();
