import React from 'react';
// import { Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import docImage from '../Assets/documentation/docMoney.png';
import nextArrow from '../Assets/documentation/nextIcon.png';
import './Documentation.css';
import DocNavigation from '../Shared/DocNavigation/DocNavigation';
import { Col, Row } from 'react-bootstrap';
const Documentation = () => {
    return (
        <div>
            <Row className="m-0">
                <Col className='col-0 col-md-2'>

                </Col>
                <Col className='col-12 col-md-10'>
                    <div className='documentation-cover'>
                        <div className='DocbanerNav'>
                            <div>
                                <DocNavigation />
                            </div>
                            <div className='docTopNav'>
                                <div>
                                    <a href="*">User Guide</a>
                                    <a href="*">Admin Guide</a>
                                    <a href="*">API Docs</a>
                                    <a href="*">Release Notes</a>
                                </div>
                                <div>
                                    <div class="TopDocSearch">
                                        <i class="fas fa-search"></i><input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Row className='text-white p-0 m-0'>
                                <Col className='col-12 col-md-1'></Col>
                                <Col className='col-12 col-md-5 docTextArea'>
                                    <div className='mt-5 pt-5'>
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
                                            <img src={docImage} alt="" className='img-fluid' />
                                        </div>
                                        <div className='docButton'>
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
                </Col>
            </Row>
        </div>
    );
};

export default Documentation;