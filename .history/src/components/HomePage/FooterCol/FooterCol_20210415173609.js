import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <Col>
      <h6 className="text-primary">
        {props.menuTitle ? props.menuTitle : " "}
      </h6>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-secondary">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </Col>
  );
};

export default FooterCol;
