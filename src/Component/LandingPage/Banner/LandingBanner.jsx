import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
// import { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { providerOptions } from "./providerOptions";
import Navigation from "../../Shared/Navigation/Navigation";
import connect from "../../Assets/landingPage/connect.jpg";
import plusIcon from "../../Assets/landingPage/plusIcon.png";
import bannerImgOne from "../../Assets/landingPage/bannerImgOne.png";
import bannerImgTwo from "../../Assets/landingPage/bannerImgTwo.png";
import metamask from "../../Assets/landingPage/metamask.png";
import pali from "../../Assets/landingPage/paliwallet.jpg";
import "./LandingBanner.css";

import { Col, Row } from "react-bootstrap";
import { textAlign } from "@mui/system";

const LandingBanner = () => {
  // const [address, setAddress] = useState(null);
  const [controller, setController] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [show, setShow] = useState(false)
  const [type, setType] = useState(null)

  useEffect(() => {
    setController(window.ConnectionsController);
    const wallet = localStorage.getItem('setAddress');
  }, []);

  const _connectPaliWallet = async (event) => {
    event.preventDefault();

    if (controller) {
      await controller.connectWallet();

      const account = await controller.getConnectedAccount();
      const tempaccount =
        account.address.main.slice(0, 5) +
        "..." +
        account.address.main.slice(-3);

      localStorage.setItem("setAddress", tempaccount);
      setConnectedAccount(tempaccount);
      setType('setType', 'pali')
    }
    handleClose()
  };

  async function _connectMetamask() {
    const web3Modal = new Web3Modal()

    const connection = await web3Modal.connect()

    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    const tempwallet = wallet.slice(0, 5) + "..." + wallet.slice(-3)
    localStorage.setItem('setAddress', tempwallet)
    setConnectedAccount(tempwallet)
    setType('setType', 'meta')
    handleClose()
  }

  const navigate = useNavigate();
  const wallet_account = localStorage.getItem("setAddress");

  if (connectedAccount) {
    navigate("/dashboard");
  }

  function _disconnectWallet() {
    localStorage.removeItem("setAddress");
    // setAddress(false)
    setConnectedAccount(false);
    if(type == 'pali') {
      controller.disconnectWallet();
    }
  }

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="banerNav">
        <div>
          <Navigation />
        </div>
        <div className="top-two-button">
          <div className="topButtonOne">
            <button>
              <img src={plusIcon} alt="" />
              Create New
            </button>
          </div>
          <div className="topButtonTwo">
            {!(connectedAccount || wallet_account) && (
              <a className="btn ml-lg-auto" onClick={() => setShow(true)}>
                <img src={connect} alt="" /> Connect
              </a>
            )}
            {(connectedAccount || wallet_account) && (
              <a className="btn ml-lg-auto" onClick={_disconnectWallet}>
                <img src={connect} alt="" />
                {connectedAccount || wallet_account}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="landingPage">
        <div className="banner-text">
          <div className="pt-4"></div>
          <h1 className="pt-4">
            The Launchepad Protocol for <br /> everyone!
          </h1>
          <p>
            SYSPAD let anybody to create and sell their own tokens in a matter
            of seconds. <br /> SYSPAD tokens will be confirmed and uploaded on
            explorer websites.
          </p>
        </div>

        <Row className="m-0">
          <Col className="col-12 col-md-1"></Col>
          <Col className="col-12 col-md-5">
            <img className="img-fluid pt-3" src={bannerImgOne} alt="" />
          </Col>
          <Col className="col-12 col-md-5">
            <img className="img-fluid" src={bannerImgTwo} alt="" />
          </Col>
          <Col className="col-12 col-md-1"></Col>
        </Row>
        <div className="banner-text pt-5">
          <h1>What is SYSPAD?</h1>
        </div>
      </div>
      <Modal
        contentClassName="transparentBgClass"
        show={show}
        onHide={handleClose}
        animation={false}
        className="wallet-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Connect to Wallet
          </Modal.Title>
        </Modal.Header>
        <Row style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
          <Col xs={6}>
            <a onClick={_connectMetamask}>
              <img
                src={metamask}
                alt="Metamask"
                style={{ width: "30%" }}
              />
            </a>
            <p>Metamask</p>
          </Col>

          <Col xs={6}>
            <a onClick={_connectPaliWallet}>
              <img
                src={pali}
                alt="Pali Wallet"
                style={{ width: "30%" }}
              />
            </a>
            <p>Pali Wallet</p>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default LandingBanner;
