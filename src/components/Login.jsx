import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'; 

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center">{isSignup ? 'Sign Up' : 'Login'}</h2>
                            <Form>
                                {!isSignup && (
                                    <>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" required />
                                        </Form.Group>
                                    </>
                                )}

                                {isSignup && (
                                    <>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" required />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" required />
                                        </Form.Group>
                                    </>
                                )}

                                <Button className="btn-small-green w-100" type="submit">
                                    {isSignup ? 'Sign Up' : 'Login'}
                                </Button>
                            </Form>
                            <p className="text-center mt-3">
                                {isSignup ? 'Already have an account? ' : "Don't have an account? "}
                                <span onClick={toggleForm} className="toggle-link">
                                    {isSignup ? 'Login' : 'Sign Up'}
                                </span>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
