import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import navConnectImg from "../../Assets/landingPage/conectWhiteIcon.png";
import navImage from "../../Assets/landingPage/NavImg.png";

import "./Navigation.css";

const Navigation = () => {
  const [address, setAddress] = useState(null);

  async function _connectWallet() {
    // const providerOptions = {
    //     walletconnect: {
    //         package: WalletConnectProvider,
    //         options: {
    //           infuraId: "58a524d501514e7991761ef592f2a0e9",
    //         }
    //     }
    // };
      
    // const web3Modal = new Web3Modal({
    //     network: "mainnet", // optional
    //     cacheProvider: true, // optional
    //     providerOptions // required
    // });
    const web3Modal = new Web3Modal()
    
    const connection = await web3Modal.connect()
    
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    const tempwallet = wallet.slice(0,5) + "..." + wallet.slice(-3)
    localStorage.setItem('setAddress', tempwallet)
    setAddress(tempwallet)
  }

  const navigate = useNavigate();
  const wallet_address = localStorage.getItem("setAddress");

  if(address) {
    navigate('/dashboard')
  }

  function _disconnectWallet() {
    localStorage.removeItem('setAddress')
    setAddress(false)
  }

  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">

          <input className='manu-check-btn' type="checkbox" defaultChecked/>
          {/* <label htmlFor="select-icon"> */}
          <div className='span'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          {/* </label> */}


          <ul id="menu">
            <div className="pe-5">
              <div className="navImgStyle">
                <img src={navImage} alt="" />
                <h2>SYSPAD</h2>
              </div>
              <div className="navConnectButton">
                {!(address || wallet_address) && (
                  <a className="btn ml-lg-auto" onClick={_connectWallet}>
                    <img src={navConnectImg} alt="" /> Connect
                  </a>
                )}
                {(address || wallet_address) && (
                  <a className="btn ml-lg-auto" onClick={_disconnectWallet}>
                    <img src={navConnectImg} alt="" />
                    {address || wallet_address}
                  </a>
                )}
              </div>
            </div>
            <Link to="/">
              <li>
                <i className="fa-solid fa-cube nav-icon-style"></i>Landing Page
              </li>
            </Link>
            <div className="dropdown">
              <li
                className="dropdown-toggle nav-icon-style drop-main"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                role="link"
                aria-expanded="false"
              >
                <i className="fa-solid fa-rocket nav-icon-style"></i>
                Launchpad
              </li>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <Link className="dropdown-item drop-item" to="/CreateLanchPad">
                  Create Launchpad
                </Link>
                <Link className="dropdown-item drop-item" to="/launchPadList">
                  Launchpad List
                </Link>
                <Link className="dropdown-item drop-item" to="/createToken">
                  Create Token
                </Link>
              </ul>
            </div>
            {/* <div className='ex-manu'> */}
            <Link to="/leaderboard">
              <li>
                <i className="fa-solid fa-ranking-star nav-icon-style"></i>
                Leaderboard
              </li>
            </Link>
            <Link to="/kycaudit">
              <li>
                <i className="fa-solid fa-vector-square nav-icon-style"></i>KYC & Audit
              </li>
            </Link>
            <Link to="/documentation">
              <li>
                <i className="fa-solid fa-file  nav-icon-style"></i>
                Documentation
              </li>
            </Link>
            <Link to="/dashboard">
              <li>
                <i className="fa-solid fa-table-cells-large  nav-icon-style"></i>
                Dashboard
              </li>
            </Link>
            {/* </div> */}
            <div className="last-text text-white">
              <p>JOIN THE COMMUNITY</p>
              <div className="navBottomIcon">
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
