import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderListTable from './OrderListTable/OrderListTable';

 const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
    useEffect(() => {
      async function getUser() {
        try {
          const response = await axios.get("http://localhost:5000/orderList");
           setOrderList(response.data);
        } catch (error) {
          console.error(error);
        }
        }
        getUser()
  }, []);
 console.log(orderList)
  return (
    <div>
      <h1>OrderList</h1>
      {<OrderListTable orderList={orderList} />}
    </div>
  );
};

export default OrderList;