import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './SocialMediaLoginStyle.css';
import Icon from './Icon';


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
                cssClass="social-media-login-btn fb-btn"
                textButton='  LOGIN WITH FACEBOOK'
                icon={<Icon/>}
                callback={responseFacebook}
            />
        </>
    )
}

export default FBLogin
