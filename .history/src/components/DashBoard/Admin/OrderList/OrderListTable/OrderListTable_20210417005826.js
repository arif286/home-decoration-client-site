import React from "react";

const OrderListTable = ({orderList}) => {
    console.log(orderList);
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
          <tr>
            <td>{order.userName}</td>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>credit Card</td>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>Pending</option>
                <option value="2">On going</option>
                <option value="3">Done</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;
