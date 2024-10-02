import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import ShowBalance from './components/ShowBalance';
import SendTransaction from './components/SendTransaction';

function App() {
  const [account, setAccount] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Holesky ETH</h1>
        <ConnectWallet setAccount={setAccount} />
        {account && (
          <>
            <ShowBalance account={account} />
            <SendTransaction account={account} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
