import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from 'react';

const ManageServiceTable = ({ services }) => {
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />;

    const handleDelate = (id) => {
        axios.delete(`https://interior-design-service.herokuapp.com/deleteService/${id}`)
            .then(res => console.log(res.data))
        .catch(err=>console.log(err))
    };
    return (
      <table className="table table-borderless">
        <thead style={{ backgroundColor: "#e1e2e4" }}>
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
                <button
                  onClick={() => {
                    handleDelate(service._id);
                  }}
                  className="delate-btn"
                >
                  {deleteIcon}
                </button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default ManageServiceTable;