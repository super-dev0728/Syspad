import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Password = () => {
    return (
        <div className='mt-3 presonalData'>
            <Row className='m-0'>
                <Col className="col-12 col-md-6">
                    <h5>Old Password</h5>
                    <input type="password" />
                </Col>
                <Col className='col-md-6'></Col>
                <hr className='passwprdHr' />
                <Col className="col-12 col-md-6">
                    <h5>New Password</h5>
                    <input type="password" />
                </Col>
                <Col className="col-12 col-md-6">
                    <h5>Confirm New Password</h5>
                    <input type="password" />
                </Col>
                <div className='mt-5 text-info'>
                    <p><i class="fa-solid fa-circle-info me-3"></i> Password should be a minimum of 6 digits and include lower and uppercase letter.

                    </p>
                    <p><i class="fa-solid fa-circle-info me-3"></i>Your password will only change after your confirmation by email.</p>
                </div>

                <div className='buyMoreBtn mt-5 mx-2'>
                    <button>Update Profile <i class="fa-solid fa-floppy-disk mx-1"></i></button>
                </div>
            </Row>
        </div>
    );
};

export default Password;