import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext); 

 
    const totalAmount = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('£', ''));
        return total + (price * item.quantity);
    }, 0);

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
                                    <Button variant="success" className="mt-3">
                                        Continue Shopping
                                    </Button>
                                </div>
                            ) : (
                                <>
                                    {cart.map((item, index) => (
                                        <Row key={index} className="align-items-center mb-3">
                                            <Col md={5}>
                                                <h5>{item.title}</h5>
                                                <div>
                                                    <Button variant="secondary" onClick={() => decrementQuantity(item.title)}>-</Button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <Button variant="secondary" onClick={() => incrementQuantity(item.title)}>+</Button>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <p>${(parseFloat(item.price.replace('£', '')) * item.quantity).toFixed(2)}</p>
                                            </Col>
                                            <Col md={4}>
                                                <Button variant="danger" onClick={() => removeFromCart(item.title)}>
                                                    Remove
                                                </Button>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Row>
                                        <Col md={5}>
                                            <h5>Total Amount</h5>
                                        </Col>
                                        <Col md={3}>
                                            <p>${totalAmount.toFixed(2)}</p>
                                        </Col>
                                        <Col md={4}></Col>
                                    </Row>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
