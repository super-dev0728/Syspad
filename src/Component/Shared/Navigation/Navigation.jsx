import React from 'react';
import { Link } from 'react-router-dom';
import navConnectImg from '../../Assets/landingPage/conectWhiteIcon.png';
import navImage from '../../Assets/landingPage/NavImg.png';

import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">

          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>



          <ul id="menu">
              <div className='pe-5'>
              <div className='navImgStyle'>
              <img src={navImage} alt="" />
              <h2>SYSPAD</h2>
            </div>
            <div className="navConnectButton">
              <button>
                <img src={navConnectImg} alt="" />Connect</button>
            </div>
              </div>
            <Link to='/'><li><i className="fa-solid fa-cube nav-icon-style"></i>Landing Page</li></Link>
            <div className="dropdown">
              <li className="dropdown-toggle nav-icon-style drop-main" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" role="link" aria-expanded="false">
              <i className="fa-solid fa-rocket nav-icon-style"></i>
              Launchpad
              </li>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link className="dropdown-item drop-item" to="/CreateLanchPad">Create Launchpad</Link>
                <Link className="dropdown-item drop-item" to="/launchPadList">Launchpad List</Link>
                <Link className="dropdown-item drop-item" to="/createToken">Create Token</Link>
              </ul>
          </div>
            {/* <div className='ex-manu'> */}
              <Link to='/leaderboard'><li><i className="fa-solid fa-ranking-star nav-icon-style"></i>Leaderboard</li></Link>
              <Link to='/kycaudit'><li><i className="fa-solid fa-vector-square nav-icon-style"></i>KYC & Audit</li></Link>
              <Link to='/documentation'><li><i className="fa-solid fa-file  nav-icon-style"></i>Documentation</li></Link>
              <Link to='/dashboard'><li><i className="fa-solid fa-table-cells-large  nav-icon-style"></i>Dashboard</li></Link>
            {/* </div> */}
            <div className='last-text text-white'>
              <p>JOIN THE COMMUNITY</p>
              <div className='navBottomIcon'>
              <i className="fa-brands fa-reddit-alien"></i>
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-mastodon"></i>
              </div>
            </div>
            
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navigation;