import React from "react"
import { API_URL } from "../constants.js"
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div>
                <h1>Messenger</h1>
            </div>
            <a href={API_URL + "/oauth2/authorization/google"} className="google-btn">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo" />
                Login with Google
            </a>
            <div className="version">v1.0.0</div>
        </div>
    )
}

export default Login