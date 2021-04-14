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
      <Row>
        {reviews.map((review) => (
          <Col>
            <TestimonialCard review={review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
