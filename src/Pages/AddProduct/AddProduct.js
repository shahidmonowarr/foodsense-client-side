import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://tranquil-harbor-40526.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
                console.log(res);
            })

    };
    return (
        <div className="container add-product">
            <h1 className="text-warning fw-bold text-center banner-title py-5">Add a product</h1>
            <div className="container pt-2"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",)} placeholder="name" /> <br />
                <input type="number"{...register("price")} placeholder="price" /> <br />
                <input type="text" {...register("image")} placeholder="image" /> <br />
                <input type="text" {...register("description")} placeholder="description" /> <br />
                <input className='submit-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;