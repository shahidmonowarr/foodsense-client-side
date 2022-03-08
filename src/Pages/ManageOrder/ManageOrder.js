import React, { useEffect, useState } from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-harbor-40526.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleConfirm = id => {
        const matchedOrder = orders.filter(order => order._id == id);
        matchedOrder[0].orderStatus = 'Confirmed';

        fetch(`https://tranquil-harbor-40526.herokuapp.com/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchedOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))


        // fetch()
    }

    const handleDelete = id => {
        const proceed = window.confirm("Are You sure, You want to delete?");
        if (proceed) {
            const url = `https://tranquil-harbor-40526.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order deleted Successfully')
                        const remaining = orders.filter(singlePackage => singlePackage._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }

    return (
        <div className="container manage-orders">
            <h1 className="text-warning fw-bold text-center banner-title py-3">Update or Remove Orders</h1>
            {
                orders.map(order => <div className="orders-div" key={order._id}>
                    <div className="order-div my-2 container">
                        <h3 className="fw-bold text-white">{order.name} </h3>
                        <h6 className="text-white ps-2"> Order Status: {order.orderStatus}</h6>
                        <button className=" mx-2 rounded-3 submit-btn" onClick={() => handleConfirm(order._id)}> Confirm <i class="fas fa-angle-double-right"></i></button>
                        <button className=" mx-2 submit-btn" onClick={() => handleDelete(order._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;