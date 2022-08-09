import React from 'react';
import BgHome from '../../assets/images/home/bg-home-01.png'
import ImgHome from '../../assets/images/home/home-01.png'

function BannerHomePage() {
  const bgBannerHome = {
    backgroundImage: `url(${BgHome})`
  };

  return (
    <section className="bg-home bg-white" style={bgBannerHome}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <div className="sub-title bg-soft-primary text-primary mb-4">
                <span className="badge bg-white text-primary fs-13 me-2 rounded-pill">Live Updates</span>
                <span>Check out the cryptorex <i className="uil uil-arrow-right me-1"></i></span>
              </div>
              <h1 className="home-title mb-4">The World’s Most Popular Way to Buy, Sell, and Trade <span className="text-success">Cryptorex</span></h1>
              <p className="para-desc mx-auto lead text-muted">Explore and learn more about everything from learning and global payments to scaling your team.</p>
              <button className="btn btn-primary btn-hover mt-4"><i className="uil uil-user me-1"></i> Open Live Account</button>
            </div>
          </div>
          <div className="col-10">
            <div className="mt-5">
              <img src={ImgHome} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <ul className="home-icon-list list-unstyled mb-0">
        <li>    
          <i className="cf cf-btg text-primary"></i>
        </li>
        <li>
          <i className="cf cf-btc text-warning"></i>
        </li>
        <li>
          <i className="cf cf-dor text-blue"></i>
        </li>
        <li>
          <i className="cf cf-earth text-success"></i>
        </li>
        <li>
          <i className="cf cf-ltc text-success"></i>
        </li>
        <li>
          <i className="cf cf-elec text-warning"></i>
        </li>
        <li>
          <i className="cf cf-1337 text-danger"></i>
        </li>
      </ul>
    </section>
  );
}

export default BannerHomePage;