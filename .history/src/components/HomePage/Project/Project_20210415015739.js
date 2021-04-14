import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import carousel1 from '../../../home-decoration/Image_Icon/Image/banner.jpg';

const Project = () => {
     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      <Container className="mt-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Floor Plan</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={carousel1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Interior Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={carousel1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Architecture Design</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px" }}
              className="d-block w-100"
              src={carousel1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Construction</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
};

export default Project;