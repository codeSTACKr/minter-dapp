const FormData = require("form-data");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");

const { fetchWithRetry } = require(`${basePath}/utils/functions/fetchWithRetry.js`);

const { GENERIC } = require(`${basePath}/src/config.js`);

const regex = new RegExp("^([0-9]+).json$");

if (!fs.existsSync(path.join(`${basePath}/build`, "/ipfsMetas"))) {
  fs.mkdirSync(path.join(`${basePath}/build`, "ipfsMetas"));
}

let readDir = `${basePath}/build/json`;
let writeDir = `${basePath}/build/ipfsMetas`;

async function main() {
  console.log(`Starting upload of metadata...`);
  const files = fs.readdirSync(readDir);
  files.sort(function (a, b) {
    return a.split(".")[0] - b.split(".")[0];
  });
  const formData = new FormData();

  for (const file of files) {
    if (regex.test(file)) {
      const fileStream = fs.createReadStream(`${readDir}/${file}`);
      formData.append("metadata_files", fileStream);
    }
  }

  try {
    const url = "https://api.nftport.xyz/v0/metadata/directory";
    const options = {
      method: "POST",
      headers: {},
      body: formData,
    };
    const response = await fetchWithRetry(url, options);
    fs.writeFileSync(
      `${writeDir}/_ipfsMetasResponse.json`,
      JSON.stringify(response, null, 2)
    );
    console.log(`Metadata uploaded!`);
  } catch (err) {
    console.log(`Catch: ${err}`);
  }

  // Upload Generic Metadata if GENERIC is true
  if (GENERIC) {
    console.log(`Starting upload of generic metadata...`);
    if (!fs.existsSync(path.join(`${basePath}/build`, "/ipfsMetasGeneric"))) {
      fs.mkdirSync(path.join(`${basePath}/build`, "ipfsMetasGeneric"));
    }
    readDir = `${basePath}/build/genericJson`;
    writeDir = `${basePath}/build/ipfsMetasGeneric`;

    let jsonFile = fs.readFileSync(`${readDir}/_metadata.json`);
    let metaData = JSON.parse(jsonFile);
    const uploadedMeta = `${writeDir}/_ipfsMetasResponse.json`;

    const genericObject = {
      "name": metaData.name,
      "description": metaData.description,
      "file_url": metaData.image,
      "external_url": metaData?.external_url,
      "custom_fields": {
        "date": metaData.date,
        "compiler": "HashLips Art Engine - codeSTACKr Modified"
      }
    }

    try {
      const url = "https://api.nftport.xyz/v0/metadata";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genericObject),
      };
      const response = await fetchWithRetry(url, options);
      fs.writeFileSync(uploadedMeta, JSON.stringify(response, null, 2));
      console.log(`Generic metadata uploaded!`);
    } catch (err) {
      console.log(`Catch: ${err}`);
    }
  }
}

main();
