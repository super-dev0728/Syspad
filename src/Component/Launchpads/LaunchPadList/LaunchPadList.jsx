import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import plusIcon from '../../Assets/landingPage/plusIcon.png';
import connect from '../../Assets/landingPage/connect.jpg';
import { Col, Row } from 'react-bootstrap';
import imageOne from '../../Assets/LanchPads/image 1.png';
import imageTwo from '../../Assets/LanchPads/image 2.png';
import imageThree from '../../Assets/LanchPads/image 3.png';
import imageFour from '../../Assets/LanchPads/image 4.png';
import imageFive from '../../Assets/LanchPads/image 5.png';
import imageSix from '../../Assets/LanchPads/image 6.png';
import imageSeven from '../../Assets/LanchPads/image 7.png';
import imageEight from '../../Assets/LanchPads/image 8.png';
import imageNine from '../../Assets/LanchPads/Group 37.png';
import imageTen from '../../Assets/LanchPads/image 10.png';
import imageEleven from '../../Assets/LanchPads/image 11.png';
import imageTwenty from '../../Assets/LanchPads/image 12.png';
import './LaunchPadList.css'
import { Link } from 'react-router-dom';

const LaunchPadList = () => {
    return (
        <div>
           <Row className="m-0">
               <Col className="col-0 col-md-2 ">

               </Col>
               <Col className="col-12 col-md-10 ">
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
            <div className='lunchpad-list-wraper'>
                <div className='banner-text  landingPage pb-3'>
                    {/* <div className='pt-4'></div> */}
                    <h1 className='pt-5'>SYSPAD Launchpad</h1>
                    <p>Max Stakers gain exclusive access to SYSPAD Launch, which offers customized <br /> Launches tailored to our community.</p>
                </div>
                <div className='list-card'>
                    <Row className='m-0'>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <Link to='/legionnetTwo'>
                                <img src={imageOne} alt="" className='img-fluid' />
                            </Link>
                            
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageTwo} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageThree} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageFour} alt="" className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='m-0'>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageFive} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageSix} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageSeven} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageEight} alt="" className='img-fluid' />
                        </Col>
                    </Row>

                    <Row className='m-0'>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageNine} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageTen} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageEleven} alt="" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-md-3 col-sm-6 g-3'>
                            <img src={imageTwenty} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </div>
               </Col>
           </Row>
        </div>
    );
};

export default LaunchPadList;