import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://foodsense-server.vercel.app/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://foodsense-server.vercel.app/products/${id}`;
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
            <h1 className="text-warning fw-bold text-center banner-title py-3">Manage Products</h1>
            <div className="text-center">

                <div className="row my-5">
                    {
                        products?.map(singleProduct => <div key={singleProduct._id} className="col-md-6 col-lg-4">
                            <div className="border m-2 bg-secondary rounded-3">
                                <img className="img-fluid w-100" src={singleProduct.image} alt="" />
                                <h4 className="my-3 text-warning">{singleProduct.name}</h4>
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
                                            className="btn btn-dark"
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