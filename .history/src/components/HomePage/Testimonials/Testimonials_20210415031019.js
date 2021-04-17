import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import reviewsImg from "../../../home-decoration/Image_Icon/Image/Ellipse 90.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimony = [
  {
    name: "Nash Patrik",
    company: "ceo, Manpol",
    picture: reviewsImg,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Nash Patrik",
    company: "ceo, Manpol",
    picture: reviewsImg,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
  {
    name: "Nash Patrik",
    company: "ceo, Manpol",
    picture: reviewsImg,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];
const Testimonials = () => {
  const [reviews, setReviews] = useState(testimony);
  return (
    <Container className="mt-5">
      <h1 className="text-center">Testimonials</h1>
      <Row className="row-cols-1 row-cols-md-3 row-cols-sm-2 mt-5">
        {reviews.map((review) => (
          <Col className='pb-4'>
            <TestimonialCard review={review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
