import {
    faGripHorizontal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import {
    BrowserRouter as Router,


    NavLink
} from "react-router-dom";
import OrderList from '../../Admin/OrderList/OrderList';
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <OrderList></OrderList>,
  },
  {
    path: "/addService",
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: "/makeAdmin",
    main: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/manageService",
    main: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/booking",
    main: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/bookingList",
    main: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/review",
    main: () => <h2>Shoelaces</h2>,
  },
];

const Sidebar = () => {
    return (
      <Router>
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
      </Router>
    );
};

export default Sidebar;