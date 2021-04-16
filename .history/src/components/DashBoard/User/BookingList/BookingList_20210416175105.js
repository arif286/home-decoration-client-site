import axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BookingList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        // console.log(decodedToken)
        axios
          .post("http://localhost:5000/orderList", {
            email: decodedToken.email,
          })
          .then((res) => setOrderList(res.data))
          .catch((err) => console.log(err));
    }, []);
    return (
      <div>
        <h1>Service List</h1>
        <Row>
          {orderList.map((order) => (
            <Col md={6} className="pb-4">
              <Card className="shadow">
                <Card.Body className="d-flex justify-content-between">
                  <img style={{ width: "60px" }} src={order.image} alt="" />
                  <button>{order.status}</button>
                </Card.Body>
                <div className='p-3'>
                  <h5>{order.serviceName}</h5>
                  <p>{order.text}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default BookingList;