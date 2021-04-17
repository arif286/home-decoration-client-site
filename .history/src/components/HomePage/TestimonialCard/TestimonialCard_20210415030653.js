import React from "react";
import { Card } from "react-bootstrap";

const TestimonialCard = ({ review }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <img style={{ width: "70px", height:'70px', marginRight:'10px' }} src={review.picture} alt="" />
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
