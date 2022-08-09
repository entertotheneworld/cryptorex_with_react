import React, { useEffect } from 'react';
import BannerHomePage from '../../components/BannerHomePage';
import AppHomePage from '../../components/AppHomePage';
import CoinGecko from 'coingecko-api';

function Home() {
  const CoinGeckoClient = new CoinGecko();

  useEffect(() => {
    (async () => {
      let data = await CoinGeckoClient.coins.all();
      console.log(data);
  })()});

  return (
    <div className="main-content">
      <BannerHomePage />
      <AppHomePage />
    </div>
  );
}

export default Home;