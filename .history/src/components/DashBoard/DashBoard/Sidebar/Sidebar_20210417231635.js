import { faClipboardList, faCommentAlt, faGripHorizontal, faInbox, faPlus, faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import jwt_decode from "jwt-decode";
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
    path: "/dashBoard/orderList",
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
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState({});
  try {
    const token = sessionStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setUserEmail(decodedToken);
  } catch (error) {
    console.log(error)
  }

  useEffect(() => {
    const emailInfo = { email: loggedInUser.email || userEmail.email };
    axios
      .post("https://interior-design-service.herokuapp.com/isAdmin", emailInfo)
      .then((res) => setIsAdmin(res.data))
      .catch((err) => console.log(err));
  }, [loggedInUser.email, userEmail.email]);

  return (
    <Router>
      <Row>
        <div className="col-md-3 col-sm-4 col-5 sidebar">
          <ul className="list-unstyled d-flex flex-column ">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashBoard/orderList">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <span>Order list</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/addService">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Add Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/makeAdmin">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Make Admin</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/manageService">
                    <FontAwesomeIcon icon={faGripHorizontal} />
                    <span>Manage Service</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/booking">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Booking</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/bookingList">
                    <FontAwesomeIcon icon={faInbox} />
                    <span>Booking List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/review">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashBoard/booking">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Booking</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/bookingList">
                    <FontAwesomeIcon icon={faInbox} />
                    <span>Booking List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashBoard/review">
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span>Review</span>
                  </NavLink>
                </li>
              </>
            )}
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
