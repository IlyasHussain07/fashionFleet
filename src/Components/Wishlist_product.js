import React from "react"
import "./Wishlist_product.css"
import Cross from "@material-ui/icons/CancelOutlined"

export default function WishlistProduct({ id, prdPrice, priceOff, img, priceOffpercentage, prdName }) {



    return (
        <div>

            <div className="Product_header">

                <div className="product_layout">
                    <Cross className="cross" />
                    <div className="image_layout">
                        <img src={img} alt="image1" />
                    </div>

                    <div className="product_price">
                        <p> {prdName}</p>
                        <span><strong>Rs:{prdPrice}</strong></span>

                        <del> <span>Rs:{priceOff}</span></del>
                        <span><small>{priceOffpercentage}</small></span>
                    </div>

                    <hr />

                    <div className="movetobag">
                        <p><strong>MOVE TO BAG</strong></p>
                    </div>
                    <br />
                </div>

            </div >
        </div>
    )



}
