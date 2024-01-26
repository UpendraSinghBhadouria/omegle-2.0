"use client";

import React, { useState } from 'react'
import './signup.scss';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import AddAvatar from '../../assets/addAvatar.png';
import Image from 'next/image';
import axios from 'axios';

const signup = () => {

    const [enteredValues, setEnteredValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setEnteredValues((prev) => {
            return { ...prev, [event.target.name]: event.target.value };
        })
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        try {
            const {name,email,password} = enteredValues;
            const res = await axios.post("http://localhost:8000/api/auth/register",{
                name,email,password
            });
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='register'>
            <Navbar />
            <div className='container'>
                <div className='wrapper'>

                    <span className='title'>Register</span>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Name'
                            value={enteredValues.name}
                            name='name'
                            onChange={handleChange}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            value={enteredValues.email}
                            name='email'
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            value={enteredValues.password}
                            name='password'
                            onChange={handleChange}
                        />
                        <input
                            type='file' id='file' style={{ display: "none" }} />
                        <label htmlFor='file'>
                            <Image width={32} src={AddAvatar} alt="" />
                            <span>Add an avatar</span>
                        </label>
                        <button>Sign up</button>
                    </form>
                    <p>You do have an account?
                        <Link href={"/login"} className='link'> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default signup
