import React from 'react';
import { Button, Card, CardGroup, } from 'react-bootstrap';

const Products = () => {
    return (
        <div className="overflow-hidden pt-5 bg-dark">
            <h1 className="text-warning fw-bold text-center banner-title py-5">POPULAR FAST FOODS</h1>
            <div className="container pt-2">

                <CardGroup>
                    <Card className="work-card bg-light ms-2">
                        <Card.Img className="p-img" src="https://themefie.com/html/foodka/assets/img/home-2/product/01.png" />
                        <Card.Body>
                            <Card.Text className="ps-4">

                            </Card.Text>
                            <Card.Title className="text-warning fw-bold ps-4"><h4>burger1</h4></Card.Title>
                            <Card.Title className="ps-4 text-light">Price: </Card.Title>
                            <Card.Text >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!
                            </Card.Text>
                        </Card.Body>
                        <Card.Text className="text-secondary w-75 mx-auto">
                            <Button className="btn btn-dark  ms-2 m mb-5">Add To Cart</Button><Button className="btn btn-primary ms-2 d-btn mb-5">Details</Button>
                        </Card.Text>
                    </Card>
                    <Card className="work-card bg-light">
                        <Card.Img className="p-img" src="https://themefie.com/html/foodka/assets/img/home-2/product/01.png" />
                        <Card.Body>
                            <Card.Text className="ps-4">

                            </Card.Text>
                            <Card.Title className="text-warning fw-bold  ps-4"><h4>Burger:2</h4></Card.Title>
                            <Card.Title className="ps-4 text-light">Price: </Card.Title>
                            <Card.Text >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!
                            </Card.Text>
                        </Card.Body>
                        <Card.Text className="text-secondary w-75 mx-auto">
                            <Button className="btn btn-dark  ms-2 m mb-5">Add To Cart</Button><Button className="btn btn-primary ms-2 d-btn mb-5">Details</Button>
                        </Card.Text>
                    </Card>
                    <Card className="work-card bg-light">
                        <Card.Img className="p-img" src="https://themefie.com/html/foodka/assets/img/home-2/product/01.png" />
                        <Card.Body>
                            <Card.Text className="ps-4">

                            </Card.Text>
                            <Card.Title className="text-warning fw-bold ps-4"><h4>Burger:2</h4></Card.Title>
                            <Card.Title className="ps-4 text-light">Price: </Card.Title>
                            <Card.Text >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dignissimos!
                            </Card.Text>
                        </Card.Body>
                        <Card.Text className="text-secondary w-75 mx-auto">
                            <Button className="btn btn-dark  ms-2 m mb-5">Add To Cart</Button><Button className="btn btn-primary ms-2 d-btn mb-5">Details</Button>
                        </Card.Text>
                    </Card>
                </CardGroup>
                )
            </div>
        </div>
    );
};

export default Products;