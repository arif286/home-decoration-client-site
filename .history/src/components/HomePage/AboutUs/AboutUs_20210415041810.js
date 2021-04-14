import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import architects from '../../../home-decoration/Image_Icon/Image/architect.jpg';

const AboutUs = () => {
    return (
      <Container className="mt-5">
        <Row className="row-cols-1 row-cols-md-2">
          <Col>
            <img src={architects} alt="" />
          </Col>
          <Col>
            <h5>MOST EXPERIENCED BUILDERS ARCHITECTS & DESIGNERS</h5>
            <p>We're building everything you always needed in architect</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt by injected humou or randomised
              simply not wisdome to do that avail words even slightly
              believable.
            </p>
            <div>
              <p>
                <span></span>Lorem Ipsum is not simply random text
              </p>
              <p>
                <span></span>Making this the first true on Internet
              </p>
              <p>
                <span></span>There are slighly believable words
              </p>
              <p>
                <span></span>If you are going to use passage
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default AboutUs;