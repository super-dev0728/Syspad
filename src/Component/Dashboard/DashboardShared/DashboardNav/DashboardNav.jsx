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
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
            </div>
            {/* <ul>
                
               
              
              
                
               
            </ul> */}
            <div className='dashboard-nav '>
            <nav className="navbar navbar-expand-lg bg-light px-md-5 py-md-3">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to='' className='list-group-item-action list-group-item'>Dashboard</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='buytoken' className='list-group-item-action list-group-item'>Buy Token</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink to='transactions' className='list-group-item-action list-group-item'>Transactions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='profile' className='list-group-item-action list-group-item'>Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='mytoken' className='list-group-item-action list-group-item'>My Token</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/' className='list-group-item-action list-group-item'>Main Site</NavLink>
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