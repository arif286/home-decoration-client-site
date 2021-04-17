import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import carousel1 from "../../../home-decoration/Image_Icon/Image/carousel1.jpg";
import carousel2 from "../../../home-decoration/Image_Icon/Image/carousel2.jpg";
import carousel3 from "../../../home-decoration/Image_Icon/Image/carousel3.jpg";
import carousel4 from "../../../home-decoration/Image_Icon/Image/carousel4.jpg";

const Project = () => {
     const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      <Container className="mt-5">
        {/* <p className='text-center'>Projects</p>
            <h3 className='text-center mb-5'>Discover the latest interior Design available tody</h3> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: "400px", objectFit: "cover" }}
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
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Interior Design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              src={carousel3}
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
              style={{ height: "400px", objectFit: "cover" }}
              className="d-block w-100"
              src={carousel4}
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