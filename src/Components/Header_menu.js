import React from 'react'
import "./Header.css"
import Tippy from "@tippyjs/react";
import MenTippy from "./onHoverMenuItems/menTippy";
import WomenTippy from "./onHoverMenuItems/womenTippy";
import KidsTippy from "./onHoverMenuItems/kidsTippy";
import IndieTippy from "./onHoverMenuItems/indie";
import KitchenTippy from "./onHoverMenuItems/kitchen";

export default function Header_menu() {
    return (
        <div className="header_1">
            <div className="row header_row ">
                <div className="header_menu desktop">
                    <Tippy content={<MenTippy />} interactive={true} theme="light" offset={[10, 20]} maxWidth="100%" ><p>MENS</p></Tippy>
                    <Tippy content={<WomenTippy />} interactive={true} theme="light" offset={[10, 20]} maxWidth="100%"><p>WOMENS</p></Tippy>
                    <Tippy content={<KidsTippy />} interactive={true} theme="light" offset={[10, 20]} maxWidth="100%"><p>KIDS</p></Tippy>
                    <Tippy content={<IndieTippy />} interactive={true} theme="light" offset={[10, 20]} maxWidth="100%"><p>HOME </p></Tippy>
                    <Tippy content={<KitchenTippy />} interactive={true} theme="light" offset={[10, 20]} maxWidth="100%"><p>KITCHEN</p></Tippy>
                    <div>
                        <p className="dropdown-toggle" data-toggle="dropdown" >OTHERS</p>
                        <ul className="dropdown-menu">
                            <li>TREDITIONAL</li>
                            <li>ETHENICWEAR</li>
                            <li>TRENDYWEAR</li>
                            <li>TOP BRANDS</li>
                            <li>FASHION WEAR</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}


