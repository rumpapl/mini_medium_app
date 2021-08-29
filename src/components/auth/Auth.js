import React from 'react';
import LoginPageLayout from './lgoinLayout/LoginPageLayout';
import SocialMediaLogin from './lgoinLayout/left/SocialMediaLogin';
import Login from './lgoinLayout/header/Login';
import Signup from './lgoinLayout/right/Signup';

const Auth = () => {
    return (
        <LoginPageLayout head={<Login />} left={<SocialMediaLogin/>} right={<Signup/>}/>
    )
}

export default Auth
