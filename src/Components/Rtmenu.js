import React from 'react'
import './Rtmenu.css';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Rtmenu() {

    const userName = useSelector(state => state.user);

    return (
        <div className='box'>
            {
                userName === null ?
                    <div className='rightMenu1'>
                        <Link to='/login' style={{ textDecoration: "none", color: "#000" }}><p className='signIn'>Sign In/Join Us</p></Link>
                        <p className='rightMenu1_help' >Help?</p>
                    </div>
                    :
                    <div className='rightMenu1'>
                        <p className='signIn'>Hello, <b>{userName}!</b></p>
                        <p className='rightMenu1_help' >Help?</p>
                    </div>

            }

            {/* <div className={isEnable ? 'popup_1On' : 'popup_1Off'}>
                <div className='login_page'>
                    <div className='login_header'>
                        <h2>Welcome to Fashion Fleet</h2>
                        <Close className='login_close' onClick={() => setIsEnable(false)}></Close>
                    </div>
                    <p styles={{ padding: "10px" }} >Join/Sign in using</p>
                    <div className='login_nav'>

                        <button className='button_curser'>Facebook</button>
                        <button className='button_curser'>Google</button>
                    </div>
                    <p style={{ textAlign: "center" }}>or</p>
                    <div className='login_body'>
                        <label>Enter Mobile Number / Email</label>

                        <input type='text'></input>
                        <button type='submit' className='button_curser'>CONTINUE</button>
                    </div>
                    <p styles={{ padding: "10px" }}>By Signing In, I agree to Terms and Conditions.</p>
                </div>
            </div> */}




            {/* <div className={popPop ? 'dropDown_1On' : 'dropDown_1Off'}>
                <div className='login_container1'>
                    <div className='DropDown_close'>
                        <Close className='help_close' onClick={() => setPopPop(false)}></Close>
                        <div className='dropDown_body'>
                            <h3 style={{ color: "orange" }}>Get Assistance</h3>
                            <br></br>
                            <p>Your Account</p>
                            <p>Your Orders</p>
                            <p>Your Whislists</p>
                            <p>Your Recommendations</p>
                            <p>contact us</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
