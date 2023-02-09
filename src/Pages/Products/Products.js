import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://foodsense-server.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="overflow-hidden bg-dark">

            <h1 className="text-warning text-center banner-title py-3">POPULAR FAST FOODS</h1>
            <div className="container pt-2 mb-3">
                <Row xs={1} md={3} className="g-3">
                    {
                        products.map(pd =>
                            <CardGroup>
                                <Card className="product-card rounded-3">
                                    <Card.Img className="p-img" src={pd.image} />
                                    <Card.Body className='food'>
                                        <Card.Title className="food-name fw-bold ps-4"><h4>{pd.name}</h4></Card.Title>
                                        <Card.Title className=" description text-dark">{pd?.description.slice(0, 52)}...</Card.Title>
                                        <Card.Title className=" description pt-1 fw-bold text-dark">Price: ${pd.price} </Card.Title>
                                    </Card.Body>
                                    <Card.Text className="text-secondary w-75 mx-auto">
                                        <Link to={`/orderNow/${pd._id}`}><Button className="btn description btn-warning fw-semiBold d-btn mb-5">Details</Button></Link>
                                    </Card.Text>
                                </Card>
                            </CardGroup>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Products;