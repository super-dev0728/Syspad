import React from 'react';
import syspadvedio from '../../Assets/landingPage/vedio.mp4';
import bottomImgOne from '../../Assets/landingPage/bottomImgOne.png';
// import bottomImgTwo from '../../Assets/landingPage/bottomImgTwo.png';
import './WhatisSysPad.css'
// import { Grid } from '@mui/material';
import { Col, Row } from 'react-bootstrap';

const WhatisSysPad = () => {
    return (
        <div className='syspad-page-desing'>
            <div className='heading-video'>
             
                <div className='vedio-desing'>
                    <video src={syspadvedio} controls="controls" ></video>
                </div>
            </div>
            <div>
                <h2>Latest News</h2>
            </div>
            <div>
                <Row className='m-0 bottom-text'>
                    <Col className='col-12 col-md-1'></Col>
                    <Col className='col-12 col-md-5'>
                        <img src={bottomImgOne} alt="" />
                        <p>BNBswap and SYSPAD Enter Partnership</p>
                    </Col>
                    <Col className='col-12 col-md-5'>
                        <img src={bottomImgOne} alt="" />
                        <p>BNBswap and SYSPAD Enter Partnership</p>
                    </Col>
                    <Col className='col-12 col-md-1'></Col>

                </Row>
            </div>
        </div>
    );
};

export default WhatisSysPad;