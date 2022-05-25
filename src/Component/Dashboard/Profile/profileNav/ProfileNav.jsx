import React from 'react';
// import { NavLink } from 'react-bootstrap';
import './ProfileNav.css'
// import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const ProfileNav = () => {
    return (
        <div>
            <div className='profileNavArea'>
                     
                              {/* <li  className="nav-item "> */}
                                 <NavLink to='' className='inactiveProfile personal-data-btn'>
                                       <span className='text-scondary'>PERSONAL DATA</span>
                                 </NavLink>
                                {/* </li> */}
                                
                                <NavLink to='settings' className={({ isActive }) => (isActive ? 'activeProfile' : 'inactiveProfile')}>
                                       <span className='text-scondary'>SETTINGS</span>
                                 </NavLink>

                                {/* <li  className="nav-item "> */}
                                    <NavLink to='password' className={({ isActive }) => (isActive ? 'activeProfile' : 'inactiveProfile')}>
                                       <span className='text-scondary'>PASSWORD</span>
                                    </NavLink>
                                {/* </li> */}
                     
                            </div>
        </div>
    );
};

export default ProfileNav;

<li className="nav-item ">
<NavLink to='' className='list-group-item-action list-group-item'>Dashboard</NavLink>
</li>