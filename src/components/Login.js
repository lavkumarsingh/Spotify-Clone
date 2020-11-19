import React from 'react'
import { loginUrl }  from './spotify'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <img src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg" alt="" />
            <a href={loginUrl}>SIGNIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
