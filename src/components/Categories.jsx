import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import '../styles/Categories.css'; 

const Categories = () => {
    const { addToCart } = useContext(CartContext); 
    const [notifications, setNotifications] = useState({}); 

    const products = [
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg',
            category: 'Groceries',
            title: 'Assorted Coffee',
            price: '£35.00',
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-400x400.jpg',
            category: 'Groceries',
            title: 'Cashew Butter',
            price: '£35.00',
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-400x400.jpg',
            category: 'Groceries',
            title: 'Farm Fresh Eggs',
            price: '£34.00',
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-400x400.jpg',
            category: 'Groceries',
            title: 'Fresh Orange Juice',
            price: '£18.00',
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-400x400.jpg',
            category: 'Groceries', 
            title: 'Fresh Organic Honey',
            price: '£34.00',
        },
        {
            image: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg',
            category: 'Groceries', 
            title: 'Handpicked Red Chillies',
            price: '£34.00',
        },
    ];

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotifications(prev => ({
            ...prev,
            [product.title]: `Added ${product.title} to cart!`
        }));
        setTimeout(() => {
            setNotifications(prev => ({ ...prev, [product.title]: '' }));
        }, 3000); // Clear notification after 3 seconds
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Shop</h2>
            <Row>
                {products.map((product, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <span>{product.category}</span><br />
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <strong>{product.price}</strong>
                                </Card.Text>
                                <Button variant="success" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                {notifications[product.title] && (
                                    <div style={{ color: 'green', marginTop: '10px' }}>
                                        {notifications[product.title]}
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Categories;
