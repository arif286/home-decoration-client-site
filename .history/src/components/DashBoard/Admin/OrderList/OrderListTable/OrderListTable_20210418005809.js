import axios from "axios";
import React, { useState } from "react";

const OrderListTable = ({ orderList }) => {
    const [updateService, setUpdateService] = useState(null);
    const handleChange = (e) => {
            const service = { status: e.target.value };
            setUpdateService(service);
    };
    const handleUpdate = async (id) => {
        console.log(id);
        if (updateService !== null) {
             try {
               const res = await axios.patch(
                 `https://interior-design-service.herokuapp.com/updateStatus/${id}`,
                 updateService || "pending"
               );
               console.log(res.data);
             } catch (error) {
               console.log(error);
             }
        }

    }

  return (
    <table className="table table-borderless">
      <thead style={{ backgroundColor: "#F5F6FA", borderRadius:'10px'}}>
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
                onBlur={() => {
                  handleUpdate(order._id);
                }}
                onChange={handleChange}
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
