import React from 'react';
import { Carousel } from "react-bootstrap";
import banner from '../../assets/banner.jpeg';


const Carrossel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img alt="banner" src={banner} />
            </Carousel.Item>
        </Carousel>
    )
}

// const contentStyle = {
//   height: 'auto',
//   color: '#fff',
//   lineHeight: '460px',
//   textAlign: 'center',
//   background: '#364d79',
// };

export default Carrossel;