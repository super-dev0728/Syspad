import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuyToken from './BuyToken/BuyToken';
import DashboardMain from './DashboardMain/DashboardMain';
import DashboardNav from './DashboardShared/DashboardNav/DashboardNav';
import KycApplication from './KycApplication/KycApplication';
import MyToken from './MyToken/MyToken';
import Profile from './Profile/Profile';
import Transactions from './Transactions/Transactions';

const Dashboard = () => {
    return (
        <div>
            <DashboardNav/>
            <Routes>
             <Route path="" element={<DashboardMain />} />
             <Route path="buytoken" element={<BuyToken/>} />
             <Route path="transactions" element={<Transactions/>} />
             <Route path="profile" element={<Profile/>} />
             <Route path="mytoken" element={<MyToken/>} />
             <Route path="kycApplication" element={<KycApplication/>} />
            </Routes>
        </div>
    );
};

export default Dashboard;