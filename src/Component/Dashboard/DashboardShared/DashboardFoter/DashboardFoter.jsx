import React from 'react';
import './DashboardFooter.css'

const DashboardFoter = () => {
    return (
        <div className='dashboaard-footer mx-2 px-md-5 pt-5 mt-5'>
           <p>© 2022 SYSPAD. All Right Reserved</p>
           <div>
               <ul>
                   <a href=""><li>How to buy</li></a>
                   <a href=""><li>FAQ</li></a>
                   <a href=""><li>Privacy and Policy</li></a>
                   <a href=""><li>Terms and condition</li></a>
               </ul>
           </div>
        </div>
    );
};

export default DashboardFoter;