import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Header.css';
const Header = () => {
    return (
      <div className="top-banner">
        <NavBar />
        <Container>
          <Row className="row-cols-1 row-cols-sm-2  mt-5">
            <Col>
              <Card.Body>
                <h1>Contemporary Interior Design</h1>
                <p>
                  Online Easte Agency, the mordern way to sell your own home,
                  You can use Griffin Residential to market your property
                </p>
                <button>Booking</button>
              </Card.Body>
            </Col>
            <Col>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/_Ecl_XEETEA?start=23"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Header;