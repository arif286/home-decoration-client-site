import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Review = () => {
    return (
      <div>
        <h1>Reviews</h1>
        <form className="mt-5">
          <Row>
            <Col md={6}>
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Your name"
              />
            </Col>
          </Row>
        </form>
      </div>
    );
};

export default Review;