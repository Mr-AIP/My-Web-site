import React from 'react';
import {Container, Form, Button} from "react-bootstrap";

export const Contacts = () => {
    return (

        <Container>
            <h1>Contact US</h1>
            <Form>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text>
                        Мы рады помочь вам с вашими вопросами
                    </Form.Text>

                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                    <Button variant="dark" type="submit">Submit</Button>

                </Form.Group>

            </Form>
        </Container>

    );
};

export default Contacts;