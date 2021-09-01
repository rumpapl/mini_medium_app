import React from 'react';
import { useState } from 'react';
import './SignupStyle.css';
import Button from '../../../CommonComponents/button/Button';

const Signup = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);

    const lastNameInputRef = React.useRef(null);
    const emailInputRef = React.useRef(null);
    const passwordInputRef = React.useRef(null);
    const rePasswordInputRef = React.useRef(null);


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

    function handleNext(e, elementName) {
        if (e.key === 'Enter') {
            if (elementName === 'lastName') {
                lastNameInputRef.current.focus();
            }
            else if (elementName === 'email') {
                emailInputRef.current.focus();
            }
            else if (elementName === 'password') {
                passwordInputRef.current.focus();
            }
            else if (elementName === 'rePassword') {
                rePasswordInputRef.current.focus();
            }
        }
    }

    function onClick(){
        console.log('inside onclick');
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
                        onKeyPress={(e) => handleNext(e, 'lastName')}
                        value={firstName}
                        placeholder='First Name'
                        className='input-field' />
                    <br />
                    <input
                        type='text'
                        id='lastName'
                        onChange={(e) => handleChange(e, 'lastName')}
                        ref={lastNameInputRef}
                        onKeyPress={(e) => handleNext(e, 'email')}
                        value={lastName}
                        placeholder='Last Name'
                        className='input-field' />
                    <br />
                    <input
                        type='text'
                        id='email'
                        onChange={(e) => handleChange(e, 'email')}
                        ref={emailInputRef}
                        onKeyPress={(e) => handleNext(e, 'password')}
                        value={email}
                        placeholder='Email Address'
                        className='input-field' />
                    <br />
                    <input
                        type='password'
                        id='password'
                        onChange={(e) => handleChange(e, 'password')}
                        ref={passwordInputRef}
                        onKeyPress={(e) => handleNext(e, 'rePassword')}
                        value={password}
                        placeholder='Password'
                        className='input-field' />
                    <br />
                    <input
                        type='password'
                        id='rePassword'
                        onChange={(e) => handleChange(e, 'rePassword')}
                        ref={rePasswordInputRef}
                        value={rePassword}
                        placeholder='Confirm Password'
                        className='input-field' />

                    <Button className='login-btn' onClick={onClick}>Login</Button>
                </div>
            </div>
        </>
    )
}

export default Signup
