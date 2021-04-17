import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/orderList")
            .then(res => setOrderList(res.data))
        .catch(err=> console.log(err))
    }, []);
    return (
        <div>
            <h1>OrderList</h1>
        </div>
    );
};

export default OrderList;