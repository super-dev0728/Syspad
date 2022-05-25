import { Box, Grid} from '@mui/material';
import plusIcon from '../../../Assets/landingPage/plusIcon.png'
import connect from '../../../Assets/landingPage/connect.jpg'
import React from 'react';
import { Container,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';
import Checkbox from '@mui/material/Checkbox';

const Step2 = () => {
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
                    <h1 className='pt-4 pb-3'>Create Launchpad</h1>
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

                 <div className='launch-lavel'>
                    <span className='launchNum'>02</span>
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
                  <div className='input-head'><p>Presale Rate*</p></div>
                  <input className='field-100' type="number" placeholder='0'  required/>
                  <span>Users will pay with ETH for your token</span>
                  <div>
                      <p className='fs-4'>Sale method</p>
                      <button className='button-lavel2'> Public</button>
                      <button className='button-lavel2'> BTC</button>
                  </div>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>SoftCap*</p>
                        <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>HardCap*</p>
                         <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Minimum Buy*</p>
                        <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Maximum Buy*</p>
                        <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Liquidity*</p>
                        <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Listing Rate*</p>
                        <input className='field-100' type="number" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Refund Type</p>
                        <select  className='field-100'>
                            <option className='input-option-field text-dark' value="typeOne">TypeOne</option>
                            <option className='input-option-field text-dark' value="TypeTwo">TypeTwo</option>
                            <option className='input-option-field text-dark' value="TypeThree">TypeThree</option>
                            </select>
                    </Grid>

                    {/*---------------------------- second part time
                    --------------------------------------------------------- */}
                    <Grid item xs={12}>
                        <h5 className='pt-3'>Start time (UTC)</h5>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Start time</p>
                        <input className='field-100' type="time" placeholder='0'  required/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>End time</p>
                        <input className='field-100' type="time" placeholder='0'  required/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Liquidity lockup</p>
                        <input className='field-100' type="text" placeholder='0'  required/>
                       
                    </Grid>
                    </Grid>
                    <p><Checkbox defaultChecked /> Using Anti-Rug System?</p> 
                <div className='d-flex justify-content-center'>
                <Link to ='/CreateLanchPad'> <button className='continue-btn'>← Back</button></Link>
                <span className='m-3'></span>
                 <Link to ='/Step3'> <button className='continue-btn' >Continue →</button></Link>
                </div>
              </form>
          </div>
        
         </div>
      
  </Container> 
        </div>
    );
};

export default Step2;