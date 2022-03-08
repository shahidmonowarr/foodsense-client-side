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
        <div className="container">
            <h1 className="text-warning fw-bold text-center banner-title py-3">Provide Info to Confirm Order</h1>
            {/* {
                    isLoading && <Spinner animation="border" variant="danger" />
                } */}
            <div className="row my-5">
                <div className="col-md-5">

                    <img className="ps-5 w-100" src={product.image} alt="" />
                    <h3 className=" text-warning ps-5">{product.name}</h3>
                    <h6 className='text-light ps-5'>BDT. {product.price}</h6>
                    <div className=" ps-5 my-3">
                        {/* <p className="my-3"><span className="bg-danger text-light p-1 rounded">{brand}</span></p> */}
                        <small className="text-muted">{product.description}</small>

                    </div>

                </div>
                {/* <div className="col-md-7">
                        <h3 className="bg-danger text-light ps-5">Fill the Address Form</h3>
                        <form onSubmit={handleConfirm} className="customer-form">
                            <input type="text" value={user.displayName} placeholder="Name" required />
                            <input type="number" ref={phoneNumberRef} name="" id="" placeholder="Phone Number" required />
                            <input type="email" value={user.email} placeholder="Email Address" required />
                            <textarea type="text" ref={addressRef} placeholder="Home Address" required />

                            <input className="order-btn" type="submit" value="Submit & confirm" />
                        </form>
                    </div> */}
            </div>
        </div>
    );
};

export default OrderNow;