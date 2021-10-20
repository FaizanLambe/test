import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import sale from './Images/sale.png'
import sale2 from './Images/sale2.png'

function Slide() {
    return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sale}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sale2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}

export default Slide;