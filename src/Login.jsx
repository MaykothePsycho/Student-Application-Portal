import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try{

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }
            );

            if(response.status === 200){
                if(response.data.message === "1"){
                    sessionStorage.setItem("id", response.data.id);
                    setSuccess('Login is succesful. You are directed to the portal.')
                    setTimeout( () => {
                    navigate('/portal');
                }, 2000);  
                }else{
                setError('Wrong username of password.');
                }
            }
        }catch(err){
            setError('Error! We are sorry.');
        }
      

    }

    return (
    
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/> 
            <label for="password">Password</label>
            <input value={password} type="password" placeholder="*******" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit">Login</button>
            <p id="result"></p>
        </form>
        {error && <p style={{color:'red'}}> {error} </p> }
        {success && <p style={{color: 'green'}}>{success}</p>}
        <p>
        <Link to = "/register" className="link-btn">Don't have an account? Register here</Link>
        </p>
        </div>
    
    );
}

export default Login;