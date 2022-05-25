import React from 'react';
import { Col, Row } from 'react-bootstrap';
import image from '../../Assets/leaderBoard/three.png';
import { Link } from 'react-router-dom';
import './LeaderBoardData.css';
const LeaderBoardData = (props) => {
    const { id, name, listingTime, raised } = props.allData;
    return (
        <div>

            <Row className='dataStyle'>
                <Col className=' col-12 col-md-3 id-image'>
                    <h1>{id}</h1>
                    <img src={image} alt="" />

                </Col>
                <Col className='col-12 col-md-3 name-time'>
                    <h6>{name}</h6>
                    <p>{listingTime}</p>

                </Col>
                <Col className='col-12 col-md-3 raised'>
                    <p>Raised: {raised}</p>
                </Col>
                <Col className='col-12 col-md-3 viewDetailButton'>
                    <Link to='/legionnetTwo'>
                        <button>View Detail</button>
                    </Link>

                </Col>
            </Row>

        </div>
    );
};

export default LeaderBoardData;