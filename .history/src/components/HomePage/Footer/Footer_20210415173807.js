import {
  faFacebookF,

  faGooglePlusG, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = () => {
  const ourAddress = [
    {
      name:
        "H#000 (0th Floor), Road #00,New DOHS, Mohakhali, Dhaka, Bangladesh  ",
    },
  ];
  const AboutUs = [
    {
      name:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      link: "//google.com/map",
    },
  ];
  const quickLinks = [
    { name: "Quick Link", link: "/" },
    { name: "Rentals", link: "/" },
    { name: "Sales", link: "/" },
    { name: "contact", link: "/" },
    { name: "Our Blog", link: "/" },
  ];
  const company = [
    { name: "About", link: "/" },
    { name: "Project", link: "/" },
    { name: "Our Team", link: "/" },
    { name: "Terms Conditions", link: "/" },
    { name: "Submit Listing", link: "/" },
  ];
  return (
    <footer className="footer-area clear-both">
      <Container className="pt-5">
        <Row className="row-cols-md-4 row-cols-sm-6 py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={ourAddress} />
          <FooterCol key={2} menuTitle="Company" menuItems={company} />
          <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
          <FooterCol key={4} menuTitle="About Us" menuItems={AboutUs}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>

          </FooterCol>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
