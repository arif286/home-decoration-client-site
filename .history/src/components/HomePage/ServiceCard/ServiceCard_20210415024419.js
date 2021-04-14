import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <Card.Body>
        <img src={service.picture} alt="" />
        <h5>{service.title}</h5>
        <h5>${service.price}</h5>
        <p>{service.text}</p>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;