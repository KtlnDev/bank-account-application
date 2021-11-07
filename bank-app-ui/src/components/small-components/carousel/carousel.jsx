import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ImageForFirstSlide from '../../../resources/carousel-1.jpg';
import ImageForSecondSlide from '../../../resources/carousel-2.jpg';
import ImageForThirdSlide from '../../../resources/carousel-3.jpg';
import './carousel.css';

export default function CarouselComponent(){
    return(
        <Carousel>
            <Carousel.Item interval={4000} className="item">
                <img
                    className="image"
                    src={ImageForFirstSlide}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="caption">The most transparent & security banking ever</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="image"
                    src={ImageForSecondSlide}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2 className="caption-second-slide">Order a card and get more than 20 unique features wordwide</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="image"
                    src={ImageForThirdSlide}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}