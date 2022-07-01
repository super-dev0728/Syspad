import { Box } from '@mui/material';
import plusIcon from '../../../Assets/landingPage/plusIcon.png'
import connect from '../../../Assets/landingPage/connect.jpg'
import React from 'react';
import { useState } from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Navigation from '../../../Shared/Navigation/Navigation';

// for token deploy
// import { expect } from "chai";
import { ethers } from 'ethers';
import contract_abi from '../../../../artifacts/Token_abi.json';
import contract_meta from '../../../../artifacts/Token_bytecode.json';


const TokenStepOne = () => {
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [decimal, setDecimal] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [connectedAccount, setConnectedAccount] = useState(null);
    // const wallet_address = "0xfD2Bd27E15F05A97865441AcfefDcA2842D3192C";

    const createToken = async (event) => {
      event.preventDefault();

      const contract_bytecode = '0x' + contract_meta.object;
      
      if (typeof  window.ethereum !== undefined) {
        await window.ethereum.enable();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        
        const factory = new ethers.ContractFactory(contract_abi, contract_bytecode, signer);
        const contract = await factory.deploy(tokenName, tokenSymbol, totalSupply, decimal);

        console.log("Token mint: " + new Date().toLocaleString());
        console.log("Tx hash: " + contract.deployTransaction.hash);
    
        await contract.deployed();
        console.log("Contract address: " + contract.address);
      }
      // const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
      // const signer = provider.getSigner();

      // const factory = new ethers.ContractFactory(contract_abi, contract_bytecode, signer);

      // const contract = await factory.deploy(wallet_address, tokenName, tokenSymbol, totalSupply, decimal);

      // console.log("Token mint: " + new Date().toLocaleString());
      // console.log("Tx hash: " + contract.deployTransaction.hash);
  
      // await contract.deployed();
      // console.log("Contract address: " + contract.address);
    };

    const wallet_account = localStorage.getItem("setAddress");

    return (
      <div>
        <Row className='m-0'>
          <Col className="col-0 col-md-2"></Col>
          <Col className="col-12 col-md-10">
            <div className='create-launch'>
              {/* --------------nav bar */}
              <div className='banerNav'>
                  <div>
                      <Navigation/>
                  </div>
                  <div className='top-two-button'>
                    <div className='topButtonOne'>
                      <button><img src={plusIcon} alt="" />Create New</button>
                    </div>
                    <div className='topButtonTwo'>
                      {!(connectedAccount || wallet_account) && (
                        <a className="btn ml-lg-auto">
                          <img src={connect} alt="" /> Connect
                        </a>
                      )}
                      {(connectedAccount || wallet_account) && (
                        <a className="btn ml-lg-auto">
                          <img src={connect} alt="" />
                          {connectedAccount || wallet_account}
                        </a>
                      )}
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
                            <small style={{ fontSize:'10px' }}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                  </div>

                  <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>02</span>
                      <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{fontSize:'10px'}}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                  </div>

                  <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>03</span>
                      <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'10px' }}>Enter the token address and verify</small>
                    </div>
                    <span className='dot-line ms-2'></span>  
                  </div>

                  <div className='launch-lavel inactive-text'>
                    <span className='launchNum in-active'>04</span>
                      <div className='lavel-text'>
                            <h4>Verify Token</h4>
                            <small style={{ fontSize:'10px' }}>Enter the token address and verify</small>
                    </div>
                    {/* <span className='dot-line ms-2'></span>   */}
                  </div>
                </div>
              </Box>

              <Container>
                <div className='lavel-form-wraper'>
                  <form className='lavel-form'>
                    <div className='pb-2'>
                      <div className='input-head'><p>Token Type*</p></div>
                      <select  className='field-100'>
                        <option className='input-option-field text-dark' value="typeOne">Starndard Token</option>
                        <option className='input-option-field text-dark' value="TypeTwo">Basic Token</option>
                        <option className='input-option-field text-dark' value="TypeThree">Normal Token</option>
                      </select>
                      <span className='text-secondary'>Fee: 0.01 SYS</span>
                    </div>

                    <div className='pb-2'>
                      <div className='input-head'><p>Token Name*</p></div>
                      <input className='field-100' type="Your Coin Name" placeholder='URL' value={tokenName} onChange={(e) => setTokenName(e.target.value)} required/>
                    </div>

                    <div className='pb-2'>
                      <div className='input-head'><p>Token Symbol*</p></div>
                      <input className='field-100' type="text" placeholder='Your Symbol' value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} required/>
                    </div>

                    <div className='pb-2'>
                      <div className='input-head'><p>Decimals*</p></div>
                      <input className='field-100' type="text" placeholder='Decimals' value={decimal} onChange={(e) => setDecimal(e.target.value)} required/>
                    </div>

                    <div className='pb-2'>
                      <div className='input-head'><p>Total Supply*</p></div>
                      <input className='field-100' type="Number" placeholder='0' value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} required/>
                    </div>
                        
                    <div className='d-flex justify-content-center'>
                      {/* <Link to ='/Step2'> <button className='continue-btn'>← Back</button></Link> */}
                      {/* <span className='m-3'></span> */}
                      <button className='continue-btn' onClick={createToken}>Create Token →</button>
                    </div>
                  </form>
                </div>
              </Container> 
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default TokenStepOne;