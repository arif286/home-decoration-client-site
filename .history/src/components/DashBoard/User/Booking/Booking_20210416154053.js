import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ServiceContext, UserContext } from "../../../../App";
import creditCard from "../../../../home-decoration/Image_Icon/Icon/credit-card 1.png";
import Payment from "../Payment/Payment";

const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userService, setUserService] = useContext(ServiceContext);
  const [bookService, setBookService] = useState({});
  console.log(loggedInUser);

  useEffect(() => {
    axios
      .get(`https://interior-design-service.herokuapp.com/singleService/${userService.serviceId}`)
      .then((res) => setBookService(res.data[0]))
      .catch((err) => console.log(err));
  }, [userService.serviceId]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const handlePayment = () => {};
  return (
    <div>
      <h1 className="text-center">Booking</h1>

      <Row className="justify-content-center">
        <Col md={6}>
          <form nSubmit={(e) => e.preventDefault()} className="mt-5 p-2">
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={loggedInUser.name}
              placeholder="Your Name"
              {...register("userName", { required: true })}
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="email"
              placeholder="Your email"
              defaultValue={loggedInUser.email}
              {...register("email", { required: true })}
            />
            <input
              style={{ marginBottom: "20px" }}
              className="form-control"
              type="text"
              defaultValue={bookService.title}
              placeholder="Service Name"
              {...register("serviceName", { required: true })}
            />
          </form>
          <div className="d-flex">
            <small style={{ marginRight: "20px" }}>Pay With</small>
            <div className="form-check">
              <input
                onClick={handleSubmit(onSubmit)}
                className="form-check-input"
                type="radio"
              />
              <img style={{ width: "25px" }} src={creditCard} alt="" />
            </div>
          </div>
          <Payment handlePayment={handlePayment} />
          <p>Your Service charged will be ${bookService.price}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
