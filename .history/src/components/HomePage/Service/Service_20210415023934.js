import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import architect from '../../../home-decoration/Image_Icon/Icon/architect.svg';
import home from '../../../home-decoration/Image_Icon/Icon/home.svg';
import winch from '../../../home-decoration/Image_Icon/Icon/winch.svg';
import ServiceCard from "../ServiceCard/ServiceCard";

const interiorService = [
  {
    title: "Architects",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 220,
    picture: architect,
  },
  {
    title: "Home Plan",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 120,
    picture: home,
  },
  {
    title: "Constructions",
    text:
      "Consectetur Lorem ipsum dolor sit ame consectetur adipisicing elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing elit. quis nostrud exercitation ullamco laboris nisi ut.",
    price: 320,
    picture: winch,
  },
];
const Service = () => {
    const [services, setServices] = useState(interiorService);
  return (
    <Container className="mt-5">
      <p className="text-center">services</p>
      <h3 className="text-center">Our Specializations</h3>
      <Row className="row-cols-1 row-cols-lg-3 row-cols-sm-2">
        {
                  services.map(service =>
                      <Col>
                          <ServiceCard service={service}/>
                      </Col>
                    )
        }
      </Row>
    </Container>
  );
};

export default Service;
