import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Product deleted')
                    const remaining = products.filter(singleProduct => singleProduct._id !== id);
                    setProducts(remaining);
                }

            })
    }

    return (
        <div className='container'>
            <h3 className="text-center bg-danger text-light my-4 py-2">All Bikes</h3>
            <div className="text-center">

                <div className="row my-5">
                    {
                        products?.map(singleProduct => <div key={singleProduct._id} className="col-md-6 col-lg-4">
                            <div className="border m-2">
                                <img className="img-fluid w-100" src={singleProduct.image} alt="" />
                                <h4 className="my-3">{singleProduct.bike_name}</h4>
                                <div className=" my-3">
                                    {/* <p>
                                        <NavLink to={`/updateProduct/${singleProduct._id}`}>
                                            <button
                                                className="btn btn-success"
                                            >Update</button>
                                        </NavLink>
                                    </p> */}
                                    <p>
                                        <button
                                            onClick={() => handleDelete(singleProduct._id)}
                                            className="btn btn-danger"
                                        >Delete</button>
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;