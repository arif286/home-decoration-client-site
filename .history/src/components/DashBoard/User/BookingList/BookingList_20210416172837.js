import axios from 'axios';
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

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
                {
                    <Col></Col>
                }
            </Row>
      </div>
    );
};

export default BookingList;