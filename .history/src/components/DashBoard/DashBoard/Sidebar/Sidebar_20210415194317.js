import {
    faGripHorizontal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
      <div className="d-flex flex-column justify-content-between">
        <ul className="list-unstyled">
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Order list</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Add Service</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Make Admin</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Manage Service</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Booking</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Booking List</span>
          </NavLink>
          <NavLink to="/">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Review</span>
          </NavLink>
        </ul>
      </div>
    );
};

export default Sidebar;