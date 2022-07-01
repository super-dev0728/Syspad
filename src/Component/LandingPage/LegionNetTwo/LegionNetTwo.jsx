import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import plusIcon from '../../Assets/landingPage/plusIcon.png';
import connect from '../../Assets/landingPage/connect.jpg';
import legionNetLogo from '../../Assets/legionNetwork/legionNetLogo.png';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { Cell, Pie, PieChart } from 'recharts';
import PreSaleTime from '../../Shared/PreSaleTimer/PreSaleTime';

const LegionNetTwo = () => {
    const data = [
        { name: 'Group A', value: 65 },
        { name: 'Group B', value: 80 },
        { name: 'Group C', value: 125 },
        { name: 'Group D', value: 90 },
      ];
      const COLORS = ['#003079', '#0033B6', '#312DFF', '#30A8EC'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {/* {`${(percent * 100).toFixed(0)}%`} */}
            </text>
          );
        };

    return (
     <div>
         <Row className='m-0'>
             <Col className="col-0 col-md-2"></Col>
             <Col className="col-12 col-md-10">
             <div className='LegionNetWork'>
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

            <div className='pb-5 m-3'>
                <div className='name-date-allocation mx-md-5 mx-2 mb-md-4'>
                    <Row className='m-0 mt-5 p-2 p-md-5'>
                        <Col className='col-12 col-md-7'>
                            <div className='legion-Net'>
                                <div className='LegionNetImage'>
                                    <img src={legionNetLogo} alt="" className='img-fluid' />
                                </div>
                                <div className='legionNetText'>
                                    <p>Token Name</p>
                                    <h3>Legion Network</h3>
                                    <small>Legion Network is a project for Ethereum lovers. $LegionNetwork allows crypto investors to earn regular dividends just by holding $LegionNetwork in their wallet. Earn by just holding $LegionNetwork!</small>
                                </div>
                            </div>
                        </Col>
                        <Col className=' col-6 col-md-3 mt-4'>
                            <div className='legionNetText'>
                                <p>Start Date</p>
                                <h5>February 09, 2022</h5>
                            </div>

                        </Col>
                        <Col className='col-6 col-md-2 mt-4' >
                            <div className='legionNetText'>
                                <p>IDO allocation</p>
                                <h5>$200,000</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            {/* second part  */}


            <div className=' backGroundColor'>
                <Row className='m-0 mt-1 mt-md-4 mx-md-5'>
                    <Col className='col-12 col-md-8'>
                        <div className='detailsArea p-3 p-md-4'>
                            <h4>Details</h4>
                            <br />
                            <div className='lorem-ipsum'>
                                <small>Presale Address</small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>
                                    Token Name

                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Token Symbol
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Token Decimals
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Token Address
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Total Supply
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Tokens For Presale
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Tokens For Liquidity
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Presale Rate
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>First Release For Presale
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Vesting For Presale
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Listing Rate
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Initial Market Cap (estimate)
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Soft Cap
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Hard Cap
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Unsold Tokens	Refund
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Presale Start Time
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Presale End Time

                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <br />
                            <div className='lorem-ipsum'>
                                <small>Liquidity Percent
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Liquidity Lockup Time
                                </small>
                                <h6>Lorem ipsum</h6>
                            </div>
                            <div className='lorem-ipsum'>
                                <small>Tokens release each cycle</small>
                                <h6>Lorem ipsum</h6>
                            </div>
                        </div>
                        <div className='detailsArea p-4 mt-3'>
                            <h4>Token Metrics</h4>
                            <div align="center" className='py-2 pb-3'>
                                <PieChart width={200} height={200}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>

                                </PieChart>
                            </div>
                            <div className='chartAllColor'>
                                <div className='chartColorOne'>
                                    <p></p>
                                    <h6 className='mx-1'>Presale</h6>
                                </div>
                                <div className='chartColorTwo'>
                                    <p></p>
                                    <h6 className='mx-1'>Liquiditiy</h6>
                                </div>
                                <div className='chartColorThree'>
                                    <p></p>
                                    <h6 className='mx-1'>Team Vesting</h6>
                                </div>
                                <div className='chartColorFour'>
                                    <p></p>
                                    <h6 className='mx-1'>Unlocked</h6>
                                </div>
                            </div>
                        </div>
                    </Col>


                    <Col className='col-12 col-md-4 ' >
                        <div className='detailsArea  p-4 extraTop' >
                            <h4>Presale Starts In</h4>
                            <br />
                            <PreSaleTime></PreSaleTime>
                            <div>
                                <ProgressBar now={40} className="progressBarLegion mt-4" />
                                <div className='textOfProgress'>
                                    <p>0 SYS</p>
                                    <p>5,00,00,000</p>
                                </div>
                            </div>
                    
                        </div>
                        <div className='detailsArea p-4 mt-3'>
                            <div className='lorem-ipsum p-2'>
                                <small>Status</small>
                                <h6>incoming</h6>
                            </div>
                            <div className='lorem-ipsum p-2'>
                                <small>Current Rate</small>
                                <h6>N/A</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>



        </div>
             </Col>
         </Row>
     </div>
    );
};

export default LegionNetTwo;