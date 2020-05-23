import React from 'react'
import { Container, Row, Carousel } from "react-bootstrap"

export default function Slide() {
    return (
        <div>
            <Container className="mt-4 xxx">
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/safe.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption className="text-caption-slide">
                            <h3>SAFE-X Pafe</h3>
                            <p>Project of a Company to learn programming</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/shopping.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption className="text-caption-slide">
                            <h3>Shopping List</h3>
                            <p>Tutorial to learn the first steps of React JS</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/shop.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption className="text-caption-slide">
                            <h3>Webshop</h3>
                            <p>Project of an Urban Webshop</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </div>
    )
}
