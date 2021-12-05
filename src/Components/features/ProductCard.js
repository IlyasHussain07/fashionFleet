import React, { useState } from 'react'
import "../styles/Productcard.css"
import { useDispatch } from 'react-redux'

export default function ProductCard(props) {

    const dispatch = useDispatch();
    let [isAddCart, setIsAddCart] = useState(false);
    let [isWishList, setIsWishList] = useState(false);

    return (
        <div className="Productcard_child">
            <div className="image_container">
                <img src={props.image} alt={props.id} className="Productimage" />
                <div class="overlay">
                    {
                        isAddCart === true ?
                            <button className="btn_cart_disable">Added To Cart</button>
                            :
                            <button className="btn_cart" onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    items: {
                                        _id: props._id,
                                        title: props.title,
                                        bName: props.bName,
                                        image: props.image,
                                        price: props.price,
                                        oldprice: props.oldprice,
                                        reviews: props.review,
                                        rating: props.rating,
                                        count: props.count,
                                        off: props.off,
                                        cardImage1: props.cardImage1,
                                        cardImage2: props.cardImage2,
                                        cardImage3: props.cardImage3,
                                        cardImage4: props.cardImage4
                                    }
                                })
                                setIsAddCart(true)
                            }} >Add To Cart</button>

                    }
                    {
                        isWishList === true ?
                            <button className="btn_wishlist_disable">Added To Wishlist</button>
                            :
                            <button className="btn_wishlist" onClick={() => {
                                setIsWishList(true)
                            }}>Add To Wishlist</button>
                    }


                </div>
            </div>
            <div className="product_details">
                <p className="productCard_title">{props.title}</p>
                <p> Rs:{props.price}  <del className="del">Rs{props.oldprice}</del> <small>({props.off}% off)</small></p>
                <div className="reviews">
                    <p className="review">Reviews:{props.review}</p>
                    <p className="Rating">Rating:{props.rating}</p>
                </div>
            </div>



        </div>
    )
}
