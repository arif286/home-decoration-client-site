import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
      <div className="top-banner">
        <NavBar />
        <Container>
          <Row className="row-cols-1 row-cols-sm-2 g-4">
            <Col>
              <h1>Contemporary Interior Design</h1>
              <p>
                Online Easte Agency, the mordern way to sell your own home, You
                can use Griffin Residential to market your property
              </p>
              <button>Booking</button>
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