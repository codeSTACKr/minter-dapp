const path = require("path");
const basePath = process.cwd();
const fs = require("fs");
const buildDir = path.join(basePath, "/build");

const {
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
} = require(`${basePath}/src/config.js`);

if (!fs.existsSync(path.join(buildDir, "/genericJson"))) {
  fs.mkdirSync(path.join(buildDir, "/genericJson"));
}

console.log("Starting generic metadata creation.");

const genericObject = {
  "name": GENERIC_TITLE,
  "description": GENERIC_DESCRIPTION,
  "image": GENERIC_IMAGE,
  "external_url": "https://codecats.xyz",
  "date": 1647039293429,
  "compiler": "HashLips Art Engine - codeSTACKr Modified"
}

fs.writeFileSync(
  `${buildDir}/genericJson/_metadata.json`,
  JSON.stringify(genericObject, null, 2)
);

console.log("Generic metadata created!");