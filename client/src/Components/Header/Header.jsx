import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../constants';

const Header = () => {
  return (
    <>
    <div className="header_container">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={images.header}
          alt="First slide"
          height={500}
          width={750}
        />
        <Carousel.Caption>
          <h3>बरेली के मेडिसिटी हॉस्पिटल के डॉक्टर चार पर केस दर्ज </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={images.header}
          alt="Second slide"
          height={500}
          width={750}
        />
        <Carousel.Caption>
          <h3>बरेली के मेडिसिटी हॉस्पिटल के डॉक्टर चार पर केस दर्ज </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={images.header}
          alt="Third slide"
          height={500}
          width={750}
        />
        <Carousel.Caption>
          <h3>बरेली के मेडिसिटी हॉस्पिटल के डॉक्टर चार पर केस दर्ज </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Header
