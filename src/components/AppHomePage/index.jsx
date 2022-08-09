import React from 'react';
import AppleStoreImg from '../../assets/images/apple-store.png';
import PlayStoreImg from '../../assets/images/play-store.png';
import AppImg from '../../assets/images/app.png';

function AppHomePage() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title me-5">
              <h2 className="title mb-3">Download Mobile App</h2>
              <p className="fs-19 text-muted">Cryptocurrency is a type of digital currency that generally only exists electronically. There is no physical coin or bill unless you use a service that allows you to cash in cryptocurrency for a physical token.</p>
              <p className="fs-19 text-muted">You usually exchange cryptocurrency with someone online, with your phone or computer, without using an intermediary like a bank.</p>
              <div className="d-flex flex-wrap gap-2 mt-4 pt-2">
                <a href="test" className="btn-hover"><img src={AppleStoreImg} height="64" alt="" /></a>
                <a href="test" className="btn-hover"><img src={PlayStoreImg} height="64" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="mobile-app-image text-center mt-5 mt-lg-0">
              <img src={AppImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppHomePage;