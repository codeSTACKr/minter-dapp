const fetch = require('node-fetch')

const CONTRACT = process.env.CONTRACT_ADDRESS;
const AUTH = process.env.NFTPORT_AUTH;
const chain = "polygon";
const include = "metadata";

exports.handler = async (event, context) => {
  const wallet = event.queryStringParameters && event.queryStringParameters.wallet
  const page = event.queryStringParameters && event.queryStringParameters.page

  const isOwner = (wallet) => {
    if(!wallet) {
      return {
        isOwner: false
      }
    } else {
      return getOwnedNfts(wallet, page)
    }
  }

  const response = await isOwner(wallet)

  return {
    'statusCode': 200,
    'headers': {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(response)
  }
}

const getOwnedNfts = async (wallet, page) => {
  const url = `https://api.nftport.xyz/v0/accounts/${wallet}/?`;
  
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH
    }
  };
  const query = new URLSearchParams({
    chain,
    include,
    page_number: page
  });

  let editions = []
  try {
    const data = await fetchData(url + query, options)
    console.log(`Recieved page ${page}`)
    const total = data.total;
    const pages = Math.ceil(total / 50);
    data.nfts.forEach(nft => {
      if(nft.contract_address === CONTRACT) {
        editions.push(nft.token_id)
      }
    })

    return {
      isOwner: editions.length > 0 ? true : false,
      editions,
      next_page: +page === pages ? null : +page + 1,
    }
  } catch(err) {
    console.log(`Catch: ${JSON.stringify(err)}`)
    return {
      error: err
    }
  }
}

async function fetchData(url, options) {
  return new Promise((resolve, reject) => {
    return fetch(url, options).then(res => {
      const status = res.status;            

      if(status === 200) {
        return resolve(res.json());
      } else {
        console.log(`Fetch failed with status ${status}`);
        return reject(res.json());
      }        
    }).catch(function (error) { 
      reject(error)
    });
  });
}