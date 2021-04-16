import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
      <div>
        <form className="mt-5">
          <Row className="">
            <Col md={8} lg={6}>
              <Card.Body>
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <button className="admin-button" type="submit">
                  Submit
                </button>
              </Card.Body>
            </Col>
          </Row>
        </form>
      </div>
    );
};

export default MakeAdmin;