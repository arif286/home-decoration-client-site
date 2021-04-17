import axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';


const BookingList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        axios
          .post("http://localhost:5000/order", {
            email: decodedToken.email,
          })
          .then((res) => setOrderList(res.data))
          .catch((err) => console.log(err));
    }, []);
    return (
      <div>
        <h3 className="text-center">Booking List</h3>
        {orderList.length === 0 ? (
          <div>
            <Alert variant="danger">You have no order</Alert>
          </div>
        ) : (
          <Row className="justify-content-lg-around">
            {orderList.map((order, indx) => (
              <Col key={indx} md={6} lg={5} className="pb-4">
                <Card className="shadow">
                  <Card.Body className="d-flex justify-content-between">
                    <img style={{ width: "60px" }} src={order.image} alt="" />
                    <button>{order.status}</button>
                  </Card.Body>
                  <div className="px-3">
                    <h5>{order.serviceName}</h5>
                    <p>{order.text}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
};

export default BookingList;