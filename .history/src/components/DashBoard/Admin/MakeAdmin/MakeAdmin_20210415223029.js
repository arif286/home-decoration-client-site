import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
      <div>
        <form className='mt-5'>
          <Row className='justify-content-center'>
            <Col md={7}>
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="example@gmail.com"
              />
              <button className="admin-button" type="submit">
                Submit
              </button>
            </Col>
          </Row>
        </form>
      </div>
    );
};

export default MakeAdmin;