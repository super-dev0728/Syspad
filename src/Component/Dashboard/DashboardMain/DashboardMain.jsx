import React from 'react';
import { Col, Row } from 'react-bootstrap';
import roy from '../../Assets/Dashboard/roy.png';
import Secondlogo from '../../Assets/Dashboard/logoTwo.png'
import thridLogo from '../../Assets/Dashboard/human.png'
import download from '../../Assets/Dashboard/download.png'
import thridImg from '../../Assets/Dashboard/interestSyspad.png'
import scroll from '../../Assets/Dashboard/scroll.png'
import token from '../../Assets/Dashboard/token.png';
import './DashboardMain.css';
import DashboardFoter from '../DashboardShared/DashboardFoter/DashboardFoter';


const DashboardMain = () => {
    return (
        <div className='dashboard-main text-white'>

            <Row className='px-md-5 p-2 m-0'>
                <Col className='col-12 col-md-4 '>
                    <div className='frist-box p-2 p-md-3'>
                        <div className='tokenBalance'>
                            <div><img src={roy} alt="" /></div>
                            <div className='token-text'>
                                <h2 className='text-white'>TOKEN BALANCE</h2>
                                <h3 className='text-white'>0 ROY</h3>
                            </div>
                        </div>
                        <hr className='new-hr-tag' />
                        <div>
                            <small>YOUR CONTRIBUTION IN</small>
                            <Row className='usd-eth-btc'>
                                <Col className="col-4 col-md-4"><h3>3,555</h3>
                                    <small>USD</small></Col>
                                <Col className="col-4 col-md-4">
                                    <h3>3,413.51

                                    </h3>
                                    <small>ETH</small>
                                </Col>
                                <Col className="col-4 col-md-4">
                                    <h3>0.12</h3>
                                    <small>BTC</small>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col className='col-12 col-md-4 '>
                    <div className='second-box p-2 p-md-3'>
                        <div className='tokenBalance'>
                            <div className=' img-two'><img src={Secondlogo} alt="" /></div>
                            <div className='token-text'>
                                <h2>Demo Stage 4</h2>
                                <h3>1 ROY = 0.00575 USD</h3>
                                <button>RUNNING </button>
                            </div>

                        </div>
                        <hr className='second-hr-tag' />
                        <div className='Button-bottom-style'>
                            <Row>
                                <Col className='col-12-col-md-9'></Col>
                                <Col className='col-12-col-md-3'>  <button>BuyToken Now →</button></Col>
                            </Row>

                        </div>
                    </div>
                </Col>
                <Col className='col-12 col-md-4'>
                    <div className='second-box p-3 p-md-3'>
                        <p className='text-dark'>Your Account Status</p>
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
                                <Col className='col-12-col-md-9'></Col>
                                <Col className='col-12-col-md-3 mt-2'>  <button>My Profile →</button></Col>
                            </Row>

                        </div>
                    </div>
                </Col>
            </Row>


            {/* second row of two col  */}

            <div>
                <Row className='px-md-5  p-2 m-0 '>

                    <Col className='col-12 col-md-8 mb-4'>
                        <div className='syspad-text-img p-md-5'>
                            <div>
                                <h1>Thank you for your  <br /> interest on SYSPAD</h1>
                                <br />
                                <p>You can contribute SYSPAD token go through Buy Token page.
                                    <br /><br />
                                    You can get a quick response to any questions, and chat with the project in our Telegram:
                                    <a href=" htts://t.me/SYSPAD"> htts://t.me/SYSPAD</a><br /><br />
                                    Don’t hesitate to refer your friends!</p>
                                <button>Download Whitepaper <img src={download} alt="" /></button>
                            </div>
                            <div>
                                <img src={thridImg} alt="" className='img-fluid mt-4' />
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4 mt-1'>
                        <div className='interestOnSyspad '>
                            <div className='left-card-two bg-white mt-4 text-dark p-2 pt-4 pb-4'>
                                <div className='d-flex align-items-center py-md-2'>
                                    <img src={token} alt="" /> <h3>Token Sales Progress</h3>
                                </div>
                                <Row className='m-0 p-0 py-md-2'>
                                    <Col className='col-12 col-md-6 '>
                                        <div className='sale-card'>
                                            <h3>PAISED AMOUNT</h3>
                                            <h6>7,687,454</h6>
                                        </div>
                                    </Col>
                                    <Col className='col-12 col-md-6'>
                                        <div className='sale-card'>
                                            <h3>TOTAL TOKEN</h3>
                                            <h6>9,950,000 SYS</h6>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='py-md-2'>
                                    <img src={scroll} alt="" className='scrollBar' />
                                </div>
                                <p className='sels-end py-md-2'>SALES END IN</p>
                                <div className='day-counter'>
                                    <ul className='timer'>
                                        <li><span id="days"></span>DAY</li>
                                        <li><span id="hours"></span>HOUR</li>
                                        <li><span id="minutes"></span>MIN</li>
                                        <li><span id="seconds"></span>SEC</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </Col>

                </Row>
            </div>

            <DashboardFoter />
        </div>
    );
};

export default DashboardMain;