import React from 'react'
import "./Topbrands.css"


import Brand1 from "../images/allen.webp"
import Brand2 from "../images/biba.jpg"
import Brand3 from "../images/gas.webp"
import Brand4 from "../images/jack.webp"
import Brand5 from "../images/levis.webp"
import Brand6 from "../images/only.webp"
import Brand7 from "../images/marks.webp"
import Brand8 from "../images/raymond.webp"
import Brand9 from "../images/superdry.webp"
import Brand10 from "../images/vanheusen.webp"
import logo1 from "../images/allen-logo.jfif"
import logo2 from "../images/biba-logo.jpg"
import logo3 from "../images/gas-logo.jfif"
import logo4 from "../images/jack-logo.jfif"
import logo5 from "../images/levis-logo.jfif"
import logo6 from "../images/only-logo.jfif"
import logo7 from "../images/mark-logo.jfif"
import logo8 from "../images/raymond-logo.jfif"
import logo9 from "../images/superdry-logo.jfif"
import logo10 from "../images/vanheusen-logo.jfif"

import Product from "./TopbrandProduct"
export default function TopBrands() {
    return (
        <div>
            <h3 className="topBrandsTitle">TOP BRANDS</h3>

            <div className="header_block">


                <Product prdName="Allen" img={Brand1} brandimg={logo1} />
                <Product prdName="BIBA" img={Brand2} brandimg={logo2} />
                <Product prdName="GAS" img={Brand3} brandimg={logo3} />
                <Product prdName="JACK & JONES" img={Brand4} brandimg={logo4} />
                <Product prdName="LEVIS" img={Brand5} brandimg={logo5} />
                <Product prdName="ONLY" img={Brand6} brandimg={logo6} />
                <Product prdName="MARKS & SPENCER" img={Brand7} brandimg={logo7} />
                <Product prdName="RAYMOND" img={Brand8} brandimg={logo8} />
                <Product prdName="SUPERDRY" img={Brand9} brandimg={logo9} />
                <Product prdName="VANHEUSEN" img={Brand10} brandimg={logo10} />

            </div>
        </div>
    )
}