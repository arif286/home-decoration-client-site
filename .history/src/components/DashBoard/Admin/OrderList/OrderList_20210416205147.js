import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import OrderListTable from './OrderListTable/OrderListTable';

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
            {/* <OrderListTable orderList={orderList}/> */}
      </div>
    );
};

export default OrderList;