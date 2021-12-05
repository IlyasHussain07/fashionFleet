import React from 'react'
import './Product_Details.css'
import Star from '@material-ui/icons/Star'


export default function ProductDetails() {
    return (
        <div className="details_main">
            <div>
                <h5>Nike</h5>
                <span>Men Navy Blue Brand Logo Printed T-shirt </span>
                <div className="button">
                    <span className='button_rating'>4<Star style={{ fontSize: 20, color: 'green' }}></Star></span>
                    <span>|Rating</span>
                </div>
            </div>
            <hr />
            <div className="price">
                <strong><span>RS:1244</span></strong>
                <del><span>RS:1244</span></del>
                <span>(65%OFF)</span>
                <br />
                <small>
                    <span>Inclusive all taxes</span>
                </small>
                <br />
                <span className="size"><strong>SELECT SIZE</strong></span>
                <strong> <span className="size_chart">Size chart</span></strong>

            </div>
            <div className="size_numbers">
                <button className="number">
                    <p>30</p>
                </button>
                <button className="number">
                    <p>32</p>
                </button>
                <button className="number">
                    <p>34</p>
                </button>
                <button className="number">
                    <p>36</p>
                </button>
                <button className="number">
                    <p>38</p>
                </button>
            </div>

            <div className="buttons">
                <button className="button_color">ADD TO BAG</button>
                <button>Wishlist</button>
            </div>
            <strong>
                <p>DELIVERY OPTION</p>
            </strong>
            <div className="inputs">
                <div className='pincode'>
                    <input type="number" placeholder="Enter  a PIN code" />
                    <button>check</button>
                </div>
                <p>Enter a pin code to provide you delivery time and availability</p>
                <span>Pay on delivery might be available</span>
                <br />
                <span>Easy 30 days returns and exchanges</span>
                <br />
                <span>100% cotton</span>
            </div>
            <hr />
            <div className='offers'>
                <strong>BEST OFFERS</strong>
                <ul>
                    <li>Coupon code: FASHION FLEET300</li>
                    <li>Coupon Discount: Rs. 400 off (check cart for final savings)</li>
                    <button style={{ color: "orange" }}>View Eligble Products</button>
                </ul>
                <strong>EMI option available</strong>
                <ul>
                    <li>70/month</li>
                </ul>
            </div>
            <hr />
            <div className='details'>
                <strong>PRODUCT DETAILS</strong>
                <br />
                <span>Navy blue Tshirt for men</span>
                <br />
                <span>Brand logo printed</span>
                <span>Regular length</span>
                <br />
                <span>Round neck</span>
                <br />
                <span>Short, regular sleeves</span>
                <br />
                <span>Knitted cotton fabric</span>
            </div>
            <hr />
            <div className='size_fit'>
                <strong>Size & Fit</strong>
                <br />
                <span>Regular Fit</span>
                <br />
                <span>The model (height 6') is wearing a size M</span>
                <hr />
                <strong>Material &care</strong>
                <br />
                <span>Pure Cotton</span>
                <br></br>
                <span>Machine wash</span>
            </div>
            <hr />
            <div className="specification">
                <strong>SPECIFICATIONS</strong>
                <div className='spec_row'>
                    <div className='coloumn1'>
                        <div className='option'>
                            <span>fabric</span>
                            <p>Pure cotton</p>
                        </div>
                        <div className='option'>
                            <span>Fit</span>
                            <p>Regular Fit</p>
                        </div>
                        <div className='option'>
                            <span>Length</span>
                            <p>Regular</p>
                        </div>
                        <div className='option'>
                            <span>Men Trend</span>
                            <p>Basics</p>
                        </div>
                        <div className='option'>
                            <span>Neck</span>
                            <p>Round</p>
                        </div>
                    </div>
                    <div className='coloumn2'>
                        <div className='option'>
                            <span>Washion Care</span>
                            <p>Machine Wash</p>
                        </div>
                        <div className='option'>
                            <span>Occasion</span>
                            <p>Casual</p>
                        </div>
                        <div className='option'>
                            <span>Weave Type</span>
                            <p>Knitted</p>
                        </div>
                        <div className='option'>
                            <span>Pattern</span>
                            <p>Solid</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}
