import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Documentation from './Component/Documentation/Documentation';
import KycAudit from './Component/KYC/KycAudit';
import LandingParents from './Component/LandingPage/LandingParents/LandingParents';
import CreateLanchPad from './Component/Launchpads/CreateLanchPad/CreateLanchPad';
import Step2 from './Component/Launchpads/CreateLanchPad/Step2/Step2';
import Step3 from './Component/Launchpads/CreateLanchPad/Step3/Step3';
import Step4 from './Component/Launchpads/CreateLanchPad/Step4/Step4';
import TokenStepOne from './Component/Launchpads/CreateToken/TokenStepOne/TokenStepOne';
import LaunchPadList from './Component/Launchpads/LaunchPadList/LaunchPadList';
import LaunchPadsParents from './Component/Launchpads/LaunchpadsParents/LaunchPadsParents';
import LeaderBoard from './Component/LeaderBoard/LeaderBoard/LeaderBoard';

import BuyToken from './Component/Dashboard/BuyToken/BuyToken';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardMain from './Component/Dashboard/DashboardMain/DashboardMain';
import MyToken from './Component/Dashboard/MyToken/MyToken';
import Profile from './Component/Dashboard/Profile/Profile';
import Transactions from './Component/Dashboard/Transactions/Transactions';
import KycApplication from './Component/Dashboard/KycApplication/KycApplication';

function App() {
  return ( <
    div className = "App" >

    <
    Routes >
    <
    Route path = "/"
    element = {
      <
      LandingParents / >
    }
    /> <
    Route path = "/home"
    element = {
      <
      LandingParents / >
    }
    /> <
    Route path = "/leaderboard"
    element = {
      <
      LeaderBoard / >
    }
    /> <
    Route path = "/kycaudit"
    element = {
      <
      KycAudit / >
    }
    /> <
    Route path = "/documentation"
    element = {
      <
      Documentation / >
    }
    /> <
    Route path = "/launchpad"
    element = {
      <
      LaunchPadsParents / >
    }
    /> <
    Route path = "/CreateLanchPad"
    element = {
      <
      CreateLanchPad / >
    }
    /> <
    Route path = "/launchPadList"
    element = {
      <
      LaunchPadList / >
    }
    /> <
    Route path = "/Step2"
    element = {
      <
      Step2 / >
    }
    /> <
    Route path = "/Step3"
    element = {
      <
      Step3 / >
    }
    /> <
    Route path = "/Step4"
    element = {
      <
      Step4 / >
    }
    /> <
    Route path = "createToken"
    element = {
      <
      TokenStepOne / >
    }
    />

    <
    Route path = "dashboard"
    element = {
      <
      Dashboard / >
    } >
    <
    Route path = ''
    element = {
      <
      DashboardMain / >
    }
    /> <
    Route path = "buytoken"
    element = {
      <
      BuyToken / >
    }
    /> <
    Route path = "transactions"
    element = {
      <
      Transactions / >
    }
    /> <
    Route path = "profile"
    element = {
      <
      Profile / >
    }
    /> <
    Route path = "mytoken"
    element = {
      <
      MyToken / >
    }
    /> <
    Route path = "kycApplication"
    element = {
      <
      KycApplication / >
    }
    /> < /
    Route >


    <
    /Routes>

    <
    /div> 
  );
}

export default App;