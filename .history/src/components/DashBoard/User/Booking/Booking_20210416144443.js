import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { UserContext } from "../../../../App";
import Payment from "../Payment/Payment";



const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookService, setBookService] = useState({});
  console.log(loggedInUser);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/singleService/${loggedInUser.serviceId}`)
      .then((res) => setBookService(res.data[0]))
      .catch((err) => console.log(err));
  }, [loggedInUser.serviceId]);

  const handlePayment = ()=>{

  }
  return (
    <div>
      <h1 className="text-center">Booking</h1>
      <form className="mt-5 p-2">
        <Row className="justify-content-center">
          <Col md={6}>
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={loggedInUser.displayName}
              placeholder="Your Name"
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="email"
              placeholder="Your email"
              defaultValue={loggedInUser.email}
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={bookService.title}
              placeholder="Service Name"
            />
            <p>
              <small>Pay With</small>
            </p>
            <Payment handlePayment={handlePayment}/>
            <p>Your Service charged will be ${bookService.price}</p>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Booking;