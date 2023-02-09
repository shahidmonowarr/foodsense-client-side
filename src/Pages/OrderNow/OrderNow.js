import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../contexts/useAuth';


const OrderNow = () => {
    const { productId, } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {

        const orderStatus = "pending";
        data.orderStatus = orderStatus;

        console.log(data);

        axios.post('https://foodsense-server.vercel.app/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data)
                    alert('Added Successfully');
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`https://foodsense-server.vercel.app/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

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
                    <h6 className='text-light ps-5'>$ {product.price}</h6>
                    <div className=" ps-5 my-3">
                        {/* <p className="my-3"><span className="bg-danger text-light p-1 rounded">{brand}</span></p> */}
                        <small className="text-muted">{product.description}</small>

                    </div>

                </div>
                <div className="col-md-7 add-product">
                    <form onSubmit={handleSubmit(onSubmit)} className="customer-form">
                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />

                        {errors.email && <span className="error">This field is required</span>}

                        <input placeholder="Price" defaultValue={product.price} {...register("price")} />
                        <input placeholder="Product title" defaultValue={product.name} {...register("title")} />
                        <input placeholder="Address" defaultValue="" {...register("address")} />

                        <input placeholder="Phone No." defaultValue="" {...register("phone")} />
                        <input className='submit-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;