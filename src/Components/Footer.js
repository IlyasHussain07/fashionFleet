import React from 'react'
import './Footer.css'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
    return (
        <div>
            <div className='footer__main'>
                <div className='footer__main'>
                    <div className='footer__section1'>
                        <div className='footer__options none'>
                            <span>Fashion Fleet</span>
                            <p>Contact Us</p>
                            <p>Who We Are</p>
                            <p>Terms & Conditions</p>
                            <p> Fees & Payments</p>
                            <p>Refunds</p>
                        </div>
                        <div className='footer__options'>
                            <span>Help</span>
                            <p>Track Your Order</p>
                            <p>Payments</p>
                            <p>Returns</p>
                            <p>Cancellation</p>
                            <p>FAQ</p>
                            <p>Customer Care</p>

                        </div>
                        <div className='footer__options none'>
                            <span>Shop By</span>
                            <p>Men</p>
                            <p>Women</p>
                            <p>Kids</p>
                            <p>Stores</p>
                            <p>New Arrivals</p>
                            <p>Brand Directory</p>



                        </div>
                        <div className='footer__options'>
                            <span>Follow Us</span>
                            <p><FacebookIcon className='icons' />Facebook</p>
                            <p> <InstagramIcon className='icons' />Instagram</p>
                            <p><PinterestIcon className='icons' />Pintrest</p>
                            <p><TwitterIcon className='icons' />  Twitter</p>

                        </div>
                        <div className='footer__options2 ' >
                            <span>Download on mobile</span>
                            <img className="app" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="1" /><br />
                            <img className="app" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="2"></img>
                        </div>

                    </div>
                    <hr />
                    <div className='footer__section__2 none_sect-2'>
                        <p className="ps__1">POPULAR SEARCHES</p><hr />

                        <span className="searches">

                            Makeup |  Dresses For Girls|  T-Shirts |  Sandals | Headphones | Babydolls | Blazers For Men |  Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes |  Puma Shoes
                            Boxers | Wallets | Tops|  Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches  |Titan Watches | Designer Blouse | Gowns  |Rings
                            Cricket Shoes|Photo Frames|  Punjabi Suits | Bikini | Lipstick | Designers Sarees

                        </span>


                    </div>

                </div>
                <div>
                    <div className="contact">
                        In case of any concern,
                        <a href="/" data-reactid="316">Contact US</a>
                        <p> Telephone : +91-86-10221782</p>
                    </div>
                    <div className="tysons">
                        © 2021 www.fashionfleet.com. All rights reserved.
                    </div>
                </div>
            </div>



        </div>
    )
}