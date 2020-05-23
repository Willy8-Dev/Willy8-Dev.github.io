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
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/shopping.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption className="text-caption-slide">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/shop.jpg"
                            alt="Third slide"
                            />
                            <Carousel.Caption className="text-caption-slide">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </div>
    )
}
