import React from "react";
import { Card } from "react-bootstrap";

const TestimonialCard = ({ review }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex">
          <img style={{ width: "60px", height:'60px', marginRight:'15px' }} src={review.picture} alt="" />
          <div>
            <h5>{review.name}</h5>
            <p>{review.company}</p>
          </div>
        </div>
        <p>{review.text}</p>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
