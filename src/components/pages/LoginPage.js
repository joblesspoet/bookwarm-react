import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from "../forms/LoginForm";

const LoginPage  = () => (
    <div>
        <h1>Login page</h1>
        <Link to="/"  >Go back</Link>
        <LoginForm />
    </div>
);

export default LoginPage;
