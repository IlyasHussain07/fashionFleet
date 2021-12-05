import React from 'react'
import { FaTag } from "react-icons/fa"
import Cartproduct from './Cartproduct'
import "../styles/Cart.css"
import Myntralogo from "../images/logo.png"
import Secure from "../images/secure.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {

    let basket = useSelector(state => state.cartBasket);

    return (
        <div>
            <div className="d-flex p-2 justify-content-between">
                <Link to='/'><img src={Myntralogo} alt="image2" style={{ width: "150px", paddingLeft: "20px" }} /></Link>
                <div className="d-flex align-items-center mr-3">
                    <img src={Secure} alt="image3" style={{ width: "20px", height: "20px" }} />
                    <span>100% SECURE</span>
                </div>
            </div>
            <hr></hr>
            {
                basket.length === 0 ?
                    <div className="cart_emptyBasket">
                        <div className="cart_img">
                            <img src={'https://png.pngtree.com/png-vector/20191109/ourlarge/pngtree-cart-shopping-basket-business-flat-line-filled-icon-vector-ba-png-image_1967717.jpg'} alt="empty basket" />
                        </div>
                        <p>There are no items in the basket</p>
                        <Link to='/shoes'><button>Shop Now</button></Link>
                    </div>
                    :
                    <div className="d-flex header Cart_container">
                        <div>
                            <div className="w-60 ">
                                <div class="d-flex justify-content-between border mt-4  p-3 align-items-center  header ">
                                    <div><span>check delivery time&services</span></div>
                                    <div>
                                        <button className="cart_pincode">ENTER PIN CODE</button>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border p-3">
                                    <span><FaTag /> Availabel Offers</span>
                                    <li><span>10% Instant Discount with RBL Bank Credit and Debit Cards on a min spend of Rs 2,500. TCA</span></li>
                                    <li><span> 10% Instant Discount with RBL Bank Credit and Debit Cards on a min spend of Rs 2,500. TCA</span></li>

                                    <li><span>15% Instant Discount with slice cards on a min spend of Rs 1,700. TCA</span></li>
                                    <li><span>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</span></li>
                                </div>
                            </div>
                            <div className="border mt-3 mb-3">
                                {
                                    basket.map(item => {
                                        return <Cartproduct
                                            key={item._id}
                                            _id={item._id}
                                            title={item.title}
                                            bName={item.bName}
                                            image={item.image}
                                            price={item.price}
                                            oldprice={item.oldprice}
                                            reviews={item.review}
                                            rating={item.rating}
                                            count={item.count}
                                            off={item.off}
                                            cardImage1={item.cardImage1}
                                            cardImage2={item.cardImage2}
                                            cardImage3={item.cardImage3}
                                            cardImage4={item.cardImage4}
                                        />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-left ml-3">
                            <div className="p-3">
                                <p>DONATE FOR COVID-19 RELIEF</p>

                                <label className="ml-2"><input type="checkbox" name="checkbox" /> Help India Fight Covid-19</label>
                                <div>
                                    <button className="cart_btns" >₹10</button>
                                    <button className="cart_btns">₹50</button>
                                    <button className="cart_btns">₹100</button>
                                    <button className="cart_btns">other</button>
                                </div>
                                <hr></hr>

                                <div>
                                    <p>COUPONS</p>
                                    <div className="d-flex justify-content-between  header">
                                        <span><FaTag /> Apply Coupons</span>
                                        <button className="cart_btns">Apply</button>
                                    </div>

                                </div>
                                <hr></hr>
                                <div>
                                    <span className="text-secondary">Price Details</span>
                                    <div className="d-flex justify-content-between  header">
                                        <span >Total MRP</span>
                                        <span >₹599</span>
                                    </div>
                                    <div className="d-flex justify-content-between  header">
                                        <span >COVID-19</span>
                                        <span >₹0</span>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="d-flex justify-content-between  header">
                                    <span >Total</span>
                                    <span >₹599</span>
                                </div>
                                <button className="cart_placeOrder">Place Order</button>
                            </div>
                        </div>
                    </div >
            }
        </div>
    )
}
