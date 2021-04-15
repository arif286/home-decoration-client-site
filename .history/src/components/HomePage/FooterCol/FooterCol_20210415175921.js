import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  return (
    <div className="col-md-3 col-sm-6">
      <Card.Body>
        {props.menuTitle && <h6 className="text-white">{props.menuTitle}</h6>}

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
      </Card.Body>
    </div>
  );
};

export default FooterCol;
