import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import navConnectImg from '../../Assets/landingPage/conectWhiteIcon.png';
import navImage from '../../Assets/landingPage/NavImg.png';
import './DocNavigation.css';


const DocNavigation = () => {
    return (
        <div>
            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>



                    <ul id="docMenu">
                        <div className='pe-5'>
                            <div className='navImgStyle'>
                                <Link to='/'><img src={navImage} alt="" /></Link>
                                <h2>SYSPAD</h2>
                            </div>

                        </div>
                        <div>
                            <select className='DocVersion'>
                                <option className='input-option-field text-dark' value="typeOne">Latest v5.0</option>
                                <option className='input-option-field text-dark' value="TypeTwo">v 4.6.2</option>
                                <option className='input-option-field text-dark' value="Three">v 4.6.1</option>
                                <option className='input-option-field text-dark' value="four">v 4.6</option>
                                <option className='input-option-field text-dark' value="five">v 4.5.2</option>
                                <option className='input-option-field text-dark' value="six">v 4.5.1</option>
                                <option className='input-option-field text-dark' value="seven">v 4.5</option>
                                <option className='input-option-field text-dark' value="eight">v 4.4.2</option>
                                <option className='input-option-field text-dark' value="none">v 4.4.1</option>
                                <option className='input-option-field text-dark' value="ten">v 4.4</option>
                                <option className='input-option-field text-dark' value="eleven">v 4.3.2</option>
                                <option className='input-option-field text-dark' value="twelve">v 4.3.1</option>
                                <option className='input-option-field text-dark' value="thirteen">v 4.3</option>
                                <option className='input-option-field text-dark' value="fourteeen">v 4.2</option>
                                <option className='input-option-field text-dark' value="fifteen">v 4.1</option>
                                <option className='input-option-field text-dark' value="sixteen">v 3.6</option>
                            </select>
                        </div>
                        <div className='DocAllList'>
                            <p className='text-white mt-4'>Introducing</p>
                        <Link to=''><li>Token Metrics</li></Link>
                        <Link to=''><li>Token Utility</li></Link>
                        <Link to=''><li>Disaster recovery</li></Link>
                        <Link to=''><li>Roadmap</li></Link>
                        <Link to=''><li>Service Fees</li></Link>
                        <Link to=''><li>Control Center</li></Link>
                        <Link to=''><li>Create a Standard Token</li></Link>
                        <Link to=''><li>Create a Launchpad</li></Link>
                        <Link to=''><li>Finalize a Launchpad</li></Link>
                        <Link to=''><li>Presale Cancellation</li></Link>
                        </div>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default DocNavigation;