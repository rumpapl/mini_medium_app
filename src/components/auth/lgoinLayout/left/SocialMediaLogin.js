import React from 'react';
import FBLogin from './FBLogin';
import './SocialMediaLoginStyle.css';

const SocialMediaLogin = () => {
    return (
        <>
            <div className='flex-column d-flex justify-content-center align-items-center'  >
                <div className='fb-login'>
                    <FBLogin />
                </div>

            </div>
        </>
    )
}

export default SocialMediaLogin
