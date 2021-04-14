import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
  return (
    <Card>
          <img src={service.picture} alt="" />
          <h5>{service.title}</h5>
          <h5>${service.price}</h5>
          <p>{service.text}</p>
    </Card>
  );
};

export default ServiceCard;