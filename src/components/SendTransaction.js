import React, { useState } from 'react';
import Web3 from 'web3';

const SendTransaction = ({ account }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const sendTransaction = async () => {
    if (window.ethereum && account) {
      const web3 = new Web3(window.ethereum);
      setLoading(true);
      try {
        await web3.eth.sendTransaction({
          from: account,
          to: recipient,
          value: web3.utils.toWei(amount, 'ether'),
        });
        alert('Transaction successful!');
      } catch (error) {
        console.error('Transaction failed', error);
        alert('Transaction failed!');
      }
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount in Ether"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />

      {!loading ? (
        <button
          onClick={sendTransaction}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Send Ether
        </button>
      ) : (
        <button
          disabled
          className="w-full bg-gray-500 text-white py-2 px-4 rounded cursor-not-allowed"
        >
          Sending...
        </button>
      )}
    </div>
  );
};

export default SendTransaction;
