import React from 'react';
import { Container } from 'react-bootstrap';
import './KycApplication.css'
import capture from '../../Assets/Dashboard/capture.png'
import DashboardFoter from '../DashboardShared/DashboardFoter/DashboardFoter';

const KycApplication = () => {
    return (
        <div className='buyToken-page pt-5'>
            <Container>
                <div className='kyc-wraper p-2 p-md-5'>
                    <h1>KYC Verification</h1>
                    <p className='px-md-5 pb-4'>To comply with regulations each participant is required to go through identity verification (KYC/AML) to prevent fraud, money laundering operations, transactions banned under the sanctions regime or those which fund terrorism. Please, complete our fast and secure verification process to participate in token offerings.</p>
                  <div className='kyc-card'>
                    <img src={capture} alt="" />
                    <p className='text-primary fs-5 fw-bold'>You have not submitted your necessary <br /> documents to verify your identity.</p>
                    <p className='px-1 px-md-5 text-secondary'>It would great if you please submit the form. If you have any question, please feel free to contact our support team.</p>
                    <button className='verifucation-btn'>Click here to start <i class="fa-solid fa-eye"></i></button>
                 </div>
                </div>
            </Container>
            <DashboardFoter/>
        </div>
    );
};

export default KycApplication;