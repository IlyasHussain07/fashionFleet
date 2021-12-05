import React from 'react'
import Image1 from "../images/slider_image1.webp"
import Image2 from "../images/slider_image2.webp"
import Image3 from "../images/slider_image3.webp"
import Image4 from "../images/slider_image4.webp"
import "./Main.css"

import DealsOfTheDay from './DealsOfTheDay'
import BiggestDealsOnTopBrand from './BiggestDealsOnTopBrands/DealTopBrands'
import ExploreTopBrands from './Topbrands'
import Trendings from './Trendings'

export default function Main() {
    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <div class="carousel-inner"  >
                    <div class="carousel-item active images"  >
                        <img src={Image1} alt="img1" />
                    </div>
                    <div class="carousel-item images ">
                        <img src={Image2} alt="img2" />
                    </div>
                    <div class="carousel-item images" >
                        <img src={Image3} alt="img3" />
                    </div>
                    <div class="carousel-item images">
                        <img src={Image4} alt="img4" />
                    </div>
                </div>
            </div>
            <DealsOfTheDay />
            <BiggestDealsOnTopBrand />
            <ExploreTopBrands />
            <Trendings />
        </div>
    )
}
