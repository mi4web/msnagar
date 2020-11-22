import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import PropTypes from 'prop-types';

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay emulateTouch showThumbs={false} showIndicators={false} showStatus={false}>
            
            </Carousel>
        );
    }
}

export default HomeCarousel;
