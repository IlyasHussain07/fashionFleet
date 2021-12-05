import React, { useState } from 'react'
import HeaderLogo from '../Headerlogo'
import TopMenu from '../Header_menu'
import RightMenu from '../Header'; // Right menu
import RightTopMenu from '../Rtmenu'
import Styles from '../styles/HeaderIntegration.module.css'
import SideNavigationBar from './SideNavigationBar';

export default function HomeIntergration() {

    let [isNavbar, setIsNavbar] = useState(false);

    return (
        <div className={Styles.homeIntergration}>
            <div className={Styles.sideNavBar}>
                <div className={Styles.hambugerMenu} onClick={() => setIsNavbar(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <SideNavigationBar isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
            </div>
            <HeaderLogo />
            <div className={Styles.part_2}>
                <div className={Styles.section_1}>
                    <RightTopMenu />
                </div>
                <div className={Styles.section_2}>
                    <TopMenu className={Styles.section_2_topMenu} />
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}