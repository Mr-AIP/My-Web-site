import React from 'react';
import {Button, Card, Container,} from "react-bootstrap";



export const About = () => {
    return (
        <Container>
            <h2>Example About us</h2>
            <Card>
                <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=0d08cef62add3dedc6a251a038b83878-5869035-images-thumbs&n=13&exp=1"/>
                <Card.Body>
                    <Card.Title>Great title</Card.Title>
                    <Card.Text>Enter text into card</Card.Text>
                    <Button variant="primary">About card</Button>
                </Card.Body>
            </Card>
            <Card>

                <Card.Body>
                    <Card.Title>Great title</Card.Title>
                    <Card.Text>Enter text into card</Card.Text>
                    <Button variant="primary">About card</Button>
                </Card.Body>
                <Card.Img variant="Bottom" src="https://estidevelopers.com/wp-content/uploads/2018/02/developers.jpg"/>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=95fb0323a42161b0fba9d07a5615ca8b-4824031-images-thumbs&n=13&exp=1"/>
                <Card.Body>
                    <Card.Title>Great title</Card.Title>
                    <Card.Text>Enter text into card</Card.Text>
                    <Button variant="primary">About card</Button>
                </Card.Body>
            </Card>
        </Container>

    );
};

export default About;
