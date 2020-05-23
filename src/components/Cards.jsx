import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import $ from "jquery"

export default function Cards() {
    return (
        <div>
            <Container id="cards">
                <Button variant="secondary" className="float-right"
                    onClick={() => {
                        $("#cards").slideToggle(500)
                    }}
                >X</Button>
                <Row className="p-4">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/mikael-gustafsson-wallpaper-mikael-gustafsson.jpg" />
                        <Card.Body>
                            <Card.Title>Nice Image</Card.Title>
                            <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/rog_abstract-wallpaper-1920x1080.jpg" />
                        <Card.Body>
                            <Card.Title>My Background</Card.Title>
                            <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./img/824911868_preview_Wallpaper_Image.jpg" />
                        <Card.Body>
                            <Card.Title>Another Image</Card.Title>
                            <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
