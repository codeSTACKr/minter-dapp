// METAMASK CONNECTION
window.addEventListener("DOMContentLoaded", async () => {
  const onboarding = new MetaMaskOnboarding();
  const onboardButton = document.getElementById("connectWallet");
  let accounts;

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }

  if (window.web3) {
    // Check if User is already connected by retrieving the accounts
    await window.web3.eth.getAccounts().then(async (addr) => {
      accounts = addr;
    });
  }

  const splide = new Splide(".splide", {
    type: "loop",
    arrows: false,
    perMove: 3,
    pagination: false,
    autoplay: true,
    direction: 'ttb',
    height: "calc(100vh - 90px)",
    width: '30vw',
    autoHeight: true,
  });
  splide.mount();

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
      window.address = accounts[0];
      onboardButton.disabled = true;
      onboarding.stopOnboarding();
      window.contract = new web3.eth.Contract(abi, contractAddress);
      loadInfo();
    } else {
      onboardButton.innerText = "Connect MetaMask!";
      onboardButton.onclick = async () => {
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then(function (accts) {
            onboardButton.innerText = `✔ ...${accts[0].slice(-4)}`;
            onboardButton.disabled = true;
            window.address = accts[0];
            accounts = accts;
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
  window.info = await window.contract.methods.getInfo().call();
  const publicMintActive = await contract.methods.mintingActive().call();
  const presaleMintActive = await contract.methods.presaleActive().call();
  const mainHeading = document.getElementById("mainHeading");
  const subHeading = document.getElementById("subHeading");
  const mainText = document.getElementById("mainText");
  const actionButton = document.getElementById("actionButton");
  const mintContainer = document.getElementById("mintContainer");
  const mintButton = document.getElementById("mintButton");
  const spinner = document.getElementById("spinner");

  let startTime = "";
  if (publicMintActive) {
    mainHeading.innerText = h1_public_mint;
    mainText.innerText = p_public_mint;
    actionButton.classList.add('hidden');
    mintButton.innerText = button_public_mint;
    mintContainer.classList.remove('hidden');
  } else if (presaleMintActive) {
    startTime = window.info.runtimeConfig.publicMintStart;
    mainHeading.innerText = h1_presale_mint;
    subHeading.innerText = h2_presale_mint;
    
    try {
      // CHECK IF WHITELISTED
      const merkleData = await fetch(
        `/.netlify/functions/merkleProof/?wallet=${window.address}`
      );
      const merkleJson = await merkleData.json();
      const whitelisted = await contract.methods.isWhitelisted(window.address, merkleJson).call();
      if(!whitelisted) {
        mainText.innerText = p_presale_mint_not_whitelisted;
        actionButton.innerText = button_presale_mint_not_whitelisted;
      } else {
        mainText.innerText = p_presale_mint_whitelisted;
        actionButton.classList.add('hidden');
        mintButton.innerText = button_presale_mint_whitelisted;
        mintContainer.classList.remove('hidden');
      }
    } catch(e) {
      // console.log(e);
      mainText.innerText = p_presale_mint_already_minted;
      actionButton.innerText = button_presale_already_minted;
    }

  } else {
    startTime = window.info.runtimeConfig.presaleMintStart;
    mainHeading.innerText = h1_presale_coming_soon;
    subHeading.innerText = h2_presale_coming_soon;
    mainText.innerText = p_presale_coming_soon;
    actionButton.innerText = button_presale_coming_soon;
  }

  const clockdiv = document.getElementById("countdown");
  clockdiv.setAttribute("data-date", startTime);
  countdown();

  // HIDE SPINNER
  spinner.classList.add('hidden');
  
  // SHOW CARD
  setTimeout(() => {
    const countdownCard = document.querySelector('.countdown');
    countdownCard.classList.add('show-card');
  }, 1000);

  const priceEth = web3.utils.fromWei(info.deploymentConfig.mintPrice, 'ether');
  const pricePerMint = document.getElementById("pricePerMint");
  const maxPerMint = document.getElementById("maxPerMint");
  const totalSupply = document.getElementById("totalSupply");
  const mintInput = document.getElementById("mintInput");
  
  pricePerMint.innerText = `${priceEth} ETH`;
  maxPerMint.innerText = `${info.deploymentConfig.tokensPerMint}`;
  totalSupply.innerText = `${info.deploymentConfig.maxSupply}`;
  mintInput.setAttribute("max", info.deploymentConfig.tokensPerMint);

  // MINT INPUT
  const mintIncrement = document.getElementById("mintIncrement");
  const mintDecrement = document.getElementById("mintDecrement");
  const setQtyMax = document.getElementById("setQtyMax");
  const min = mintInput.attributes.min.value || false;
  const max = mintInput.attributes.max.value || false;
  mintDecrement.onclick = () => {
    let value = parseInt(mintInput.value) - 1 || 1;
    if(!min || value >= min) {
      mintInput.value = value;
      setTotalPrice()
    }
  };
  mintIncrement.onclick = () => {
    let value = parseInt(mintInput.value) + 1 || 1;
    if(!max || value <= max) {
      mintInput.value = value;
      setTotalPrice()
    }
  };
  setQtyMax.onclick = () => {
    mintInput.value = max;
    setTotalPrice()
  };
  mintInput.onchange = () => {
    setTotalPrice()
  };
  mintInput.onkeyup = async (e) => {
    if (e.keyCode === 13) {
      mint();
    }
  };
  mintButton.onclick = mint;
}

function setTotalPrice() {
  const mintInputValue = parseInt(document.getElementById("mintInput").value);
  const totalPrice = document.getElementById("totalPrice");
  const mintButton = document.getElementById("mintButton");
  if(mintInputValue < 1 || mintInputValue > info.deploymentConfig.tokensPerMint) {
    totalPrice.innerText = 'INVALID QUANTITY';
    mintButton.disabled = true;
    return;
  }
  const totalPriceWei = BigInt(info.deploymentConfig.mintPrice) * BigInt(mintInputValue);
  const totalPriceEth = web3.utils.fromWei(totalPriceWei.toString(), 'ether');
  totalPrice.innerText = `${totalPriceEth} ETH`;
  mintButton.disabled = false;
}

async function mint() {
  const mintButton = document.getElementById("mintButton");
  mintButton.disabled = true;
  const spinner = '<div class="dot-elastic"></div><span>Waiting for transaction...</span>';
  mintButton.innerHTML = spinner;

  const amount = parseInt(document.getElementById("mintInput").value);
  const value = BigInt(info.deploymentConfig.mintPrice) * BigInt(amount);
  const publicMintActive = await contract.methods.mintingActive().call();
  const presaleMintActive = await contract.methods.presaleActive().call();

  if (publicMintActive) {
    try {
      const mintTransaction = await contract.methods
        .mint(amount)
        .send({ from: window.address, value: value.toString() });
      if(mintTransaction) {
        if(chain === 'rinkeby') {
          const url = `https://rinkeby.etherscan.io/tx/${mintTransaction.transactionHash}`;
          const mintedContainer = document.querySelector('.minted-container');
          const countdownContainer = document.querySelector('.countdown');
          const mintedTxnBtn = document.getElementById("mintedTxnBtn");
          mintedTxnBtn.href = url;
          countdownContainer.classList.add('hidden');
          mintedContainer.classList.remove('hidden');
        }
        console.log("Minuted successfully!", `Transaction Hash: ${mintTransaction.transactionHash}`);
      } else {
        const mainText = document.getElementById("mainText");
        mainText.innerText = mint_failed;
        mintButton.innerText = button_public_mint;
        mintButton.disabled = false;

        console.log("Failed to mint!");
      }
    } catch(e) {
      const mainText = document.getElementById("mainText");
      mainText.innerText = mint_failed;
      mintButton.innerText = button_public_mint;
      mintButton.disabled = false;

      console.log(e);
    }
  } else if (presaleMintActive) {
    // PRE-SALE MINTING
    const merkleData = await fetch(
      `/.netlify/functions/merkleProof/?wallet=${window.address}`
    );
    const merkleJson = await merkleData.json();
    const presaleMintTransaction = await contract.methods
      .presaleMint(amount, merkleJson)
      .send({ from: window.address, value: value.toString() });
    if(presaleMintTransaction) {
      if(chain === 'rinkeby') {
        const url = `https://rinkeby.etherscan.io/tx/${presaleMintTransaction.transactionHash}`;
        const mintedContainer = document.querySelector('.minted-container');
        const countdownContainer = document.querySelector('.countdown');
        const mintedTxnBtn = document.getElementById("mintedTxnBtn");
        mintedTxnBtn.href = url;
        countdownContainer.classList.add('hidden');
        mintedContainer.classList.remove('hidden');
      }
      console.log("Minuted successfully!", `Transaction Hash: ${presaleMintTransaction.transactionHash}`);
    } else {
      const mainText = document.getElementById("mainText");
      mainText.innerText = mint_failed;
      mintButton.innerText = button_presale_mint_whitelisted;
      mintButton.disabled = false;

      console.log("Failed to mint!");
    }
    console.log(presaleMintTransaction);
  }
}
