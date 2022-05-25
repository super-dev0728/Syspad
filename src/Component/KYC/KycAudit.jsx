import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import plusIcon from '../Assets/landingPage/plusIcon.png';
import connect from '../Assets/landingPage/connect.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import fingerPrint from '../Assets/KYC&Audit/fingerprint.png';
import './KycAudit.css';

const KycAudit = () => {
    return (
        <div className='kycBackgroundImage'>
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
            
            <div className='full-kyc-area'>
            <div className='text-white pb-5'>
                <h2>KYC for the Owners</h2>
                <p>KYC is only for Project Owners Only</p>
            </div>

               <Container>
               <Row className='p-0 m-0'>
                    
                    <Col className='col-12 col-md-7 text-white '>
                        <div className='kyc-text'>
                            <h5>The KYC process aims to rid our platform of scams and rugpulls by acting as a deterrent for dubious devs. If any of the KYCed project’s team members scams investors: </h5>
                            <p>As you are aware, we take the security of our investors very seriously at SYSPAD. We despise scams and rugpulls, so we've designed a number of features and tools to help you decide whether or not a presale is worth investing in. You may have noticed that certain projects have a KYC badge next to their names when you go through the list of current and historical presales. This short post will clarify what that implies and what it entails for all parties involved.</p>
                            <small>For an audit service, please contact with us:
                            </small>
                            <h6>support@syspad.io</h6>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-5'>
                        <img src={fingerPrint} alt="" className='kyc-img'/>
                    </Col>


</Row>
               </Container>
            </div>
        </div>
    );
};

export default KycAudit;