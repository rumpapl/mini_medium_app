import React from 'react';
import FacebookLogin from 'react-facebook-login';



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
                callback={responseFacebook}
            />
        </>
    )
}

export default FBLogin
