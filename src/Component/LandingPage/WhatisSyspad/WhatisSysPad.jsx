import React from 'react';
import syspadvedio from '../../Assets/landingPage/vedio.mp4';
import bottomImgOne from '../../Assets/landingPage/bottomImgOne.png';
import bottomImgTwo from '../../Assets/landingPage/bottomImgTwo.png';
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
            <div className='latestNews'>
                <h2>Latest News</h2>
            </div>
            <div className=''>
                <Row className='m-0 bottom-text'>
                    <Col className='col-12 col-md-2'></Col>
                    <Col className='col-12 col-md-4'>
                        <div className='px-2'>
                        <img src={bottomImgOne} alt="" className='img-fluid'/>
                        <p className='mt-3'>BNBswap and SYSPAD Enter Partnership</p>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4'>
                        <div className='px-md-2'>
                        <img src={bottomImgTwo} alt="" className='img-fluid'/>
                        <p className='mt-3'>Roadmap 2022</p>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-2'></Col>

                </Row>
            </div>
        </div>
    );
};

export default WhatisSysPad;