import React from 'react';
import './DashboardNav.css'
import logo from '../../../Assets/landingPage/NavImg.png'
import { Link, NavLink } from 'react-router-dom';


const DashboardNav = () => {
    return (
        <div>
            <div className='dashboard-appbar'>
                <div className='mx-md-5 appbar-elements'>
                    <div>
                        <Link to='/'><img className='dash-logo' src={logo} alt="" /></Link>
                    </div>
                    <div className='user-name'>
                        <p><span>Welcome!</span> Rafat</p> 
                        <div>
                             <div class="profileIcon" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-user mt-3 fs-4"></i>
                                </div>
                                <ul class="dropdown-menu p-0 w-auto" id='sorting-ul'>
                                    <div className='bg-primary p-3'>
                                       <div className='text-white'>rafat@gmail.com <small style={{fontSize:'13px', color:'#ccc'}}>(uD10950)</small></div>
                                       <small style={{fontSize:'13px', color:'#444'}}>TOKEN BALANCE</small>
                                       <h6 className='text-white fw-bold'>0 SYS</h6>
                                    </div>
                                   <div className='py-2'>
                                      
                                    <li class="dropdown-item"
                                   style={{cursor:'pointer' ,color:"#50b"}}> 
                                      <i class="fa-solid fa-address-card"></i> My Profile
                                    </li>
                                    <li class="dropdown-item"
                                         style={{cursor:'pointer', color:"#50b"}}> 
                                       <i class="fa-solid fa-infinity"></i> Referral
                                    </li>
                                    <li class="dropdown-item"
                                    style={{cursor:'pointer' ,color:"#50b"}}> 
                                     <i class="fa-solid fa-eye"></i>  Activity
                                    </li>
                                    <li class="dropdown-item"
                                    style={{cursor:'pointer' ,color:"#50b"}}> 
                                      <i class="fa-solid fa-power-off"></i>  Logout
                                    </li>
                                   </div>
                                    
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
           
            <div className='dashboard-nav '>
            <nav className="navbar navbar-expand-lg bg-light px-md-5 py-md-1">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fa-solid fa-bars-staggered"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to='' className='list-group-item-action dashboard-btn'><i class="fa-solid fa-layer-group"></i> Dashboard</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='buytoken' className='list-group-item-action list-group-item'><i class="fa-solid fa-database"></i>  Buy Token</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink to='transactions' className='list-group-item-action list-group-item'><i class="fa-solid fa-arrows-turn-to-dots"></i> Transactions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='profile' className='list-group-item-action list-group-item'><i class="fa-solid fa-circle-user"></i> Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='mytoken' className='list-group-item-action list-group-item'><i class="fa-solid fa-hand-holding-dollar"></i> My Token</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className='list-group-item-action list-group-item'><i class="fa-solid fa-house"></i> Main Site</NavLink>
                        </li>
                       
                    </ul>
                    <span className="navbar-text">
                       <NavLink to='kycApplication'><button className='kycbtn'>KYC Application</button></NavLink>
                    </span>
                    </div>
                </div>
                </nav>
                
            </div>
        </div>
    );
};

export default DashboardNav;