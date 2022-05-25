
import React from 'react';
// import { Container } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import plusIcon from '../../Assets/landingPage/plusIcon.png'
import connect from '../../Assets/landingPage/connect.jpg'
import Step1 from './Step1/Step1';
// import Step2 from './Step1/Step1';
import './CreateLanchPad.css'
// import { Link } from 'react-router-dom';
// import { Step } from 'react-form-stepper';

const CreateLanchPad = () => {

  return (
    <div>
       <div className='create-launch'>
           <div>
            {/* --------------nav bar */}
           <div className='banerNav'>
                <div>
                    <Navigation/>
                </div>
                <div className='top-two-button'>
                <div className='topButtonOne'>
                        <button><img src={plusIcon} alt="" />
                            Create New</button>
                    </div>
                    <div className='topButtonTwo'>
                        <button><img src={connect} alt="" /> Connect</button>
                    </div>
                </div>
            </div>
  {/* --------------nav bar end */}

  {/* ------------------stepper start------------- */}
      <Step1/>
  {/* ------------------stepper end------------- */}

        </div>
      </div>
    </div>
  );
};

export default CreateLanchPad;