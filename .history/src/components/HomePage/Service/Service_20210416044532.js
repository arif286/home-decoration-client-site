import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://interior-design-service.herokuapp.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-5">
      <p className="text-center">services</p>
      <h3 className="text-center mb-5">Our Specializations</h3>
      <Row className="row-cols-1 row-cols-lg-3 row-cols-sm-2">
        {services.map((service,indx) => (
          <Col className="pb-4">
            <ServiceCard key='indx' service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;
