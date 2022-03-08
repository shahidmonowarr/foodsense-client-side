import React from 'react';

const OrderNow = () => {
    return (
        <div className="booking-page">
            {/* <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Package title: {singlePackage.title}</h2>
            <br />

            <div className="package-info text-white">
                <div className="" >
                    <div>
                        <img className="w-50" src={singlePackage.img} alt="" />
                    </div>
                    <h2>{singlePackage.title}</h2>
                    <h3><i class="fas fa-map-marker-alt"></i> {singlePackage.location}</h3>
                    <p className="fs-5">{singlePackage.description}</p>
                    <h3>Price: {singlePackage.price} <i class="fas fa-dollar-sign"></i></h3>
                </div>
            </div> */}
            <h2 className="title text-white">FillUp this form to Place Order</h2>
            {/* <div className="shipping-section ">

                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input placeholder="Price" defaultValue={singlePackage.price} {...register("price")} />
                    <input placeholder="Package Title" defaultValue={singlePackage.title} {...register("title")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />

                    <input placeholder="Phone No." defaultValue="" {...register("phone")} />
                    <input type="submit" />
                </form>
            </div> */}
        </div>
    );
};

export default OrderNow;