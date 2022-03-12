const FormData = require("form-data");
const path = require("path");
const basePath = process.cwd();
const fs = require("fs");

const { fetchWithRetry } = require(`${basePath}/utils/functions/fetchWithRetry.js`);

const { GENERIC } = require(`${basePath}/src/config.js`);

const regex = new RegExp("^([0-9]+).json$");
let genericUploaded = false;

if (!fs.existsSync(path.join(`${basePath}/build`, "/ipfsMetas"))) {
  fs.mkdirSync(path.join(`${basePath}/build`, "ipfsMetas"));
}

let readDir = `${basePath}/build/json`;
let writeDir = `${basePath}/build/ipfsMetas`;

async function main() {
  console.log(`Starting upload of ${GENERIC ? genericUploaded ? 'generic ' : '' : ''}metadata...`);
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
    console.log(`${GENERIC ? genericUploaded ? 'Generic m' : 'M' : 'M'}etadata uploaded!`);
  } catch (err) {
    console.log(`Catch: ${err}`);
  }

  // Upload Generic Metadata if GENERIC is true
  if (GENERIC && !genericUploaded) {
    if (!fs.existsSync(path.join(`${basePath}/build`, "/ipfsMetasGeneric"))) {
      fs.mkdirSync(path.join(`${basePath}/build`, "ipfsMetasGeneric"));
    }
    readDir = `${basePath}/build/genericJson`;
    writeDir = `${basePath}/build/ipfsMetasGeneric`;
    
    genericUploaded = true;
    main();
  }
}

main();
