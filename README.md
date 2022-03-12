# Minting DAPP

## Table of Contents

- [RESOURCES](#resources)
- [Installation](#installation)
- [COMMANDS](#commands)

## RESOURCES

Video: 

🌟 [How To Create An ENTIRE NFT Collection (10,000+) & MINT with ZERO Coding Knowledge v2.0](https://youtu.be/quGdJweadFM)

Base code is from [hashlips_art_engine](https://github.com/HashLips/hashlips_art_engine)

Minting uses [NFTPort](https://nftport.xyz)

Join the Discord server for more help from the community: [codeSTACKr Discord](https://discord.gg/A9CnsVzzkZ)

## INSTALLATION

- Clone this repo or download the latest release zip file.
- Unzip, if needed, and open the folder in VS Code.
- From the terminal run: 
```
 npm install
```
- Copy your image layers into the `layers` folder.
- Use the `src/config.js` file to set up your layers and NFT information.

## COMMANDS

Generate: 
```
$ npm run generate
```
- Generates unique images based on the layers in the `layers` folder.
- WARNING: This command deletes the `build` folder if it exists!

Rarity (Hashlips): 
```
$ npm run rarity
```
- Calculates the rarity of NFT properties based on layer files.

Rarity (codeSTACKr): 
```
$ npm run rarity_md
```

- Calculates the rarity of NFT properties based on metadata.

Rarity Rank (codeSTACKr): 
```
$ npm run rarity_rank
```

- Provides ranking details through a user interface after calculating using the codeSTACKr Rarity command.

Update Info: 
```
$ npm run update_info
```

- Allows you to update `namePrefix`, `description`, and/or `baseUri` for metadata after it was already generated.

Create Generic Metadata: 
```
$ npm run create_generic
```

- Creates generic metadata using the settings from the `src/config.js` file.

Upload Files/Images: 
```
$ npm run upload_files
```

- Uploads all files in the `build/images` folder.

Upload Metadata: 
```
$ npm run upload_metadata
```

- Uploads all `.json` files in both the `build/json` folder and, if it exists, the `build/genericJson` folder as well. 

Deploy Contract: 
```
$ npm run deploy_contract
```

- Deploys a contract to the blockchain using the settings from the `src/config.js` file.

Get Contract: 
```
$ npm run get_contract
```

- Gets the deployed contract details using the transactions hash from the Deploy Contract command. 

Mint: 
```
$ npm run mint
```

- Running this command with no flags will mint all NFTs
- `--start=1`
  - The start flag indicates the edition number to start minting from.
- `--end=100`
  - The end flag indicates the edition number to stop at.
- To start at a number and continue minting all, do not include the end flag.
- Make both flags the same number to only mint a single NFT.
- NOTE: The start and end numbers are inclusive.

Reveal: 
```
$ npm run reveal
```

- Checks the contract owners wallet to see which NFTs have sold and reveals all sold NFTs.
- Including the `--start=1` and/or `--end=100` flags will reveal only the specified edition or range of editions.
- Make both flags the same number to only reveal a single NFT.

Check Transactions: 
```
$ npm run check_txns --dir=minted
```

- Verifies the success of mint or reveal transactions.
- The `--dir` flag is required. Accepted values are `minted` or `revealed`.

Refresh OpenSea: 
```
$ npm run refresh_os --start=1 --end=100
```

- Refreshes the listing for the specified editions on OpenSea.
- Both the `--start` and `--end` flags are required.

## Reference the [video](https://youtu.be/quGdJweadFM) for more details.
