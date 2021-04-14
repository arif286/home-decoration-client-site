import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const service = [
  {
    title: "Architects",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 220,
  },
  {
    title: "Home Plan",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 120,
  },
  {
    title: "Constructions",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 320,
  },
];
const Service = () => {
  return (
    <Container className="mt-5">
      <p className="text-center">services</p>
      <h3 className="text-center">Our Specializations</h3>
      <Row className="row-cols-1 row-cols-lg-3 row-cols-sm-2">
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Service;
