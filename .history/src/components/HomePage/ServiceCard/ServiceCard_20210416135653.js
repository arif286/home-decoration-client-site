import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServiceCard = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  const handleService = (id) => {
    console.log(id);
    history.push(`/dashBoard/booking/${id}`);
    loggedInUser.serviceId = id;
  };
  return (
    <Card onClick={()=>{handleService(service._id)}} className="text-center">
      <Card.Body>
        <img style={{ width: "90px" }} src={service.image} alt="" />
        <h5 className="mt-3">{service.title}</h5>
        <h5>${service.price}</h5>
        <p>{service.text}</p>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;