import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import testImg from '../../../home-decoration/Image_Icon/Image/Ellipse 90.png';

const TestimonialCard = ({ review }) => {
  const star = <FontAwesomeIcon icon={faStar} />
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
        <p className='review-star'>
          <small>{star}</small>
          <small>{star}</small>
          <small>{star}</small>
          <small>{star}</small>
          <small>{star}</small>
        </p>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
