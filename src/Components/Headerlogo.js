import React from 'react'
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom'
export default function Headerlogo() {

    const styleHandler = {
        paddingTop: "10px",
        width: "170px"
    }

    return (
        <div>
            <Link to='/'> <img src={Logo} alt="image1" style={styleHandler} /></Link>
        </div>
    )
}
