import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderListTable from './OrderListTable/OrderListTable';

 const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
    useEffect(() => {
      async function getUser() {
        try {
          const response = await axios.get("http://localhost:5000/orderList");
          console.log(response);
        } catch (error) {
          console.error(error);
        }
        }
        getUser()
  }, []);

  return (
    <div>
      <h1>OrderList</h1>
      <OrderListTable orderList={orderList} />
    </div>
  );
};

export default OrderList;