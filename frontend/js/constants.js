const contractAddress = "0xb69bfae6B4b72f99980F4fcc312cAf45B0F50242"; //Replace with your own contract address
const chain = 'rinkeby'; // rinkeby or polygon

// Force GIT Sync
const forceSync = "Force Sync = 4";

// English labels
const welcome_h1 = "Welcome to the Emo Kids Club NFT Project!!";
const welcome_h2 = "Connect to MetaMask to Get Started";
const welcome_p = 'The Emo Kids Club  NFT Project is a decentralized initiative to promote the Emo Culture where people can collaborate and have fun!!';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_whitelisted_alert = "(CAUTION: only one purchase allowed. Make sure to select the right amount)";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Public minting is now open! 🎉";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your Special NFT";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Community";
const button_public_mint = "Mint Your NFT";
const mint_failed = "Minting failed. 😢 Please try again.";
// custom constants
const header_menu_about = "About";
const header_menu_roadmap = "Roadmap";
const header_menu_team = "Team";
const header_menu_faq = "FAQ";
const content_menu_about = "The Emo Kids Club NFT Project is a decentralized initiative to promote the emo culture #EmoIsBack!!";
const content_menu_roadmap = "Coming Soon";
const content_menu_team = "Coming Soon";
const content_menu_faq = "Coming Soon";
const install_metamask = "Install MetaMask!";
const connecting = "Connecting...";
const connect_metamask = "Connect MetaMask!";
const invalid_quantity = "INVALID QUANTITY";
const days = "days";
const hours = "hours";
const minutes = "min";
const seconds = "sec";
const h2_mintedExclamation = "Minted!";
const p_transaction_link = "Here's your trasaction link:";
const button_view_transaction = "View Transaction";
const p_view_collection = "View it in the collection:";
const button_view_collection = "View Collection";
const h3_Supply = "Supply";
const h3_PricePerMint = "Price Per Mint";
const h3_MaxPerTxn = "Max per Transaction";
const set_QtyMaxText = "SET MAX";
const p_verified_contract_address = "Verified Smart Contract Address: ";
const faq_title_1 = "What is an NFT?";
const faq_description_1 = "NFT stands for \"Non-Fungible Token\". Non-Fungible means that the item is unique and can't be modified or replaced. Therefore, an NFT is a digital item that is original and unique that resides in the blockchain that has an owner.";
const faq_title_2 = "What is a blockchain?";
const faq_description_2 = "It's a large database distributed in a network of independent computers through blocks of data. And these blocks are chained/connected together, therefore the name Blockchain. The data is transparrent and available to anyone. The data can't be manipoulated. Currently, this is the safest way to make transacations in internet.";
const faq_title_3 = "What blockchain do the Emo Kids Club NFT reside? ";
const faq_description_3 = "Polygon";
const faq_title_4 = "Why 4.319 NFTs?";
const faq_description_4 = "This number represents the sum of the Emo Day in Brazil 24/07 and the Emo International Day 19/12.";
const faq_title_5 = "What is MetaMask?";
const faq_description_5 = "MetaMask is a crypto wallet/software that holds your NFT after it's minted/bought.";
const faq_title_6 = "What is the whitelist?";
const faq_description_6 = "It's an exclusive access that allows oyou to buy/mint NFTs before the public sale.";
const faq_title_7 = "How to get the whitelist?";
const faq_description_7 = "Take a look at the Discord channel  📝how-to-be-old-school ";
const faq_title_8 = "What is minting?";
const faq_description_8 = "Minting is the process of creating/buying the NFT and putting it in the blockchain.";
const faq_title_9 = "Why should I mint in the whitelist?";
const faq_description_9 = "You will be allowed to buy up to 3 NFTs in the pre-sale with less competition from other buyers. 🔺 EXTRA CAUTION: 🔺 only 1 transacation is permitted in the pre-sale buy. Make sure to choose the correct amount of NFTs.";
const faq_title_10 = "What are the benefits of belonging to the Emo Kids Club NFT? ";
const faq_description_10 = "Coming Soon!";
const faq_title_11 = "How much is the mint?";
const faq_description_11 = "Coming Soon!";
const faq_title_12 = "What marketplace will the collection be listed?";
const faq_description_12 = "OpenSea";
const faq_title_13 = "When is the mint/pre-sale?";
const faq_description_13 = "Coming Soon!";


// Portuguese labels
const welcome_h1_pt = "Bem-vindo ao projeto NFT Emo Kids Club!!";
const welcome_h2_pt = "Conecte a Metamask para começar.";
const welcome_p_pt = 'O projeto NFT  Emo Kids Club é uma iniciativa decentralizada afim de promover a cultura Emo, onde as pessoas possam colaborar e se divertir!!';
const h1_presale_coming_soon_pt = "NFT Drop em breve!!";
const h1_presale_mint_pt = "WhiteList Minting Aberto!!";
const h1_public_mint_pt = "Minting Público Aberto!!";
const h2_presale_coming_soon_pt = "Contagem regressiva WhiteList Minting";
const h2_presale_mint_pt = "Contagem Regressiva Minting Público";
const p_presale_coming_soon_pt = "Estamos trabalhando com carinho e dedicação no lançamento desta coleção NFT. Fique ligado para mais novidades!!";
const p_presale_mint_not_whitelisted_pt = "Você não está na whitelist de pré-venda... 😢";
const p_presale_mint_whitelisted_pt = "Você está na whitelist de pré-venda! 🎉";
const p_presale_mint_whitelisted_alert_pt = "(ATENÇÃO: apenas uma compra permitida. Escolha a quantidade correta!)";
const p_presale_mint_already_minted_pt = "Você ja mintou o seu NFT, obrigado!! 🎉";
const p_public_mint_pt = "Não precisa de whitelist, Minting público está aberto! 🎉";
const button_presale_coming_soon_pt = "Garanta a sua  Whitelist";
const button_presale_mint_whitelisted_pt = "Mint o seu NFT especial";
const button_presale_mint_not_whitelisted_pt = "Garanta a sua  Whitelist";
const button_presale_already_minted_pt = "Junte-se a comunidade";
const button_public_mint_pt = "Mint o seu  NFT";
const mint_failed_pt = "O Minting falhou. 😢 Por favor, tente novamente.";
// custom constants
const header_menu_about_pt = "Sobre";
const header_menu_roadmap_pt = "Roadmap";
const header_menu_team_pt = "Time";
const header_menu_faq_pt = "FAQ";
const content_menu_about_pt = 'O projeto NFT  Emo Kids Club é uma iniciativa decentralizada afim de promover a cultura Emo, onde as pessoas possam colaborar e se divertir #EmoIsBack!!'
const content_menu_roadmap_pt = "Em Breve";
const content_menu_team_pt = "Em Breve";
const content_menu_faq_pt = "Em Breve";
const install_metamask_pt = "Instalar MetaMask!";
const connecting_pt = "Conectando...";
const connect_metamask_pt = "Conectar MetaMask!";
const invalid_quantity_pt = "QUANTIDADE INVÁLIDA";
const days_pt = "dias";
const hours_pt = "horas";
const minutes_pt = "min";
const seconds_pt = "seg";
const h2_mintedExclamation_pt = "Mintado!";
const p_transaction_link_pt = "Aqui está o link da transação:";
const button_view_transaction_pt = "Ver Transação";
const p_view_collection_pt = "Ver NFT na Coleção:";
const button_view_collection_pt = "Ver Coleção";
const h3_Supply_pt = "Oferta";
const h3_PricePerMint_pt = "Preço Por Mint";
const h3_MaxPerTxn_pt = "Qtd Max por Transação";
const set_QtyMaxText_pt = "Quantidade Máxima";
const p_verified_contract_address_pt = "Endereço do Smart Contract: ";
// FAQ
const faq_title_1_pt = "O que é um NFT?";
const faq_description_1_pt = "NFT significa \"Non-Fungible Token\". Não Fungível, quer dizer que o item é unico, não pode ser modificado ou substituído. Então, um NFT é um item digital original e único que reside na blockchain que possui um proprietário.";
const faq_title_2_pt = "O que é uma blockchain?";
const faq_description_2_pt = "É um grande banco de dados distribuído em uma rede de computadores independentes através de blocos de dados. E esses blocos estão ligados (\"chained\"), por isso o nome Blockchain. Os dados são transparentes e disponivéis para qualquer pessoa. Os dados não podem ser manipulados. É a maneira mais segura de fazer transações na internet no momento.";
const faq_title_3_pt = "Qual blockchain reside os NFTs do Emo Kids Club?";
const faq_description_3_pt = "Polygon";
const faq_title_4_pt = "Por que 4,319 NFTs?";
const faq_description_4_pt = "Este número representa a soma do dia do emo no Brasil 24/07 & e o dia internacional do emo 19/12.";
const faq_title_5_pt = "O que é MetaMask?";
const faq_description_5_pt = "MetaMask é uma carteira/programa de cripto moedas que armazenará o seu NFT depois que ele for comprado/mintado.";
const faq_title_6_pt = "O que é a whitelist?";
const faq_description_6_pt = "É um acesso exclusivo que te permite comprar/mintar NFTs antes da venda pública.";
const faq_title_7_pt = "Como conseguir a whitelist?";
const faq_description_7_pt = "Dê uma olhada no canal do Discord  📝how-to-be-old-school ";
const faq_title_8_pt = "O que é minting?";
const faq_description_8_pt = "Minting é o processo de criar/comprar o NFT e colocá-lo na blockchain.";
const faq_title_9_pt = "Por que eu deveria mintar na whitelist?";
const faq_description_9_pt = "Você terá direito de comprar até 3 NFTs na pré-venda com menos competição de outros compradores. 🔺 ATENÇÃO REDOBRADA: 🔺 apenas 1 compra permitida na whitelist. Escolha a quantidade correta.";
const faq_title_10_pt = "Quais são os benefícios de pertencer ao Emo Kids Club?";
const faq_description_10_pt = "Em Breve!";
const faq_title_11_pt = "Quanto custa o mint?";
const faq_description_11_pt = "Em Breve!";
const faq_title_12_pt = "Qual marketplace a coleção será listada?";
const faq_description_12_pt = "OpenSea";
const faq_title_13_pt = "Quando é o mint/pré-venda?";
const faq_description_13_pt = "Em Breve! ";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "maxSupply",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mintPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokensPerMint",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "treasuryAddress",
                type: "address",
              },
            ],
            internalType: "struct NFTCollection.DeploymentConfig",
            name: "deploymentConfig",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "string",
                name: "baseURI",
                type: "string",
              },
              {
                internalType: "bool",
                name: "metadataUpdatable",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "publicMintStart",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "presaleMintStart",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "prerevealTokenURI",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "presaleMerkleRoot",
                type: "bytes32",
              },
            ],
            internalType: "struct NFTCollection.RuntimeConfig",
            name: "runtimeConfig",
            type: "tuple",
          },
        ],
        internalType: "struct NFTCollection.ContractInfo",
        name: "info",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokensPerMint",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "treasuryAddress",
            type: "address",
          },
        ],
        internalType: "struct NFTCollection.DeploymentConfig",
        name: "deploymentConfig",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "runtimeConfig",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metadataUpdatable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prerevealTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "presaleMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleMintStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensPerMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferAdminRights",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "baseURI",
            type: "string",
          },
          {
            internalType: "bool",
            name: "metadataUpdatable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "publicMintStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "presaleMintStart",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "prerevealTokenURI",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "presaleMerkleRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTCollection.RuntimeConfig",
        name: "newConfig",
        type: "tuple",
      },
    ],
    name: "updateConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
