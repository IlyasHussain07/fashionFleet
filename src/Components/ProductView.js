import React from 'react'
import '../styles/ProductView.css'
import image1 from '../images/image_1.webp'
import image2 from '../images/image_2.webp'
import image3 from '../images/image_3.webp'
import image4 from '../images/image_4.webp'

export default function ProductView() {
    return (
        <div>
            <div className="image__main">
                <div className="image__main1">
                    <img  src={image1} alt={"image_product"} />
                    <img src={image2} alt={"image_product"} />
                </div>
                <div className="image__main1">
                    <img src={image3} alt={"image_product"} />
                    <img src={image4} alt={"image_product"} />
                </div>

            </div>
        </div>
    )
}
