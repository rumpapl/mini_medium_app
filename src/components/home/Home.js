import React from 'react';
import NavBar from '../navbar/NavBar';
import { useHistory } from 'react-router-dom';
import Auth from '../auth/Auth';


const Home = () => {
    const [isLogedin, setIsLogedin] = React.useState(false);
    const history = useHistory();

    function goAuth() {
        history.push("/login")
        return <Auth/>
    }

    return (
        <>
            {isLogedin ?
                <div>
                    <NavBar />
                    <h1>home</h1>
                </div>
                :
               goAuth()

            }
        </>
    )
}

export default Home
