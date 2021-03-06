import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import plusIcon from '../../Assets/landingPage/plusIcon.png';
import connect from '../../Assets/landingPage/connect.jpg';
import LeaderBoardData from '../LeaderBoardData/LeaderBoardData';
import { Col, Container, Row } from 'react-bootstrap';
const LeaderBoard = () => {
    const [leaderData, setLeaderData] = useState([]);

    useEffect(() => {
        fetch('./leaderBoardData.json')
            .then(res => res.json())
            .then(data => setLeaderData(data))
    })
    return (
        <div>
           <Row className="m-0">
               <Col className="col-md-2 col-0"></Col>
               <Col className='col-md-10 col-12'>
               <div className='banerNav'>
                <div>
                    <Navigation />
                </div>
                <div className='top-two-button'>
                    <div className='topButtonOne'>
                        <button><img src={plusIcon} alt="" />
                            Create New</button>
                    </div>
                    <div className='topButtonTwo'>
                        <button><img src={connect} alt="" />Connect</button>
                    </div>
                </div>
            </div>

            <div className='leaderBoardPage'>
                <div className='pt-5 pb-5 text-white'>
                    <h1>Leaderboard</h1>
                    <p>Top 10 Launchpads on our platform</p>
                </div>
               <Container>
               <div className='allData'>
                {
                    leaderData.map(leaderData => <LeaderBoardData key={leaderData.id} allData={leaderData}></LeaderBoardData>)
                }
                </div>
               </Container>
               
            </div>
               </Col>
           </Row>
        </div>
    );
};

export default LeaderBoard;