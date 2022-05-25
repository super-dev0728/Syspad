import { Divider } from '@mui/material';
import React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap';
import roy from '../../Assets/Dashboard/roy.png'
import wallet from '../../Assets/landingPage/wallet.png'
import token from '../../Assets/Dashboard/coin.png'
import './BuyToken.css'
const BuyToken = () => {
  const now = 25;

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "06/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day))
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

    return (
        <div className='buyToken-page px-md-5 px-2'>
            {/* <Container> */}
                 <Row className="m-0 p-0">
                    <Col className='col-12 col-md-8'>
                        <div className='tokenPage-left mt-5 mb-5'>
                          <div className='page-heading'>
                            <h2>Choose Currency and Calculate <br /> SYSPAD token price</h2>
                              <br />
                              <p>You can buy our SYSPAD token using the below <br /> currency choices to become part of our project.</p>
                           </div>

                            <Row className="m-0 p-0">
                                <Col className='col-md-6'>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>USD</p>
                                        <p>0.00575<span className='ps-2'>USD</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>GBP</p>
                                        <p>0.00469373<span className='ps-2'>GBP</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>RUB</p>
                                        <p>0.3762225<span className='ps-2'>RUB</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>CHF</p>
                                        <p>0.00575575<span className='ps-2'>CHF</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>ETH</p>
                                        <p>0.00000287<span className='ps-2'>ETH</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>XRP</p>
                                        <p>0.013823<span className='ps-2'>XRP</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>BCH</p>
                                        <p>0.00002941<span className='ps-2'>BCH</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>USDT</p>
                                        <p>0.00575575<span className='ps-2'>USDT</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>USDC</p>
                                        <p>0.00575<span className='ps-2'>USDC</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>BUSD</p>
                                        <p>0.00002941<span className='ps-2'>BUSD</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>DOGE</p>
                                        <p>0.0659525<span className='ps-2'>DOGE</span> </p>
                                    </div>
                                </Col>
                                <Col className='col-md-6'>
                                <div className='token-list'>
                                        <p><span className='pe-2'>$</span>EUR</p>
                                        <p>0.00552863<span className='ps-2'>EUR</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>TRY</p>
                                        <p>0.09246<span className='ps-2'>TRY</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>NGN</p>
                                        <p>0.4536225<span className='ps-2'>NGN</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>SGD</p>
                                        <p>0.008096<span className='ps-2'>SGD</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>BTC</p>
                                        <p>0.0000002<span className='ps-2'>BTC</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>XLM</p>
                                        <p>0.04300425<span className='ps-2'>XLM</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>BNB</p>
                                        <p>0.0000201<span className='ps-2'>BNB</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>TRX</p>
                                        <p>0.07912<span className='ps-2'>TRX</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>DASH</p>
                                        <p>0.00009764<span className='ps-2'>DASH</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>ADA</p>
                                        <p>0.01114925<span className='ps-2'>ADA</span> </p>
                                    </div>
                                    <div className='token-list'>
                                        <p><span className='pe-2'>$</span>SOL</p>
                                        <p>0.00011954<span className='ps-2'>SOL</span> </p>
                                    </div>
                                </Col>  
                            </Row>
                    
                    {/* ======================Amount of contribute=========== */}
                            <div className='text-start mt-5'>
                                <h3 className='fs-3'>Amount of contribute</h3>
                                <p>Enter the amount you would like to contribute in order to calculate the amount of tokens you will receive. The calculator below helps to convert the required quantity of tokens into the amount of your selected currency.</p>   
                             <div className='token-comp'>
                                 <div>
                                     <input type="text" defaultValue='0' className='amonut-contribute-btn'/><span className='sys'>SYS</span> 
                                 </div>
                                <div>
                                 <span className='pe-2 fs-4'> = </span> <span className='fs-4 fw-semiblod'>0.00</span> <sub>USDT</sub>
                                </div>
                             </div>
                               <p><small>14.40375 USDT (2,500 TLE) Minimum contribution amount is required.</small> </p>
                            </div>

                            {/*=====================progress bar=================== */}
                            <div>
                            <div className='mt-5'>
                                <div className='d-flex justify-content-between'>
                                 <small>Bonus</small> <span>15%</span>
                                </div>
                                <ProgressBar now={now} label={`${now}%`} visuallyHidden />
                            </div>
                            </div>
                            {/*========================== table/// */}
                            <div className='table-summary text-md-start'>
                                <div>
                                    <h3>56</h3>
                                    <p>+ SALE BONUS 25%</p>
                                </div>
                                <div>
                                    <h3>0</h3>
                                    <p>+ AMOUNT BONUS</p>
                                </div>
                                <div>
                                    <h3>278</h3>
                                    <p>TOTAL TLE</p>
                                </div>
                            </div>

                            {/*======================= make payment button
                            ============================================================== */}
                             <button className='make-payment-btn'> Make Payment <span className='ps-2'> <img src={wallet} alt="" /></span></button>

                             <p className='text-start fs-6 pe-md-5 mt-4'><i>Tokens will appear in your account after payment successfully made and approved by our team. Please note that, SYSPAD token will be distributed after the token sales end-date.</i></p>
                        </div>
                    </Col>

                        {/* ================================right side cards// */}
                    <Col className='col-md-4 text-white'>
                    <div className='left-card-one mt-5'>
                        <h4>Add your wallet address before buy 🡢</h4>
                    </div>

                    {/*================= card two//
                    ==================================== */}
                    <div className='left-card-two bg-primary p-4'>
                        <div className='d-flex align-items-center text-start text-white'>
                            <img className='img-fluid' src={roy} alt="" />
                            <div className='ps-4'>
                                <p>TOKEN BALANCE</p>
                                <h2>0 ROY</h2>
                            </div>
                        </div>
                        
                        <p className='text-start divider'>YOUR CONTRIBUTION IN</p>
                        <div className='d-flex justify-content-between'>
                            <div className='text-start text-white'>
                                <h3>3,555</h3>
                                <small>USD</small>
                            </div>
                            <div className='text-start text-white'>
                                <h3>3,413.51</h3>
                                <small>ETH</small>
                            </div>
                            <div className='text-start text-white'>
                                <h3>0.12</h3>
                                <small>BTC</small>
                            </div>
                        </div>
                    </div>
                    {/*================= card three//
                    ==================================== */}
                    <div className='left-card-two bg-white p-4 text-dark text-start'>
                        <h5 className='text-primary fw-blod'>Token Sales</h5>
                        <small>SYS TOKEN PRICE</small>
                        <h3> 1 SYS = <span className='text-primary'>0.00575 USD</span></h3>
                        <p className='text-start divider-b'>EXCHANGE RATE</p>
                        <h5>1 USD = 0.9615 EUR = 0.8163 GBP</h5>
                        <p className='text-start divider-b'>CURRENT BONUS</p>
                        <div className='d-flex justify-content-between'>
                            <h2> 25%</h2>
                            <small className='text-secondary'>End at <br />30 Jul, 2022</small>
                        </div>
                    </div>
                    {/*=========== card four//
                    ================================== */}
                    <div className='left-card-two bg-white mt-4 text-dark p-2 pt-4 pb-4'>
                       <div className='d-flex align-items-center'>
                           <img src={token} alt="" /> <h3>Token Sales Progress</h3>
                       </div>
                      <Row className='m-0 p-0'>
                          <Col className='col-12 col-md-6'>
                              <div className='sale-card'>
                                  <h3>PAISED AMOUNT</h3>
                                  <p>7,687,454</p>
                              </div>
                          </Col>
                          <Col className='col-12 col-md-6'>
                              <div className='sale-card'>
                                  <h3>TOTAL TOKEN</h3>
                                  <p>9,950,000 SYS</p>
                              </div>
                          </Col>
                      </Row>
                      <p className='sels-end'>SALES END IN</p>
                      <div className='day-counter'>
                            <ul className='timer'>
                            <li><span id="days"></span>DAY</li>
                            <li><span id="hours"></span>HOUR</li>
                            <li><span id="minutes"></span>MIN</li>
                            <li><span id="seconds"></span>SEC</li>
                            </ul>
                     </div>

                    </div>
                    </Col>
                 </Row>
            {/* </Container> */}
            
        </div>
    );
};

export default BuyToken;