import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import DarkMode from '../../data/DarkMode';

function Navbar() {
  const darkMode = useContext(DarkMode);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
        <div className="container-fluid custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">Cryptorex</Link>
          <div>
            <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-label="Toggle navigation">
              <i className="mdi mdi-menu"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto navbar-center">
              <li className="nav-item">
                <Link className="nav-link" to="/Market">Market</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-header">
            <div className="header-item">
              <a href="sign-in.html" className="btn btn-primary btn-sm"><FontAwesomeIcon icon={faLock} /><span className="d-none d-sm-inline-block" style={{marginLeft: "10px"}}>Login</span></a>
            </div>
            <div className="header-item">
              <button onClick={darkMode.handleDarkMode} id="mode" className="mode-btn text-white rounded-1" style={{marginLeft: "10px"}}>
                {darkMode.darkMode ? <FontAwesomeIcon icon={faCloudMoon} /> : <FontAwesomeIcon icon={faMoon} />}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;