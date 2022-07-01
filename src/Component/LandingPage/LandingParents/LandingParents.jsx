
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LandingBanner from '../Banner/LandingBanner';
import WhatisSysPad from '../WhatisSyspad/WhatisSysPad';
const LandingParents = () => {
    return (
        <div className='landing-parents'>
          <Row className="m-0">
              <Col className='col-0 col-md-2'></Col>
              <Col className='col-md-10 col-12'>
              <LandingBanner/>
            <WhatisSysPad/>
            </Col>
          
           </Row>
          </div>
        
    );
};

export default LandingParents;