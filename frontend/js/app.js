// METAMASK CONNECTION
window.addEventListener("DOMContentLoaded", () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById("connect");
  const addressText = document.getElementById("address");
  let accounts;

  const updateButton = async () => {
    if (!MetaMaskOnboarding.isMetaMaskInstalled()) {
      onboardButton.innerText = "Install MetaMask!";
      onboardButton.onclick = () => {
        onboardButton.innerText = "Connecting...";
        onboardButton.disabled = true;
        onboarding.startOnboarding();
      };
    } else if (accounts && accounts.length > 0) {
      onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
      checkOwner(accounts[0]);
    } else {
      onboardButton.innerText = "Connect MetaMask!";
      onboardButton.onclick = async () => {
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then(function (accounts) {
            onboardButton.innerText = `✔ ...${accounts[0].slice(-4)}`;
            onboardButton.disabled = true;
            window.address = accounts[0];
            addressText.innerText = accounts[0];
            window.web3 = new Web3(window.ethereum);
            window.contract = new web3.eth.Contract(abi, contractAddress);

            loadInfo();
          });
      };
    }
  };

  updateButton();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    window.ethereum.on("accountsChanged", (newAccounts) => {
      accounts = newAccounts;
      updateButton();
    });
  }
});

async function loadInfo() {
  // Fetches information about the contract like mint price

  window.info = await window.contract.methods.getInfo().call();
  document.getElementById(
    "price"
  ).innerText = `${info.deploymentConfig.mintPrice} wei`;
  document.getElementById(
    "price"
  ).href = `https://etherscan.io/unitconverter?wei=${info.deploymentConfig.mintPrice}`;
  document.getElementById("maxAmount").innerText =
    info.deploymentConfig.tokensPerMint;
}

async function mint() {
  const amount = parseInt(document.getElementById("amount").value);
  const value = BigInt(info.deploymentConfig.mintPrice) * BigInt(amount);

  const publicMintActive = await contract.methods.mintingActive().call();
  const presaleMintActive = await contract.methods.presaleActive().call();
  const presaleMerkleRoot = info.runtimeConfig.presaleMerkleRoot.slice(2);
  console.log(presaleMerkleRoot);

  if(presaleMintActive) {
    const whitelisted = await contract.methods.isWhitelisted(window.address, presaleMerkleRoot).call();
    if(!whitelisted) {
      console.log("You are not whitelisted for presale minting!");
      return;
    } else {
      console.log("You are whitelisted for presale minting!");
    }
  }
  console.log(publicMintActive, presaleMintActive);
  // Calls the contract ABI to mint NFTs
  // await contract.methods
  //   .mint(amount)
  //   .send({ from: window.address, value: value.toString() });
}
