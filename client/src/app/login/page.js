"use client";

import Navbar from '@/components/navbar/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import './login.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '@/redux/features/userSlice';

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setEnteredValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginStart());
    try {
      const { email, password } = enteredValues;
      const res = await axios.post("https://omegle-2-0.onrender.com/api/auth/login", {
        email, password
      });
      dispatch(loginSuccess(res.data));
      console.log(res.data)
    } catch (error) {
      dispatch(loginFailure());
    }
  }

  return (
    <div className='login'>
      <Navbar />
      <div className='container'>
        <div className='wrapper'>

          <span className='title'>Login</span>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              value={enteredValues.email}
              onChange={handleChange}
              name='email'
            />
            <input
              type='password'
              placeholder='Password'
              value={enteredValues.password}
              onChange={handleChange}
              name='password'
            />
            <button>Login</button>
          </form>

          <p>{"You don't have an account?"}
            <Link href={"/register"} className='link'> Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
