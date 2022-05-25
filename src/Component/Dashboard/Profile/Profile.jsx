import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import thridLogo from '../../Assets/Dashboard/human.png';
import ProfileNav from './profileNav/ProfileNav';
// import {CopyToClipboard} from 'react-copy-to-clipboard';


const Profile = () => {
    const [isCopied, setIsCopied] = useState(false);
    const copyText = 'http://syspad.io/invite?ref=UID9272623'
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
          .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
    return (
        <div>
            <div className='buyToken-page px-md-5 px-2 pb-5'>
                {/* <Container> */}
                <Row className="m-0 p-0">
                    <Col className='col-12 col-md-8'>
                        <div className='tokenPage-left mt-5 mb-5'>
                            <div className='page-heading'>
                                <h2>Profile Details</h2>
                                <br />
                            </div>

                            {/* ==============Profile routing=========== */}
                            <ProfileNav/>
                            <Outlet />
                            
                        </div>
                        {/*========== profile component//==== */}

                        <div className='twoFactor' style={{
                            marginTop:'-4%'
                        }}>
                            <h1>Two-Factor Verification</h1>
                            <p>Two-factor authentication is a method for protection of your account. When it is activated you are required to enter not only your password, but also a special code. You can receive this code in mobile app. Even if third party gets access to your password, they still won't be able to access your account without the 2FA code.</p>
                            <div className='buyMoreBtn mt-4'> <button>Enable Two-Factor Verification <i class="fa-solid fa-square-check ms-3"></i></button></div>
                           
                        </div>


                    </Col>


                    {/* ================================right side cards// */}
                    <Col className='col-12 col-md-4'>
                    {/* card one  */}
                    <div className='left-card-one mt-5'>
                        <h4>Add your wallet address before buy 🡢</h4>
                    </div>

                    {/* ===========================Email verification section
                    ==================================================================  */}
                    <div className='second-box p-2 p-md-3  mt-3'>
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
                            {/*========================================== Add Wallet button///
                            ====================================================================== */}
                            <Row>
                                <Col className='col-12 col-md-6'></Col>
                                <Col className='col-12 col-md-6 mt-2'>  <button>Add Wallet →</button></Col>
                            </Row>
                        </div>
                    </div>

                    {/* card three     */}
                    <div className='second-box  mt-3'>
                        <div>
                            <p className='accountStatus'>Earn With Referral</p>
                            <h6>Invite your friend & family.</h6>
                        </div>
                     
                        <div className='copy-past-section'>
                        <input type="text" value={copyText} readOnly />
                        <button classname="copy-btn" onClick={handleCopyClick}>
                            <span>{isCopied ? 'Copied!' : <span> <i class="fa-solid fa-copy"></i> Copy </span>}</span>
                        </button>
                        </div>


                    </div>

                    {/* card four  */}
                    <div className='second-box  mt-3'>
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
                {/* </Container> */}

            </div>
        </div>
    );
};

export default Profile;