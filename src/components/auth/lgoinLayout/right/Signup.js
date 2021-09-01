import React from 'react';
import { useState } from 'react';
import './SignupStyle.css';

const Signup = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);

    function handleChange(e, elementName) {
        e.preventDefault();
        if (elementName === 'firstName') {
            console.log(e.target.value);
            setFirstName(e.target.value);
        }
        else if (elementName === 'lastName') {
            console.log(e.target.value);
            setLastName(e.target.value);
        }
        else if (elementName === 'email') {
            console.log(e.target.value);
            setEmail(e.target.value);
        }
        else if (elementName === 'password') {
            console.log(e.target.value);
            setPassword(e.target.value);
        }
        else if (elementName === 'rePassword') {
            console.log(e.target.value);
            setRePassword(e.target.value);
        }
    }


    return (
        <>
            <div className='signup-box'>
                <span className="title-text">Create a New Account</span>
                <div className="signup-form">
                    <input
                        type='text'
                        id='firstName'
                        onChange={(e) => handleChange(e, 'firstName')}
                        value={firstName}
                        placeholder='First Name'
                        className='input-field' />
                    <br />
                    <input
                        type='text'
                        id='lastName'
                        onChange={(e) => handleChange(e, 'lastName')} v
                        alue={lastName}
                        placeholder='Last Name'
                        className='input-field' />
                    <br />
                    <input
                        type='text'
                        id='email'
                        onChange={(e) => handleChange(e, 'email')}
                        value={email}
                        placeholder='Email Address'
                        className='input-field' />
                    <br />
                    <input
                        type='password'
                        id='password'
                        onChange={(e) => handleChange(e, 'password')}
                        value={password}
                        placeholder='Password'
                        className='input-field' />
                    <br />
                    <input
                        type='password'
                        id='rePassword'
                        onChange={(e) => handleChange(e, 'rePassword')}
                        value={rePassword}
                        placeholder='Confirm Password'
                        className='input-field' />

                </div>
            </div>
        </>
    )
}

export default Signup
