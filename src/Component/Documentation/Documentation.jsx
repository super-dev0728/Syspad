import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import plusIcon from '../Assets/landingPage/plusIcon.png';
import connect from '../Assets/landingPage/connect.jpg';
import { Col, Row } from 'react-bootstrap';
import docImage from '../Assets/documentation/docMoney.png';
import nextArrow from '../Assets/documentation/nextIcon.png';
import './Documentation.css';
const Documentation = () => {
    return (
        <div className='documentation-cover'>
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
                        <button><img src={connect} alt="" />Connect</button>
                    </div>
                </div>
            </div>
            <div>
                <Row className='text-white p-0 m-0'>
                    <Col className='col-12 col-md-1'></Col>
                    <Col className='col-12 col-md-5 docTextArea'>
                        <div>
                            <div className='h4-h2-style'>
                                <h4>Documentation</h4>
                                <h2>Introduction</h2>
                            </div>
                            <div className='doc-p-area'>
                                <p>SYSPAD is a system that aims to give users the ability to create their own initial token sale and launch their own token. No coding is required; simply walk through our terminal to create your own token and start it with a few mouse clicks. <br />
                                    <br />
                                    SYSPAD strives to motivate users to continue using our platform in addition to being a leading token sale creator. SYSPAD has a farming protocol in place to encourage project owners to choose SYSPAD over competitors when launching their projects. SYSPAD tokens will also be awarded to the top projects established on the platform. Finally, our goal is to provide a secure atmosphere for all of our Pink ecosystem investors. With this in mind, an anti-drug system has been put in place to combat the problem.</p>
                            </div>
                            <br />
                            <div>
                                <h5>Tech Ecosystem</h5>
                                <hr />
                                <small>Compute Environment Catalog <br />
                                    Data sources<br />
                                    Data governance<br />
                                    Tools & IDEs<br />
                                    Packages & libraries<br />
                                    Spark & Hadoop clusters
                                </small>
                            </div>
                        </div>

                    </Col>
                    <Col className='col-12 col-md-5'>
                        <div className='doc-img-area'>
                            <div>
                                <img src={docImage} alt="" />
                            </div>
                            <div className='docButton pb-4'>
                                <button>
                                    <div className='btnInsideText'>
                                        <div>
                                            <p>Next</p>
                                            <h5>Token Metrics</h5>
                                        </div>
                                        <div>
                                            <img src={nextArrow} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-1'></Col>

                </Row>
            </div>
        </div>
    );
};

export default Documentation;