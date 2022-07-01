import { Box } from '@mui/material';
import coin1 from '../../../Assets/LanchPads/ethCoin.png'
import coin2 from '../../../Assets/LanchPads/bitCoin.png'
import coin3 from '../../../Assets/LanchPads/bscCoin.png'
import coin4 from '../../../Assets/LanchPads/sysCoin.png'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Step1 = () => {
   return (
      <div>
         <Row className="m-0">
            <Col className='col-0 col-md-2'>

            </Col>
            <Col className='col-12 col-md-10'>
               <Box className='create-lunchpad-header'>
                  <div className='banner-text'>
                     <h1 className='pt-4 pb-3'>Create Launchpad</h1>
                  </div>

                  <div className='lunch-header-wraper pb-5'>
                     <div className='launch-lavel'>
                        <span className='launchNum'>01</span>
                        <div className='lavel-text'>
                           <h4>Verify Token</h4>
                           <small style={{ fontSize: '10px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                     </div>

                     <div className='launch-lavel inactive-text'>
                        <span className='launchNum in-active'>02</span>
                        <div className='lavel-text'>
                           <h4>Verify Token</h4>
                           <small style={{ fontSize: '10px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                     </div>

                     <div className='launch-lavel inactive-text'>
                        <span className='launchNum in-active'>03</span>
                        <div className='lavel-text'>
                           <h4>Verify Token</h4>
                           <small style={{ fontSize: '10px' }}>Enter the token address and verify</small>
                        </div>
                        <span className='dot-line ms-2'></span>
                     </div>

                     <div className='launch-lavel inactive-text'>
                        <span className='launchNum in-active'>04</span>
                        <div className='lavel-text'>
                           <h4>Verify Token</h4>
                           <small style={{ fontSize: '10px' }}>Enter the token address and verify</small>
                        </div>
                        {/* <span className='dot-line ms-2'></span>   */}
                     </div>
                  </div>

               </Box>


               <Container>
                  <div container>

                     <div className='lavel-form-wraper'>
                        <form className='lavel-form'>
                           <div className='input-head'><p>Token address*</p> <Link to='/' className='text-white'>Create Token</Link></div>
                           <input className='field-100' type="text" placeholder='Token address' required />
                           <div className='pt-2'>
                              <p>Users will pay with ETH for your token</p>
                           </div>
                           <div className='pt-4'>
                              <p className='fs-4'>Currency</p>
                              <Row className='curency-box-wraper row-cols-md-3'>

                                 <label htmlFor="eth" className='curency-box'>
                                    <div className='curencyElement'>
                                       <input type="radio" id='eth' name='currency' />
                                       <img src={coin1} alt="" />
                                       <h6 className='pt-2'>Ethereum</h6>
                                    </div>
                                 </label>
                                 <label htmlFor="bit" className='curency-box'>
                                    <div className='curencyElement'>
                                       <input type="radio" id='bit' name='currency' />
                                       <img src={coin2} alt="" />
                                       <h6 className='pt-2'>Bit</h6>
                                    </div>
                                 </label>
                                 <label htmlFor="bsc" className='curency-box'>
                                    <div className='curencyElement'>
                                       <input type="radio" id='bsc' name='currency' />
                                       <img src={coin3} alt="" />
                                       <h6 className='pt-2'>BSC</h6>
                                    </div>
                                 </label>
                                 <label htmlFor="sys" className='curency-box' >
                                    <div className='curencyElement'>
                                       <input type="radio" id='sys' name='currency' />
                                       <img src={coin4} alt="" />
                                       <h6 className='pt-2'>SYS</h6>
                                    </div>
                                 </label>


                              </Row>
                           </div>
                           {/* ---------------------------------text area */}
                           <div>
                              <p className='fs-4 pt-3'>Token Description*</p>
                              <textarea className='field-100 pt-4 pb-5' placeholder='Description' required />
                           </div>
                           <div className='d-flex justify-content-center'>
                              <Link to='/Step2'> <button className='continue-btn'>Continue →</button></Link>
                           </div>
                        </form>
                     </div>

                  </div>

               </Container>
            </Col>
         </Row>
      </div>
   );
};

export default Step1;