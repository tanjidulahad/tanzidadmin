import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { useGoogleSignIn } from '../../firebase/useFirebase';
import "./login.scss"

const Login = () => {
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const { googleLogin } = useGoogleSignIn()
    // const [user,setUser]=useState(true)
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        const state = location.state
        if (loggedIn) {
            if (state) {
                navigate(state.from.pathname)
            }
            else {
                navigate("/")
            }
        }
    }, [loggedIn,location.state,navigate])

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <div className="loginContainer">
            <div className="wrapper">

                <div className="title">TanzidAdmin</div>

                <div className="formContainer">
                    <h2 className="loginTitle">Log in with</h2>
                    <div className="socialLogin" onClick={googleLogin}>
                        <ul>

                            <li className="google">
                                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" />
                                Google</li>
                        </ul>
                    </div>

                    <div className="or">or</div>

                    <form className="formWrapper" onSubmit={handleSubmit}>

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <button className='submit' value="Log In" >Log In</button>

                    </form>

                </div>

                <div className="footer">
                    <div className='footerElement'>
                        Don't have an account?<span>Sign Up</span>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Login;