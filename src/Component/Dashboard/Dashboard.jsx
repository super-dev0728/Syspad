import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardNav from './DashboardShared/DashboardNav/DashboardNav';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav/>
            
            <Outlet/>
        </div>
    );
};

export default Dashboard;