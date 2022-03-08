import React from 'react';
import {Carousel} from "react-bootstrap";

export const Bg= () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="images/bg.jpg" alt="bg"/>
            </Carousel.Item>
            <Carousel.Caption>
                <h3>Red bg</h3>
                <p>Have a good day</p>
            </Carousel.Caption>
            <Carousel.Item>
                <img src="images/bg__.jpg" alt="bg"/>
            </Carousel.Item>
            <Carousel.Caption>
                <h3>Blue bg</h3>
                <p>Have a good day</p>
            </Carousel.Caption><Carousel.Item>
                <img src="images/bg.jpg" alt="bg"/>
            </Carousel.Item>
            <Carousel.Caption>
                <h3>Red bg</h3>
                <p>Have a good day</p>
            </Carousel.Caption>
        </Carousel>
    );
};

export default Bg;