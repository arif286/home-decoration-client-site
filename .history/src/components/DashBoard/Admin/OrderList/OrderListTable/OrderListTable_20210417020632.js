import React from "react";
import { useForm } from "react-hook-form";

const OrderListTable = ({orderList}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
          <tr>
            <td>{order.userName}</td>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>credit Card</td>
            <td>
              <select
                {...register("status", { required: true })}
                onBlur={handleSubmit(onSubmit)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="Pending">Pending</option>
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
