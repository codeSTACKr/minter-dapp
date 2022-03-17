const fetch = require('node-fetch')

const AUTH = process.env.NFTPORT_API_KEY;
const include = "merkle_proofs";

exports.handler = async (event, context) => {
  const wallet = event.queryStringParameters && event.queryStringParameters.wallet
  const chain = event.queryStringParameters && event.queryStringParameters.chain
  const contract_address = event.queryStringParameters && event.queryStringParameters.contract
  const url = 'https://api.nftport.xyz/v0/me/contracts/collections?';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: AUTH
    }
  };
  const query = new URLSearchParams({
    chain: chain,
    include
  });

  const data = await fetch(url + query, options)
  const json = await data.json();
  const contractInfo = json.contracts.filter(contract => contract.address.toLowerCase() === contract_address.toLowerCase());
  const merkleProofs = contractInfo[0].merkle_proofs || {};
  const merkleProof = merkleProofs[wallet.toLowerCase()] || [];

  return {
    'statusCode': 200,
    'headers': {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(merkleProof)
  }
}
