import React, { useEffect, useState } from 'react';
import CoinGecko from 'coingecko-api';
import { Link } from 'react-router-dom';
import SetsDataCoinGecko from '../../data/SetDataCoinGecko';

function ListMarketPage() {
  const [dataCoinGecko, setdataCoinGecko] = useState(SetsDataCoinGecko);
  const CoinGeckoClient = new CoinGecko();

  useEffect(() => {
    (async () => {
      let data = await CoinGeckoClient.coins.all();
      setdataCoinGecko(data)
  })()});

  return (
  <section className="section pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content" id="market-dataContent">
            <div className="market-table-title table-responsive" id="market">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Change</th>
                    <th scope="col">High / Low</th>
                    <th scope="col">24h Volume</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {dataCoinGecko.data.map((coin) =>(
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="icon flex-shrink-0 me-2">
                          <img src={coin.image.small} style={{width: "25px", marginRight:"5px"}}/>
                        </div>
                        <h6 className="fw-medium mb-0">{coin.symbol}</h6>
                      </div>
                    </td>
                    <td>{coin.market_data.current_price.eur} $</td>
                    <td className="text-danger">{coin.market_data.price_change_percentage_24h} %</td>
                    <td>0.09721 / 0.08951</td>
                    <td>39,258.44</td>
                    <td>$64.16M</td>
                    <td>
                      <Link className="w-medium" to={`/coin/${coin.id}`}>Voir</Link>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ListMarketPage;
