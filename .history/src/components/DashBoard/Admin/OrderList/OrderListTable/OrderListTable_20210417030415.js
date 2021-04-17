// import axios from "axios";
import React from "react";

const OrderListTable = ({ orderList }) => {
  console.log(orderList);
  const handleChange = (e) => {
    console.log(e.target.value);
    // axios.patch("/https://interior-design-service.herokuapp.com/updateStatus")
    //     .then(res => console.log(res.data))
    // .catch(err=> console.log(err))
  };
  const handleUpdate = (id,e) => {
    console.log(id,e);
  };
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Email Id
          </th>
          <th className="text-secondary" scope="col">
            Service
          </th>
          <th className="text-secondary" scope="col">
            pay with
          </th>
          <th className="text-secondary" scope="col">
            status
          </th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order, index) => (
          <tr key={index}>
            <td>{order.userName}</td>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>credit Card</td>
            <td>
              <select
                onChange={() => {
                  handleUpdate(order._id,Event);
                }}
                // onChange={handleChange}
                className="form-select"
                aria-label="Default select example"
              >
                <option value={order.status}>Pending</option>
                <option value="On going">On going</option>
                <option value="Done">Done</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;
