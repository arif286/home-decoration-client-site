import {
  faFacebookF,

  faGooglePlusG, faInstagram, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
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
    { name: "Quick Link", link: "/important/link" },
    { name: "Rentals", link: "/rentals" },
    { name: "Sales", link: "/sales" },
    { name: "contact", link: "/contact" },
    { name: "Our Blog", link: "/blog" },
  ];
  const company = [
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Our Team", link: "/team" },
    { name: "Terms Conditions", link: "/terms" },
    { name: "Submit Listing", link: "/list" },
  ];
  return (
    <footer className="footer-area clear-both">
      <Container className="mt-5">
        <div className="row py-5">
          <FooterCol key={1} menuItems={ourAddress} />
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
              <li className="list-inline-item">
                <a href="//youtube.com">
                  <FontAwesomeIcon className="icon" icon={faYoutube} />
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
