import React from 'react';
import { useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import Navigation from '../../Shared/Navigation/Navigation';
import connect from '../../Assets/landingPage/connect.jpg';
import plusIcon from '../../Assets/landingPage/plusIcon.png';
import bannerImgOne from '../../Assets/landingPage/bannerImgOne.png';
import bannerImgTwo from '../../Assets/landingPage/bannerImgTwo.png';
import './LandingBanner.css'

import { Col, Row } from 'react-bootstrap';

const LandingBanner = () => {
    const [address, setAddress] = useState(null);

    async function _connectWallet() {
        const web3Modal = new Web3Modal()
        
        const connection = await web3Modal.connect()
        
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner();
        const wallet = await signer.getAddress();
        const tempwallet = wallet.slice(0,5) + "..." + wallet.slice(-3)
        setAddress(tempwallet)
    }

    return (
        <div>
            <div className='banerNav'>
                <div>
                    <Navigation />
                </div>
                <div className='top-two-button'>
                    <div className='topButtonOne'>
                        <button><img src={plusIcon} alt="" />
                            Create New</button>
                    </div>
                    <div className='topButtonTwo'>
                    {!address && (
                        <a className="btn ml-lg-auto" onClick={_connectWallet}><img src={connect} alt="" /> Connect</a>
                    )}
                    {address && (
                        <span className="btn ml-lg-auto"><img src={connect} alt="" />{address}</span>
                    )}
                    </div>
                </div>
            </div>
            <div className='landingPage'>
                <div className='banner-text'>
                    <div className='pt-4'></div>
                    <h1 className='pt-4'>The Launchepad Protocol for <br /> everyone!</h1>
                    <p>SYSPAD let anybody to create and sell their own tokens in a matter of seconds. <br /> SYSPAD tokens will be confirmed and uploaded on explorer websites.</p>
                </div>
                
                <Row className='m-0'>
                    <Col className='col-12 col-md-1'></Col>
                    <Col className='col-12 col-md-5'>
                        <img className='img-fluid pt-3' src={bannerImgOne} alt="" />
                    </Col>
                    <Col  className='col-12 col-md-5'>
                        <img className='img-fluid' src={bannerImgTwo} alt="" />
                    </Col>
                    <Col className='col-12 col-md-1'></Col>
                </Row>
                <div className='banner-text pt-5'>
                    <h1>What is SYSPAD?</h1>
            </div>
            </div>
           
        </div>
    );
};

export default LandingBanner;