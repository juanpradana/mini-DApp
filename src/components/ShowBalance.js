import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const ShowBalance = ({ account }) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const getBalance = async () => {
      if (account) {
        const web3 = new Web3(window.ethereum);
        const balanceInWei = await web3.eth.getBalance(account);
        const balanceInEther = web3.utils.fromWei(balanceInWei, 'ether');
        setBalance(balanceInEther);
      }
    };

    getBalance();
  }, [account]);

  return( 
  <div className="p-4 border rounded shadow-md">
    <p className="text-sm text-gray-600">Address: {account}</p>
    <p className="text-lg font-semibold">Balance: {balance} ETH</p>
  </div>
  );
};

export default ShowBalance;
