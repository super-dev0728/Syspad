/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState, useCallback } from "react";
import Navigation from '../../Shared/Navigation/Navigation';
import plusIcon from '../../Assets/landingPage/plusIcon.png';
import connect from '../../Assets/landingPage/connect.jpg';
import legionNetLogo from '../../Assets/legionNetwork/legionNetLogo.png';
import './LegionNetwork.css';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import { Cell, Pie, PieChart } from 'recharts';
import PreSaleTime from '../../Shared/PreSaleTimer/PreSaleTime';

import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import abi from '../../../artifacts/Presale_abi.json';

const LegionNetwork = () => {
    const [wallet, updateWallet] =  useState(null);
    const [address, setAddress] = useState(null);
    const [isOwner, setOwner] = useState(false);
    const [endICO, setEndICO] = useState(0);
    const [isStart, startPresale] = useState(false);
    const [buyAmnt, setBuyAmount] = useState(0);
    const [rate, setRate] = useState(1);
    const [contribution, setContribution] = useState(0);
    const [presalePercent, setPercent] = useState(0);
    const [raisedBalance, setRaised] = useState(0);
    const [canWithdraw, setWithdraw] = useState(false);
    const [availableTokens, setAvailableTokens] = useState(0);

    let { ethereum } = window;
    let contract = null;

    let contractAddress = "0xC2862F35C32ccc1Af130Ea564850757dAC83CFcC"
    let _minPurchase = 1;
    let _maxPurchase = 10;
    let _softCap = 5;
    let _hardCap = 10;

    useEffect(async () => {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)    
        const signer = provider.getSigner()
        const walletAddress = await signer.getAddress();
        const tempwallet = walletAddress.slice(0, 5) + "..." + walletAddress.slice(-3)
        setAddress(tempwallet)
        updateWallet(walletAddress)

        if(ethereum) {
            let provider = new ethers.providers.Web3Provider(ethereum);
            let signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, abi, signer);
    
            const endtime = await contract.endICO()
            setEndICO(parseInt(endtime))

            let currentTime = await contract.getBlockTimestamp()
            if(endICO < parseInt(currentTime)) {
                startPresale(false)
            } else {
                startPresale(true)
            }

            contract._rate().then((result)=>{
                setRate(result.toString())
            }).catch('error', console.error)

            contract.owner().then((result)=>{
                if(result === wallet) setOwner(true)
            }).catch('error', console.error)

            contract.checkContribution(wallet).then((result)=>{
                setContribution(parseInt(result.toString()))
            }).catch('error', console.error)

            contract.weiRaised().then((result)=>{
                setRaised(result.toString()/(10**18))
                setPercent((result.toString()/ethers.utils.parseEther(_hardCap.toString()))*100)
            }).catch('error', console.error)

            contract.availableTokensICO().then((result)=>{
                setAvailableTokens(result.toString()/(10**18))
            }).catch('error', console.error)
        }

        if((raisedBalance > _softCap)&&(!startPresale)) {
            setWithdraw(true)
        }
    });

    async function startICO() { 
        let current = await contract.getBlockTimestamp()
        let endDate = parseInt(current) + 36000

        const transaction = await contract.startICO(endDate, ethers.utils.parseEther(_minPurchase.toString()), ethers.utils.parseEther(_maxPurchase.toString()), ethers.utils.parseEther(_softCap.toString()), ethers.utils.parseEther(_hardCap.toString()))
        let tx = await transaction.wait()

        if(tx.status === 1) alert('Presale started!')
    }

    async function stopICO() {
        const transaction = await contract.stopICO()
        let tx = await transaction.wait()

        if(tx.status === 1) alert('Presale stoped!')
    }

    async function buyTokens() {
        if(buyAmnt/100 > 0) {
            if(buyAmnt/100 > _maxPurchase) {
                alert('cannot buy more than: 4 SYS.')    
            } else if (buyAmnt/100 < _minPurchase) {
                alert('cannot buy less than: 1 SYS.')    
            } else {
                const transaction = await contract.buyTokens(wallet, {value:ethers.utils.parseEther((buyAmnt/100).toString())})
                let tx = await transaction.wait()

                if(tx.status === 1) alert('Buy tokens!')
            }
        } else {
            alert('You must input bigger than 0.')
        }
    }

    async function claimTokens() {
        const transaction = await contract.claimTokens()
        let tx = await transaction.wait()
    }

    async function withdraw() {
        const transaction = await contract.withdraw()
        let tx = await transaction.wait()

        if(tx.status === 1) alert('Successfully withdrawn!')
    }

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
                            {!(wallet) && (
                            <a className="btn ml-lg-auto">
                                <img src={connect} alt="" /> Connect
                            </a>
                            )}
                            {(wallet) && (
                            <a className="btn ml-lg-auto">
                                <img src={connect} alt="" />
                                {address}
                            </a>
                            )}
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
                        <Row className='m-0 mt-2 mt-md-4 mx-md-5'>
                            <Col className='col-12 col-md-8'>
                                <div className='detailsArea p-3 p-md-4'>
                                    <h4>Details</h4>
                                    <br />
                                    <div className='lorem-ipsum'>
                                        <small>Presale Address</small>
                                        <h6>{contractAddress}</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>
                                            Token Name
                                        </small>
                                        <h6>GOODSHIT</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Token Symbol
                                        </small>
                                        <h6>GOODSHIT</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Token Decimals
                                        </small>
                                        <h6>18</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Token Address
                                        </small>
                                        <h6>0x04fd3610ff1bbd900f807f6ebe954738417c32e6</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Total Supply
                                        </small>
                                        <h6>1,000,000,000</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Tokens For Presale
                                        </small>
                                        <h6>{availableTokens}</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Tokens For Liquidity
                                        </small>
                                        <h6>Lorem ipsum</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Presale Rate
                                        </small>
                                        <h6>{rate}</h6>
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
                                        <h6>{_softCap} SYS</h6>
                                    </div>
                                    <div className='lorem-ipsum'>
                                        <small>Hard Cap
                                        </small>
                                        <h6>{_hardCap} SYS</h6>
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
                                    {(isStart) && (
                                        <h4>Presale Ends In</h4>
                                    )}

                                    {(!isStart) && (
                                        <h4>Presale Starts In</h4>
                                    )}
                                    
                                    <br />
                                    <PreSaleTime></PreSaleTime>
                                    <div>
                                        <ProgressBar now={presalePercent} className="progressBarLegion mt-4" />
                                        <div className='textOfProgress'>
                                            <p>{raisedBalance} SYS</p>
                                            <p>{_hardCap} SYS</p>
                                        </div>
                                    </div>
                                    <div className='legionAmount'>
                                        <h5 style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>Amount</h5>
                                        <input type="text" value={buyAmnt} name="amount" className='px-3 text-white' onChange={(e) => setBuyAmount(e.target.value)} required />
                                    </div>
                                    <br />
                                    
                                    {(isOwner && !isStart) && (
                                        <>
                                            <div className='LegionbuyNow'>
                                                <button className='success' onClick={startICO}>start presale</button>
                                            </div>
                                            <br/>
                                        </>
                                    )}

                                    {(isOwner) && (
                                        <>
                                            <div className='LegionbuyNow'>
                                                <button className='success' onClick={withdraw}>withdraw Money</button>
                                            </div>
                                            <br/>
                                        </>
                                    )}

                                    {(isOwner && isStart) && (
                                        <>
                                            <div className='LegionbuyNow'>
                                                <button className='danger' onClick={stopICO}>stop presale</button>
                                            </div>
                                            <br/>
                                        </>
                                    )}

                                    {(!isStart &&(contribution > 0)) && (
                                        <>
                                            <div className='LegionbuyNow'>
                                                <button className='warning' onClick={claimTokens}>claim Tokens</button>
                                            </div>
                                            <br/>
                                            
                                        </>
                                    )}

                                    <div className='LegionbuyNow'>
                                        <button onClick={buyTokens}>Buy Now 🡢</button>
                                    </div>


                                </div>
                                <div className='detailsArea p-4 mt-3'>
                                    <div className='lorem-ipsum p-2'>
                                        <small>Status</small>
                                        {(isStart) && (
                                            <h6>Inprogress</h6>
                                        )}
                                        {(!isStart) && (
                                            <h6>Ended</h6>
                                        )}
                                    </div>
                                    <div className='lorem-ipsum p-2'>
                                        <small>Current Rate</small>
                                        <h6>{rate}</h6>
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

export default LegionNetwork;