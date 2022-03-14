import React from 'react';
import useAuth from '../../../contexts/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-page">
             <h1 className="text-warning text-center banner-title py-3"><i className="far fa-address-book"></i> Please LogIn</h1>
            <button onClick={signInUsingGoogle} className="btn font btn-warning mb-3 text-white  fs-5"><i class="fab fa-google text-danger"></i>oogle SignIn</button>
        </div>
    );
};

export default Login;