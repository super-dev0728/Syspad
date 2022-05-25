import { Box} from '@mui/material';
import plusIcon from '../../../Assets/landingPage/plusIcon.png'
import connect from '../../../Assets/landingPage/connect.jpg'
import React from 'react';
import { Container,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';

const TokenStepOne = () => {
    return (
        <div className='create-launch'>
            {/* --------------nav bar */}
            <div className='banerNav'>
                <div>
                    <Navigation/>
                </div>
                <div className='top-two-button'>
                <div className='topButtonOne'>
                        <button><img src={plusIcon} alt="" />
                            Create New</button>
                    </div>
                    <div className='topButtonTwo'>
                        <button><img src={connect} alt="" /> Connect</button>
                    </div>
                </div>
            </div>
  {/* --------------nav bar end */}


        <Box className='create-lunchpad-header px-2 px-md-4'>
            <div className='banner-text'>
                    <h1 className='pt-4 pb-3'>Create Token</h1>
            </div>

            <div className='lunch-header-wraper pb-5'>
                 <div className='launch-lavel'>
                    <span className='launchNum'>01</span>
                     <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                 </div>

                 <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>02</span>
                     <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                 </div>

                 <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>03</span>
                     <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                 </div>

                 <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>04</span>
                     <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'12px' }}>Enter the token address and verify</small>
                    </div>
                    {/* <span className='dot-line ms-2'></span>   */}
                 </div>
            </div>

           </Box>


         <Container>
        <div container>
         
          <div className='lavel-form-wraper'>
              <form className='lavel-form'>
                  <div className='pb-2'>
                  <div className='input-head'><p>Token Type*</p></div>
                  <select  className='field-100'>
                            <option className='input-option-field text-dark' value="typeOne">Starndard Token</option>
                            <option className='input-option-field text-dark' value="TypeTwo">Basic Token</option>
                            <option className='input-option-field text-dark' value="TypeThree">Normal Token</option>
                            </select>
                  <span className='text-secondary'>Fee: 0.01 ETH</span>
                  </div>

                  <div className='pb-2'>
                    <div className='input-head'><p>Token Name*</p></div>
                    <input className='field-100' type="Your Coin Name" placeholder='URL'  required/>
                  </div>

                  <div className='pb-2'>
                    <div className='input-head'><p>Token Symbol*</p></div>
                    <input className='field-100' type="text" placeholder='Your Symbol'  required/>
                  </div>

                  <div className='pb-2'>
                    <div className='input-head'><p>Decimals*</p></div>
                    <input className='field-100' type="text" placeholder='Decimals'  required/>
                  </div>

                  <div className='pb-2'>
                    <div className='input-head'><p>Total Supply*</p></div>
                    <input className='field-100' type="Number" placeholder='0'  required/>
                  </div>
                   
                <div className='d-flex justify-content-center'>
                {/* <Link to ='/Step2'> <button className='continue-btn'>← Back</button></Link> */}
                {/* <span className='m-3'></span> */}
                 <Link to ='/'> <button className='continue-btn' >Create Token →</button></Link>
                </div>
              </form>
          </div>
        
         </div>
      
  </Container> 
        </div>
    );
};

export default TokenStepOne;