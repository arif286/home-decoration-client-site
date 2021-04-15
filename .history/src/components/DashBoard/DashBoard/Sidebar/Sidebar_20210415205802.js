import {
    faGripHorizontal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col } from "react-bootstrap";
import {
    BrowserRouter as Router,


    NavLink,
    Route,
    Switch
} from "react-router-dom";
import AddService from '../../Admin/AddService/AddService';
import MakeAdmin from "../../Admin/MakeAdmin/MakeAdmin";
import ManageService from '../../Admin/ManageService/ManageService';
import OrderList from '../../Admin/OrderList/OrderList';
import Booking from '../../User/Booking/Booking';
import BookingList from '../../User/BookingList/BookingList';
import Review from '../../User/Review/Review';
const routes = [
  {
    path: "/dashBoard",
    exact: true,
    main: () => <OrderList />,
  },
  {
    path: "/dashBoard/addService",
    main: () => <AddService />,
  },
  {
    path: "/dashBoard/makeAdmin",
    main: () => <MakeAdmin />,
  },
  {
    path: "/dashBoard/manageService",
    main: () => <ManageService />,
  },
  {
    path: "/dashBoard/booking",
    main: () => <Booking />,
  },
  {
    path: "/dashBoard/bookingList",
    main: () => <BookingList />,
  },
  {
    path: "/dashBoard/review",
    main: () => <Review />,
  },
];

const Sidebar = () => {
    return (
      <Router>
        <Col className="col-2">
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
        </Col>
        <Col className="col-10">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </Col>
      </Router>
    );
};

export default Sidebar;