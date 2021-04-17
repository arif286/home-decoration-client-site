import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from 'react';

const ManageServiceTable = ({ services }) => {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

    const handleDelate = () => {
        axios.delete
    };
    return (
      <table className="table table-borderless">
        <thead>
          <tr>
            <th className="text-secondary" scope="col">
              Sr. No
            </th>
            <th className="text-secondary" scope="col">
              Service Name
            </th>
            <th className="text-secondary" scope="col">
              Price
            </th>
            <th className="text-secondary" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{service.title}</td>
              <td>${service.price}</td>
              <td>
                <button className="delate-btn">{deleteIcon}</button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default ManageServiceTable;