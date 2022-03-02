import React from 'react';
import useAuth from '../../../contexts/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-page">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;