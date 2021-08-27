import React from 'react';
import './LoginPageLayoutStyle.css';

const LoginPageLayout = (props) => {
    return (
        <>
        {props.head}
        <div className='login-page'>
            <div className='col-6'>
                {props.left}
            </div>
            <div className='col-6'>
                {props.right}
            </div>
        </div>
        </>
    )
}

export default LoginPageLayout
