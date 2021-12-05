import React from 'react'
import Styles from './DealsOfTheDay.module.css';
import Image1 from '../images/banner-1_watch.png'
import Image2 from '../images/banner-4_shoes.png'
import Image3 from '../images/banner-3_2_makeup.png'
import Image4 from '../images/banner-3_1_makeup.png'
import { Link } from 'react-router-dom';

export default function DealsOfTheDay() {
    return (
        <>
            <div className={Styles.title}>
                <h2>DEALS OF THE DAY</h2>
            </div>
            <div className={Styles.deals}>
                <div className={Styles.section_1}>
                    <div className={Styles.watches}>
                        <div className={Styles.watchesDetails}>
                            <p className={Styles.watchesDetails_1}>SALE</p>
                            <p className={Styles.watchesDetails_2}>Under  ₹499</p>
                            <p className={Styles.watchesDetails_3}>watches best selling product</p>
                            <Link to='/watch'><button>Shop Now</button></Link>
                        </div>
                        <div className={Styles.watches_container}>
                            <Link to='/watch'><img src={Image1} alt="Watches" /></Link>
                        </div>
                    </div>
                    <div className={Styles.shoes}>
                        <div className={Styles.shoesDetails}>
                            <p>MEGA SALE</p>
                            <p>50 % OFF</p>
                        </div>
                        <div className={Styles.shoes_container}>
                            <Link to='/shoes'><img src={Image2} alt="shoes" /></Link>
                        </div>
                        <div className={Styles.circle}></div>
                    </div>
                </div>
                <div className={Styles.section_2}>
                    <div className={Styles.makeup_container}>
                        <Link to='/makeup'><img src={Image3} alt='makeup_products' /></Link>
                    </div>
                    <div className={Styles.makeup_details}>
                        <span>Big Beauty SALE</span>
                        <p>Buy 2, Get 1 Free</p>
                        <p>On Makeup</p>
                        <Link to='/makeup'><button>40% OFF</button></Link>
                    </div>
                    <div className={Styles.makeup_container}>
                        <Link to='/makeup'><img src={Image4} alt="makeup" className={Styles.image4} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
