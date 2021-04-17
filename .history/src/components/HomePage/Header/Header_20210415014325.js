import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Header.css';
const Header = () => {
    return (
      <div className="top-banner">
        <NavBar />
        <Container>
          <Row className="row-cols-1 row-cols-md-2  mt-5">
            <Col className='design pb-4'>
              <Card.Body>
                <h1>Contemporary Interior Design</h1>
                <p>
                  Online Easte Agency, the mordern way to sell your own home,
                  You can use Griffin Residential to market your property
                </p>
                <button>View Projects</button>
              </Card.Body>
            </Col>
            <Col className='pb-4'>
              <iframe
                width="100%"
                height="365"
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