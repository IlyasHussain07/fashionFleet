import React from 'react'
import "./ProfileMenu.css"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Index({ isMenu, setIsMenu }) {

    let userName = useSelector(state => state.user);
    let dispatch = useDispatch();

    const Logouthandler = () => {
        dispatch({ type: "GetUser", user: null })
    }

    return (

        <>

            <div class={isMenu ? "dropdown-content" : "dropdown-content_off"} onMouseEnter={() => setIsMenu(true)} onMouseLeave={() => setIsMenu(false)} onClick={() => setIsMenu(false)}>
                <div>
                    <p><b>Welcome</b></p>
                    <p>To Acess Click Below</p>
                    {
                        userName === null ?
                            <Link to='/login' style={{ textDecoration: "none", color: "#000" }}><button className="profileMenu_btn">Login/Signup</button></Link>
                            :
                            <button className="profileMenu_btn" onClick={Logouthandler}>Logout</button>
                    }
                </div>
                <hr />
                <p>Orders</p>
                <p>Wishlist</p>
                <p>Gift Cards</p>
                <p>Contact us</p>
                <p>Fashion Insiders</p>
                <hr />
                <p>FashionFleet Credits</p>
                <p>Coupons</p>
                <p>Saved Cards</p>
                <p>Saved Adress</p>
            </div>
        </>

    )
}
