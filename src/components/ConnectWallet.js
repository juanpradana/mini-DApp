import React from 'react';
import Web3 from 'web3';

const ConnectWallet = ({ setAccount }) => {
  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const chainId = Number(await web3.eth.getChainId());

        if (chainId !== 17000) {
          alert("Please switch to the Holesky network!");
        } else {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("MetaMask access denied", error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  return (
    <div>
      <button
        onClick={connectWallet}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Connect to Holesky
      </button>
    </div>
  );
};

export default ConnectWallet;
