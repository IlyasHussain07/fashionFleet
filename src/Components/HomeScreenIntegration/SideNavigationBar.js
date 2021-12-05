import React, { useState } from 'react';
import Styles from '../styles/HeaderIntegration.module.css';
import { MdPersonPin, MdClose, MdNavigateNext } from 'react-icons/md';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Options from './NavbarOptions.json'

export default function SideNavigationBar(props) {

    let { isNavbar, setIsNavbar } = props;
    const userName = useSelector(state => state.user);

    let [isMens, setIsMens] = useState(false);
    let [isWomens, setIsWomens] = useState(false);
    let [isKids, setIsKids] = useState(false);
    let [isHome, setIsHome] = useState(false);
    let [isBeauty, setIsBeauty] = useState(false);

    return <div className={isNavbar ? Styles.navabar : Styles.navabarOff}>
        <div className={Styles.navbar_section_1}>
            <div className={Styles.navabar_header}>
                <div className={Styles.userProfile}>
                    <MdPersonPin className={Styles.headerIcons_1} />
                </div>
                <MdClose className={Styles.headerIcons_2} onClick={() => setIsNavbar(false)} />
            </div>
            <div className={Styles.userName_navbar}>
                {
                    userName === null ?
                        <Link to='/login' style={{ textDecoration: "none", color: "#fff" }} onClick={() => setIsNavbar(false)}>
                            <p>SignUp / Login</p>
                        </Link> :
                        <p>Hello {userName}!</p>
                }
                <MdNavigateNext className={Styles.headerIcons_2} />
            </div>
        </div>
        <div className={Styles.navbar_section_2} >
            <div className={Styles.navabar_body_1}>
                <ul>
                    <li onClick={() => setIsMens(!isMens)}><p>Mens</p> <MdNavigateNext className={Styles.navbar_nextIcon} /> </li>
                    <div className={isMens ? Styles.navbar_hover : Styles.navbar_hoverOff} onClick={() => {
                        setIsNavbar(false)
                        setIsMens(!isMens)
                    }}>
                        {
                            Options.map((item) => item.category === "mens" ? <p key={item._id}>{item.name}</p> : "")
                        }
                    </div>
                    <li onClick={() => setIsWomens(!isWomens)}><p>Womens</p> <MdNavigateNext className={Styles.navbar_nextIcon} /> </li>
                    <div className={isWomens ? Styles.navbar_hover : Styles.navbar_hoverOff} onClick={() => {
                        setIsNavbar(false)
                        setIsWomens(!isWomens)
                    }}>
                        {
                            Options.map((item) => item.category === "womens" ? <p key={item._id}>{item.name}</p> : "")
                        }
                    </div>
                    <li onClick={() => setIsKids(!isKids)}><p>Kids</p> <MdNavigateNext className={Styles.navbar_nextIcon} /> </li>
                    <div className={isKids ? Styles.navbar_hover : Styles.navbar_hoverOff} onClick={() => {
                        setIsNavbar(false)
                        setIsKids(!isKids)
                    }}>
                        {
                            Options.map((item) => item.category === "kids" ? <p key={item._id}>{item.name}</p> : "")
                        }
                    </div>
                    <li onClick={() => setIsHome(!isHome)}><p>Home & Living</p> <MdNavigateNext className={Styles.navbar_nextIcon} /> </li>
                    <div className={isHome ? Styles.navbar_hover : Styles.navbar_hoverOff} onClick={() => {
                        setIsNavbar(false)
                        setIsHome(!isHome)
                    }}>
                        {
                            Options.map((item) => item.category === "home" ? <p key={item._id}>{item.name}</p> : "")
                        }
                    </div>
                    <li onClick={() => setIsBeauty(!isBeauty)}><p>Beauty</p> <MdNavigateNext className={Styles.navbar_nextIcon} /> </li>
                    <div className={isBeauty ? Styles.navbar_hover : Styles.navbar_hoverOff} onClick={() => {
                        setIsNavbar(false)
                        setIsBeauty(!isBeauty)
                    }}>
                        {
                            Options.map((item) => item.category === "beauty" ? <p key={item._id}>{item.name}</p> : "")
                        }
                    </div>
                    <li onClick={() => setIsNavbar(false)}><p>Studio</p></li>
                </ul>
            </div>
            <hr />
            <div className={Styles.navabar_body_2} onClick={() => setIsNavbar(false)}>
                <ul>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>FashionFleet Insiders</li>
                    <li>Gift Cards</li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                    <li>Legal</li>
                </ul>
            </div>
        </div>
    </div>;
}
