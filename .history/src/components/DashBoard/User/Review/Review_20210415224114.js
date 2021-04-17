import React from "react";
import { Col, Row } from "react-bootstrap";
import './Review.css';
const Review = () => {
  return (
    <div>
      <h1>Reviews</h1>
      <form className="mt-5 review-form">
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
              placeholder="Company's name, Designation"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Description"
            />
            <button className='admin-button' type="submit">submit</button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Review;
