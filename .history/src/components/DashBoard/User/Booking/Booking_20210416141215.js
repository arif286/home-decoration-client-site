import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";



const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookService, setBookService] = useState({});
  console.log(loggedInUser.serviceId);
  useEffect(() => {
    axios
      .get(`https://interior-design-service.herokuapp.com/singleService/${loggedInUser.serviceId}`)
      .then((res) => setBookService(res.data[0]))
      .catch((err) => console.log(err));
  }, [loggedInUser.serviceId]);
  return (
    <div>
      <h1 className='text-center'>Booking</h1>
      <form className="mt-5 p-2">
        <Row className='justify-content-center'>
          <Col md={6}>
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Your email"
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              placeholder="Service Name"
            />
            <p>
              <small>Pay With</small>
            </p>
            <p>Your Service charged will be $</p>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Booking;
