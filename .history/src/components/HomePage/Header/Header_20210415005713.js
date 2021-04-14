import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
      <div className="top-banner">
        <NavBar />
        <Container>
          <Row className="row-cols-1 row-cols-sm-2">
            <Col>
              <h1>We build your dream</h1>
              <p>
                Online Easte Agency, the mordern way to sell your own home, You
                can use Griffin Residential to market your property
              </p>
              <button>Booking</button>
                    </Col>
                    <Col>
                    <img src alt=''/>
                    </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Header;