import React from 'react';
import BannerMarketPage from '../../components/BannerMarketPage';
import DataMarketPage from '../../components/DataMarketPage';
import ListMarketPage from '../../components/ListMarketPage';

function Home() {
  return (
    <div className="main-content">
      <div className="page-content">
        <BannerMarketPage />
        <DataMarketPage />
        <ListMarketPage />
      </div>
    </div>
  );
}

export default Home;