import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderNow = () => {
    const { productId, } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className="booking-page">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Package title: {product.name}</h2>
            <br />

            <div className="package-info text-white">
                <div className="" >
                    <div>
                        <img className="w-50" src={product.image} alt="" />
                    </div>
                    <h2>{product.name}</h2>
                    <p className="fs-5">{product.description}</p>
                    <h3>Price: {product.price} <i class="fas fa-dollar-sign"></i></h3>
                </div>
            </div>

        </div>
    );
};

export default OrderNow;