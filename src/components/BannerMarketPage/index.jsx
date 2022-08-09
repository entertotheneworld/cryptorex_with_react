import React from 'react';

function BannerMarketPage() {
  return (
    <section className="page-title-box overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h2 className="mb-3">Cryptocurrency Market Data</h2>
              <p className="lead text-secondary mb-4">With Cryptorex Trade, you can be sure your trading skills are matched with excellent service.</p>
              <div className="page-next">
                <nav className="d-inline-block" aria-label="breadcrumb text-center">
                  <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Market Data</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerMarketPage;
