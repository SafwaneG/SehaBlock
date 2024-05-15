import Web3 from "web3";
import contracts from "contracts";

async function getContractInfo({ contractName }) {
  const contractInfo = contracts[contractName];

  const web3 = new Web3(window.ethereum);
  const provider = window.ethereum;
  await provider.request({ method: "eth_requestAccounts" });
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(
    contractInfo.abi,
    contractInfo.networks[1337].address
  );
  return { account, contract };
}

export default getContractInfo;
