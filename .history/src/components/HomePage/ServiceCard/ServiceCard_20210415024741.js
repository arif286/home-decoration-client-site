import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
  return (
    <Card className='text-center'>
      <Card.Body>
        <img style={{width:'90px', }} src={service.picture} alt="" />
        <h5 className='mt-3'>{service.title}</h5>
        <h5>${service.price}</h5>
        <p>{service.text}</p>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;