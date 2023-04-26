import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passRepeat) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess('Register is successful. You can login now.');
        setName('');
        setEmail('');
        setPassword('');
        setPassRepeat('');
        setError('');

        sessionStorage.setItem('email', email);

        navigate('/');
      } else {
        setError('Error. We are sorry');
      }
    } catch (err) {
      setError(err.response.data.message || 'Error. We are sorry');
    }
  };

    return (
        <div className="auth-form-container">
            <h2>Kayıt</h2>
            <form className="register-form" onSubmit={handleSubmit}>
           
            <label htmlFor="name">Full Name</label>
            <input value={name} 
                    name="name" 
                    id="name" 
                    placeholder="full name"  
                    onChange={(e) => setName(e.target.value)} 
                    required/>
          
           
            <label htmlFor="email">E-mail</label>
            <input type="email" 
                        placeholder="youremail@gmail.com" 
                        id="email"
                        name="email"
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />

            <label for="password">Password</label>          
            <input type="password"
                        placeholder="*******"
                        value={password}
                        id="password"
                        name="password"
                        onChange= {(e) => setPassword(e.target.value)}
                        minLength = "6"
                        required />
          
            <label for="password">Enter your password again</label>
            <input type="password"
                        placeholder="*******"
                        id="repassword"
                        name="repassword"
                        value={passRepeat}
                        onChange= {(e) => setPassRepeat(e.target.value)}
                        minLength = "6"
                        required />
            <button type="submit">Register</button>
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
            <p>
            <Link to = "/" className="link-btn">Already have an account? Login here</Link>
            </p>
        </div>
    );
}

export default Register;