import React from 'react'
import { useState } from 'react';
import { MdClose } from "react-icons/md"
import "../styles/cartProduct.css"

export default function Cartproduct({ _id, image, title, price, oldprice, count }) {
    let [counts, setCount] = useState(count)
    function add() {
        if (counts) {
            setCount(counts += 1);
        }
        else {
            setCount(1);
        }
    }
    function sub() {
        if (counts) {
            setCount(counts -= 1);
        }
        else {
            setCount(1);
        }
    }
    return (
        <div className=" cart_product" >
            <div className="d-flex cart_header" >
                <div className="mr-2 cart_img">
                    <img src={image} alt="image1" style={{ width: "150px" }} />
                </div>
                <div>
                    <span class="">{title}</span>
                    <div>
                        <p>Rs.{price} <del>{oldprice}</del></p>
                        <span>Qty</span>
                        <div className="d-flex justify-content-between align-items-center qtyButton">
                            <button onClick={add} className="cart_product_btn">+</button>
                            <p className="mt-3">{counts}</p>
                            <button onClick={sub} className="cart_product_btn">-</button>

                        </div>
                    </div>
                </div>
            </div>
            <MdClose className="closeIcon" style={{ cursor: "pointer" }} />
        </div>
    )
}
