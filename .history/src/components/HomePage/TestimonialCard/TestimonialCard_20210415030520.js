import React from "react";
import { Card } from "react-bootstrap";

const TestimonialCard = ({ review }) => {
  return (
    <Card>
      <div>
        <img style={{width:'80px'}} src={review.picture} alt="" />
        <div>
          <h5>{review.name}</h5>
          <p>{review.company}</p>
        </div>
      </div>
      <p>{review.text}</p>
    </Card>
  );
};

export default TestimonialCard;
