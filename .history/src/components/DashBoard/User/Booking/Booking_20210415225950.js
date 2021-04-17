import React from "react";
import { Col, Row } from "react-bootstrap";

const Booking = () => {
  return (
    <div>
      <h1>booking</h1>
      <form className="mt-5">
        <Row>
          <Col md={7}>
            <input type='text' placeholder='Your Name'/>
            <input type='text' placeholder='Your email'/>
            <input type='text'/>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Booking;
