import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://interior-design-service.herokuapp.com/setReview")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-5">
      <h1 className="text-center">Testimonials</h1>
      <Row className="row-cols-1 row-cols-md-3 row-cols-sm-2 mt-5">
        {reviews.map((review, index) => (
          <Col key={index} className='pb-4'>
            <TestimonialCard review={review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
