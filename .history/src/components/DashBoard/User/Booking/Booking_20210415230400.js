import React from "react";
import { Col, Row } from "react-bootstrap";

const Booking = () => {
  return (
    <div>
      <h1>booking</h1>
      <form className="mt-5">
        <Row>
          <Col md={6}>
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Your email"
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Service Name"
            />
            <p>
              <small>Pay With</small>
            </p>
            <p>Your Service charged will be $</p>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Booking;
