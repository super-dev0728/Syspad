import { Box } from '@mui/material';
import plusIcon from '../../../Assets/landingPage/plusIcon.png'
import connect from '../../../Assets/landingPage/connect.jpg'
import lingonNet from '../../../Assets/LanchPads/legionNet.png'
import React from 'react';
import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';
import './Step4.css'

const Step4 = () => {
    return (
        <div className='create-launch'>
            {/* --------------nav bar */}
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
                        <button><img src={connect} alt="" /> Connect</button>
                    </div>
                </div>
            </div>
            {/* --------------nav bar end */}


            <Box className='create-lunchpad-header px-2 px-md-4'>
                <div className='banner-text'>
                    <h1 className='pt-4 pb-3'>Create Launchpad</h1>
                </div>

                <div className='lunch-header-wraper pb-5'>
                    <div className='launch-lavel'>
                        <span className='launchNum'>01</span>
                        <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                    </div>

                    <div className='launch-lavel'>
                        <span className='launchNum'>02</span>
                        <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                    </div>

                    <div className='launch-lavel'>
                        <span className='launchNum'>03</span>
                        <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                    </div>

                    <div className='launch-lavel'>
                        <span className='launchNum'>04</span>
                        <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                        </div>
                        {/* <span className='dot-line ms-2'></span>   */}
                    </div>
                </div>
            </Box>
            <Container>
                <div container>

                    <div className='lavel-form-wraper'>
                        <div className='step4-network-logo-div mb-5'>
                            <span><img className='legionNet-img' src={lingonNet} alt="" /></span>
                            <div className='lavel-text'>
                                <p>Token Name</p>
                                <h4>Legion Network</h4>
                            </div>
                        </div>
                        <section className='tokendetails-wraper'>

                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails-odd'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>
                            <div className='tokenDetails'>
                                <p>Token Name</p>
                                <p>Token Name</p>
                            </div>


                        </section>


                        <div className='d-flex justify-content-center'>
                            <Link to='/Step3'> <button className='continue-btn'>← Back</button></Link>
                            <span className='m-3'></span>
                            <Link to='/legionnetwork'> <button className='continue-btn' >Confirm →</button></Link>
                        </div>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Step4;