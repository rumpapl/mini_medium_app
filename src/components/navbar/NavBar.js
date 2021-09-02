import React from 'react';
import { FaMediumM } from 'react-icons/fa';
import {
    Link
} from "react-router-dom";

import Button from '../CommonComponents/button/Button';


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {/* <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                        <div className="d-inline-block align-top">
                            <FaMediumM />
                        </div>
                        Bootstrap
                    </Link>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            {/* <a className="nav-link " href="#">Active</a> */}
                            <Link to="/bookmark" className="nav-link ">Bookmark</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">notification</a>
                        </li>
                        <li className="nav-item">
                            <Button>profile</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
