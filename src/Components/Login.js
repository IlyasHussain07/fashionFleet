import React, { useState } from 'react';
import Styles from '../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import Image1 from '../images/logo.png'
import { Link } from 'react-router-dom';

export default function Login() {

    let [isLabelEnable, setIsLabelEnable] = useState(false);
    let [isLoginMessage, setIsLoginMessage] = useState(false);
    let [isInvalid, setIsInvalid] = useState(false);
    let [isEmptyDetails, setIsEmptyDetails] = useState(false);
    let [isSignUpSuccuss, setIsSignUpSuccuss] = useState(false);
    let [isUserName, setIsUserName] = useState("");

    let [isUser, setIsUser] = useState("");
    const dispatch = useDispatch();
    const Userhandler = () => {
        if (isUser.length === 0) {
            setIsEmptyDetails(true);
        }
        else if (isUser.length > 10 || isUser.length < 10) {
            setIsInvalid(true);
        }
        else if (isUser.length === 10) {
            if (isUser === "9581439611") {
                dispatch({ type: "GetUser", user: "Ilyas" });
                setIsLoginMessage(true);
            }
            else {
                setIsSignUpSuccuss(true);
            }
        }
    }
    const signupHandler = () => {
        dispatch({ type: "GetUser", user: isUserName });
        setIsUser('');
        setIsUserName("");
        setIsSignUpSuccuss(false);
    }
    const SkipLogin = () => {
        dispatch({ type: "GetUser", user: "Guest" });
    }

    return (
        <div className={Styles.login_page}>
            <div>
                <div className={Styles.image_container}>
                    <img src={'https://media.istockphoto.com/vectors/mega-sale-banner-design-with-limited-time-discount-offer-vector-flat-vector-id1197911449'}
                        alt='advertisement' />
                </div>
                <div className={Styles.login}>
                    <div className={Styles.login_header}>
                        <p>Login or Signup</p>
                    </div>
                    <div className={Styles.login__body}>
                        <div className={Styles.form}>
                            <div className={Styles.form_link}>
                                <div className={Styles.form_inputs} >
                                    <label className={isLabelEnable ? Styles.placeholderOn : Styles.placeholder}>Mobile Number<span>*</span></label>
                                    <input type="tel"
                                        onFocus={() => setIsLabelEnable(true)}
                                        value={isUser}
                                        onChange={(e) => setIsUser(e.target.value)}
                                    />
                                    <label className={Styles.region}>+91</label>
                                </div>
                                <p>By Continuing, I agree to the <span>Terms of use </span>
                                    & <span>Privacy Policy</span></p>
                                <div className={Styles.btn}>
                                    <button onClick={Userhandler} className={Styles.btn_continue}>CONTINUE</button>
                                    <p>OR</p>
                                    <Link to='/' style={{ textDecoration: "none", color: "#000" }}><button onClick={SkipLogin} className={Styles.btn_skip}>SKIP</button></Link>
                                </div>
                                <p>Have trouble loggin in? <span>Get Help</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custome Messages */}
            <div className={isLoginMessage ? Styles.successMessage : Styles.successMessageOff}>
                <div className={Styles.message}>
                    <div className={Styles.img_container}>
                        <img src={Image1} alt="logo" />
                    </div>
                    <span>Login Successful</span>
                    <Link to='/' style={{ textDecoration: "none", color: "#000" }}><button onClick={() => setIsLoginMessage(false)}>CONTINUE</button></Link>
                </div>
            </div>

            <div className={isInvalid ? Styles.invalidMessage : Styles.invalidMessageOff}>
                <div className={Styles.message}>
                    <div className={Styles.img_container}>
                        <img src={Image1} alt="logo" />
                    </div>
                    <span>Invalid Mobile Number</span>
                    <button onClick={() => setIsInvalid(false)}>CANCEL</button>
                </div>
            </div>

            <div className={isEmptyDetails ? Styles.emptyDetails : Styles.emptyDetailsOff}>
                <div className={Styles.message}>
                    <div className={Styles.img_container}>
                        <img src={Image1} alt="logo" />
                    </div>
                    <span>Please Enter the Mobile Number</span>
                    <button onClick={() => setIsEmptyDetails(false)}>CANCEL</button>
                </div>
            </div>

            <div className={isSignUpSuccuss ? Styles.signInSuccess : Styles.signInSuccessOff}>
                <div className={Styles.message}>
                    <div className={Styles.img_container}>
                        <img src={Image1} alt="logo" />
                    </div>
                    <span>Signup Successful</span>
                    <input type="text"
                        placeholder="Enter User Name"
                        value={isUserName}
                        onChange={(e) => setIsUserName(e.target.value)}
                    />
                    <Link to='/' style={{ textDecoration: "none", color: "#000" }}><button onClick={signupHandler}>CONTINUE</button></Link>
                </div>
            </div>

        </div>
    )

}