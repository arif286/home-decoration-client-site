import { faClipboardList, faCommentAlt, faGripHorizontal, faInbox, faPlus, faShoppingCart, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import {
    BrowserRouter as Router,

    NavLink,
    Route,
    Switch
} from "react-router-dom";
import { UserContext } from "../../../../App";
import AddService from "../../Admin/AddService/AddService";
import MakeAdmin from "../../Admin/MakeAdmin/MakeAdmin";
import ManageService from "../../Admin/ManageService/ManageService";
import OrderList from "../../Admin/OrderList/OrderList";
import Booking from "../../User/Booking/Booking";
import BookingList from "../../User/BookingList/BookingList";
import Review from "../../User/Review/Review";
import "./Sidebar.css";



const routes = [
  {
    path: "/orderList",
    main: () => <OrderList />,
    exact: true,
  },
  {
    path: "/addService",
    main: () => <AddService />,
  },
  {
    path: "/makeAdmin",
    main: () => <MakeAdmin />,
  },
  {
    path: "/manageService",
    main: () => <ManageService />,
  },
  {
    path: "/booking",
    main: () => <Booking />,
  },
  {
    path: "/bookingList",
    main: () => <BookingList />,
  },
  {
    path: "/review",
    main: () => <Review />,
  },
];

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const emailInfo = { email: loggedInUser.email};
    axios
      .post("https://interior-design-service.herokuapp.com/isAdmin", emailInfo)
      .then((res) => setIsAdmin(res.data))
      .catch((err) => console.log(err));
  }, [loggedInUser.email]);
  const handleHome = () => {
    const removeUser = sessionStorage.removeItem("token");
  }

  return (
    <Router>
      <Row>
        <div className="col-md-3 col-sm-4 col-5 sidebar">
          <ul className="list-unstyled d-flex flex-column ">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/orderList">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <span>Order list</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addService">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/makeAdmin">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Make Admin</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manageService">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Manage Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/booking">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Booking</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookingList">
                    <FontAwesomeIcon icon={faInbox} />
                    <span>Booking List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/review">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/booking">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Booking</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/bookingList">
                    <FontAwesomeIcon icon={faInbox} />
                    <span>Booking List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/review">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <a onClick={handleHome} href="/home">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            overflowY: "auto",
            overflowX: "auto",
          }}
          className="col-md-9 col-sm-8 col-7"
        >
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
        </div>
      </Row>
    </Router>
  );
};

export default Sidebar;
