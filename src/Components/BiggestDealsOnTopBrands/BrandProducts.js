import React from "react"
import "./BrandProducts.css"


function BrandProducts({ image, title, offer }) {
    return (
        <div className="product__home">
            <div className="product__imagArea">
                <img className="product__img" src={image} alt="image1" />
            </div>
            <div className="product__titleArea">
                <span className="product__title">{title}</span>
            </div>
            <div className="product__tagArea">
                <span className="product__tag">{offer}</span>
            </div>

        </div>
    )

}
export default BrandProducts;
