import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="overflow-hidden bg-dark">

            <h1 className="text-warning fw-bold text-center banner-title py-5">POPULAR FAST FOODS</h1>
            <div className="container pt-2">
                <Row xs={1} md={3} className="g-3">
                    {
                        products.map(pd =>
                            <CardGroup>
                                <Card className="work-card bg-light rounded-3">
                                    <Card.Img className="p-img" src={pd.image} />
                                    <Card.Body>
                                        <Card.Text className="ps-4">

                                        </Card.Text>
                                        <Card.Title className="text-warning fw-bold ps-4"><h4>{pd.name}</h4></Card.Title>
                                        <Card.Title className="ps-4 text-dark">Price: {pd?.description.slice(0, 52)}...</Card.Title>
                                        <Card.Title className="ps-4 text-dark">Price: ${pd.price} </Card.Title>
                                    </Card.Body>
                                    <Card.Text className="text-secondary w-75 mx-auto">
                                        <Link to={`/orderNow/${pd._id}`}><Button className="btn btn-primary ms-2 d-btn mb-5">Details</Button></Link>
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