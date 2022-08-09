import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinGecko from 'coingecko-api';
import SetsDataCoinGecko from '../../data/SetDataCoinGecko';

function Coin() {
  const CoinGeckoClient = new CoinGecko();
  const { coinSlug } = useParams();
  const [currentCoin, setCurrentCoin] = useState(SetsDataCoinGecko);

  useEffect(() => {
    (async () => {
      let data = await CoinGeckoClient.coins.all();
      const foundCoin = data.data.find((coin) => coin.id === coinSlug);
      console.log(foundCoin);
      setCurrentCoin(foundCoin);
  })()});

  return (
    <div className="main-content">
      <h1>{currentCoin.id}</h1>
    </div>
  );
}

export default Coin;
