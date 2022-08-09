import React from 'react';

function Footer() {
  return (
    <div>
      <section className="bg-footer overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-item mt-4 mt-lg-0 me-lg-5">
              <div className="mb-2">
                <img src="assets/images/dark-logo.png" alt="" className="footer-dark-logo" />
                <img src="assets/images/light-logo.png" alt="" className="footer-light-logo" />
              </div>
              <p className="footer-content">It is a long established fact that a reader will be of a page readerwill layout.</p>
              <ul className="footer-social-menu list-inline mb-0">
                <li className="list-inline-item"><i className="uil uil-facebook-f"></i></li>
                <li className="list-inline-item"><i className="uil uil-linkedin-alt"></i></li>
                <li className="list-inline-item"><i className="uil uil-google"></i></li>
                <li className="list-inline-item"><i className="uil uil-twitter"></i></li>
              </ul>
            </div>
          </div>
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <h6 className="footer-header mb-3">Company</h6>
                <ul className="list-unstyled footer-list mb-0">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="blog.html">Blog</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <h6 className="footer-header mb-3">Services</h6>
                <ul className="list-unstyled footer-list mb-0">
                  <li><a href="market-data.html">Trade</a></li>
                  <li><a href="payment-index.html">Payment</a></li>
                  <li><a href="wallets.html">Wallets</a></li>
                  <li><a href="whitepaper.html">Whitepaper</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <h6 className="footer-header mb-3">Product</h6>
                <ul className="list-unstyled footer-list mb-0">
                  <li><a href="about.html">Guides</a></li>
                  <li><a href="buy-sell.html">Buy & Sell</a></li>
                  <li><a href="wallets.html">Wallets</a></li>
                  <li><a href="token-sale.html">Token Sale</a></li>
                  <li><a href="roadmap.html">Roadmap</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-item mt-4 mt-lg-0">
                <h6 className="footer-header mb-3">Legal</h6>
                <ul className="list-unstyled footer-list mb-0">
                  <li><a href="faqs.html">Faq's</a></li>
                  <li><a href="privacy-policy.html">Privacy & Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center fw-medium fs-16 mb-0">
                <script>document.write(new Date().getFullYear())</script> &copy; Cryptorex - Cryptocurrency Template kit by <a href="https://pichforest.com/" className="text-reset text-decoration-underline">Pichforest</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;