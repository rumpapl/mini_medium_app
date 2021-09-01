import React from 'react';
import './buttonStyle.css';

const Button = (props) => {
    return (
        <>
        <button className={props.className+ ' default-button'} onClick={props.onClick} >{props.children}</button>
        </>
    )
}

export default Button
