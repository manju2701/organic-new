import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cart.css'; 

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext); // Use the context

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h3>Shopping Cart</h3>
                        </Card.Header>
                        <Card.Body className="text-center">
                            {cart.length === 0 ? (
                                <div className="empty-cart">
                                    <h6>No products in the cart.</h6>
                                    <Button variant="success" className="mt-3 btn-continue-shopping">
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                cart.map((item, index) => (
                                    <Row key={index} className="align-items-center mb-3">
                                        <Col md={6}>
                                            <h5>{item.title}</h5>
                                        </Col>
                                        <Col md={3}>
                                            <p>${parseFloat(item.price.replace('£', '')).toFixed(2)}</p>
                                        </Col>
                                        <Col md={3}>
                                            <Button variant="danger" onClick={() => removeFromCart(item)}>
                                                Remove
                                            </Button>
                                        </Col>
                                    </Row>
                                ))
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
