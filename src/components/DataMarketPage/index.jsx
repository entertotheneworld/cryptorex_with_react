import React from 'react';

function DataMarketPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <h6 className="text-muted fw-medium">Market Cap</h6>
                      <h4 className="fw-medium">$12,452,312,410.17</h4>
                      <p className="text-success fw-medium mb-0">+5.25%</p>
                    </div>
                    <div className="col-lg-5">
                      <div style={{position: "relative"}}>
                        <div id="chart-timeline" style={{minHeight: "90px"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4 border-0 shadow-lg">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <h6 className="text-muted fw-medium">24h Trading Volume</h6>
                      <h4 className="fw-medium">$1,415,745,321.79</h4>
                      <p className="text-success fw-medium mb-0">+25.75%</p>
                    </div>
                    <div className="col-lg-5">
                      <div style={{position: "relative"}}>
                        <div id="chart-timeline2" style={{minHeight: "90px"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-lg mt-4 mt-lg-0">
              <div className="card-body">
                <h6 className="text-muted fw-medium mb-4">Top Movers</h6>
                <div className="table-responsive">
                  <table className="table table-sm top-movers-table fs-16 table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="fw-medium">Bitcoin <span className="text-muted">(BTC)</span></td>
                        <td>$5.88</td>
                        <td className="text-success">25.8%</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="fw-medium">Ethereum <span className="text-muted">(ETH)</span></td>
                        <td>$305.75</td>
                        <td className="text-success">45.20%</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="fw-medium">Filecoin <span className="text-muted">(FIL)</span></td>
                        <td>$63.45</td>
                        <td className="text-success">18.41%</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="fw-medium">Ripple <span className="text-muted">(XRP)</span></td>
                        <td>$41.75</td>
                        <td className="text-success">10.30%</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className="fw-medium">LinkEye <span className="text-muted">(LET)</span></td>
                        <td>$36.98</td>
                        <td className="text-success">36.74%</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td className="fw-medium">Litecoin <span className="text-muted">(LTC)</span></td>
                        <td>$74.02</td>
                        <td className="text-success">80.46%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataMarketPage;
