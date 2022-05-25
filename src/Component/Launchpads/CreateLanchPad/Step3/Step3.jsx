import { Box, Grid} from '@mui/material';
import plusIcon from '../../../Assets/landingPage/plusIcon.png'
import connect from '../../../Assets/landingPage/connect.jpg'
import React from 'react';
import { Container,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';

const Step3 = () => {
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

                 <div className='launch-lavel'>
                    <span className='launchNum'>03</span>
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
                  <div className='input-head'><p>Logo URL*</p></div>
                  <input className='field-100' type="text" placeholder='URL'  required/>
                
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Telegram</p>
                        <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Twitter</p>
                         <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Raddit</p>
                        <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Github</p>
                        <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Instagram</p>
                        <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <p className='pt-2'>Discord</p>
                        <input className='field-100' type="text" placeholder='URL'  required/>
                    </Grid>

                   </Grid>
                   
                <div className='d-flex justify-content-center'>
                <Link to ='/Step2'> <button className='continue-btn'>← Back</button></Link>
                <span className='m-3'></span>
                 <Link to ='/Step4'> <button className='continue-btn' >Continue →</button></Link>
                </div>
              </form>
          </div>
        
         </div>
      
  </Container> 
        </div>
    );
};

export default Step3;