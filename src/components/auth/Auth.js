import React from 'react';
import LoginPageLayout from './lgoinLayout/LoginPageLayout';
import SocialMediaLogin from './lgoinLayout/left/SocialMediaLogin';
import Signin from './lgoinLayout/right/Signin';
import Login from './lgoinLayout/header/Login';

const Auth = () => {
    return (
        <LoginPageLayout head={<Login />} left={<SocialMediaLogin/>} right={<Signin/>}/>
    )
}

export default Auth
