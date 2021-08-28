import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './SocialMediaLoginStyle.css';
import { FaFacebookF } from "react-icons/fa";




const FBLogin = () => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <>
            <FacebookLogin
                appId="1973283479501984"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                cssClass="fb-login-btn"
                textButton='  LOGIN WITH FACEBOOK'
                icon={<FaFacebookF/>}
                callback={responseFacebook}
            />
        </>
    )
}

export default FBLogin
