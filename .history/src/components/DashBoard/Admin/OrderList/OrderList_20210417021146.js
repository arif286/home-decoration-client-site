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

  return (
    <div>
      <h1 className='text-center mb-4'>OrderList</h1>
          {orderList.length === 0 ?
              <h1>No order Place</h1>
      : <OrderListTable orderList={orderList} />}
    </div>
  );
};

export default OrderList;