import React from "react";
import { Card } from "react-bootstrap";
import testImg from '../../../home-decoration/Image_Icon/Image/Ellipse 90.png';

const TestimonialCard = ({ review }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex">
          <img
            style={{ width: "60px", height: "60px", marginRight: "15px" }}
            src={review.image || testImg}
            alt=""
          />
          <div>
            <h5>{review.name}</h5>
            <p>{review.companyName}</p>
          </div>
        </div>
        <p>{review.Description}</p>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
