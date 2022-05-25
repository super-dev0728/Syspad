import React from 'react';
import { Col, Row } from 'react-bootstrap';
import tokenBalance from '../../Assets/Dashboard/tokenBalance.png';
import thridLogo from '../../Assets/Dashboard/human.png';
import './MyToken.css';
import DashboardFoter from '../DashboardShared/DashboardFoter/DashboardFoter';

const MyToken = () => {

    return (
        <div className='dashboard-main'>
            <Row className='m-0 p-md-5 p-2'>
                <Col className='col-12 col-md-8 mt-3 pt-1'>
                    <div className='second-box pb-5'>
                        <h1 className='my-syspad-token'>My SYSPAD Token</h1>
                        <div className='token-text-img'>
                            <div className='token-balance'>
                                <div>
                                    <img src={tokenBalance} alt="" />
                                </div>
                                <div className='onlyTokenText'>
                                    <p>TOKEN BALANCE</p>
                                    <h5>0 SYS</h5>
                                    <small>Equivalent to 0 USD</small>
                                </div>
                            </div>
                            <div className='buyMoreBtn'>
                                <button>Buy more token 🡢</button>
                            </div>
                        </div>
                        <div className='pb-4'>
                            <Row className='m-0 pt-4'>
                                <Col className='col-12 col-md-4'>
                                    <div className='forSpace'>
                                        <h6>Total Token Amount</h6>
                                        <h5>0 SYS</h5>
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-4 smallCol '>
                                    <div className='forSpace'>
                                        <h6>Purchased Token</h6>
                                        <h5>12,222 SYS</h5>
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-4 smallCol'>
                                    <div className='forSpace'>
                                        <h6>Referral Token</h6>
                                        <h5>3,000 SYS</h5>
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-4 smallCol'>
                                    <div className='forSpace'>
                                        <h6>Bonuses Token</h6>
                                        <h5>7,687,454 SYS</h5>
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-4 smallCol'>
                                    <div className='forSpace'>
                                        <h6>Bonuses Token</h6>
                                        <h5>9,950,000 SYS</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col className='col-12 col-md-4'>
                    {/* card one  */}
                    <div className='left-card-one mt-5'>
                        <h4>Add your wallet address before buy 🡢</h4>
                    </div>

                    {/* card two  */}
                    <div className='second-box p-2 p-md-3 mt-3'>
                        <p className='accountStatus'>Your Account Status</p>
                        <div className='thrid-grid'>
                            <div className='thrid-img'><img src={thridLogo} alt="" /></div>
                            <div className='token-text'>
                                <h3>Rafat Rahman</h3>
                                <div className='two-button-style'>
                                    <button>Email Verified</button>
                                    <button className='ms-2'>KYC Submited</button>
                                </div>
                            </div>
                        </div>
                        <hr className='new-hr-tag' />
                        <div className='Button-bottom-style'>
                            <Row>
                                <Col className='col-12 col-md-6'></Col>
                                <Col className='col-12 col-md-6 mt-2'>  <button>Add Wallet →</button></Col>
                            </Row>
                        </div>
                    </div>

                    {/* card three     */}
                    <div className='second-box mt-3'>
                        <div>
                            <p className='accountStatus'>Earn With Referral</p>
                            <h6>Invite your friend & family.</h6>
                        </div>
                        <div className='copy-peast-input'>
                            <h5>Email Address</h5>
                            <input type="text" value="http://syspad.io/invite?ref=UID9272623" id="myInput" />
                            <button onclick="myFunction()">Copy text</button>
                        </div>

                    </div>

                    {/* card four  */}
                    <div className='second-box mt-3'>
                        <div>
                            <p className='accountStatus'>Identity Verification - KYC</p>
                            <h6>To comply with regulation, participant will have to go through identity verification.</h6>
                        </div>

                        <div className='copy-peast-input mt-4'>
                            <h5>You have not submitted your documents to verify your identity (KYC).</h5>
                            <button className='verificationBTN'>Procceed to KYC  <i class="fa-solid fa-eye "></i></button>
                        </div>
                    </div>
                </Col>
            </Row>
            <DashboardFoter/>
        </div>
    );
};

export default MyToken;