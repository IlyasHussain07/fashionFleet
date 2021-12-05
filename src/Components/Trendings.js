import React from 'react'
import Casualshirt from "../images/casual-shirt.webp"
import Image2 from "../images/image2.webp"
import Image3 from "../images/image3.webp"
import Image4 from "../images/image4.webp"
import Image5 from "../images/image5.webp"
import Image6 from "../images/image6.webp"
import Man1 from "../images/man1.webp"
import Image8 from "../images/image8.webp"
import Image10 from "../images/image10.webp"
import Image9 from "../images/image9.webp"

import "./Trendings.css"

export default function Trendings() {
    return (
        <div>
            <div class="m-3">
                <h3 class="text-secondary">TRENDING WESTERN WEAR</h3><hr />
                <div class="m-4" >
                    <div className="image_row">
                        <div class=" m-3 image  ">
                            <img src={Casualshirt} alt="img1" class="rounded " />
                            <div class="details">
                                <h4>Moss&Melenga</h4>
                                <p class="text-muted">the color of the season</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image" >
                            <img src={Image2} alt="img1" class="rounded " />
                            <div className="details">
                                <h4>Mod blocking</h4>
                                <p class="text-muted">Your sofa to fridge look</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image">
                            <img src={Image3} alt="img1" class="rounded " />
                            <div class="details">
                                <h4>Red Tops & Tees</h4>
                                <p class="text-muted">The unoffcial symbol of all things bold</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image">
                            <img src={Image4} alt="img1" class="rounded " />
                            <div className="details">
                                <h4>Smart Daily Wear Tees</h4>
                                <p class="text-muted">Something New for Everyday</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image">
                            <img src={Image5} alt="img1" class="rounded " />

                            <div className="details">
                                <h4>Eco-Friendly Styles</h4>
                                <p class="text-muted">When ethics meet aesthetics</p>
                                <span class="text-secondary">+Explore</span></div>
                        </div>
                        <div class=" m-3 image ">
                            <img src={Image6} alt="img1" class="rounded " />
                            <div className="details">
                                <h4 >Vibrant Colorblocked</h4>
                                <p class="text-muted">The opposite ends of the color palette</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image" >
                            <img src={Man1} alt="img1" class="rounded " />
                            <div className="details">
                                <h4>SuperHero Tees</h4>
                                <p class="text-muted">Show off your fandom in these</p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image">
                            <img src={Image8} alt="img1" class="rounded " />
                            <div className="details">
                                <h4 >Versatile  Collection</h4>
                                <p class="text-muted">Just  Your  Stripe of Wardrode staple </p>
                                <span class="text-secondary">+Explore</span>
                            </div>

                        </div>
                        <div class=" m-3 image">
                            <img src={Image10} alt="img1" class="rounded " />

                            <div className="details">
                                <h4>Jack&Jones</h4>
                                <p class="text-muted">Bomber Jacket </p>
                                <span class="text-secondary">+Explore</span>
                            </div>
                        </div>
                        <div class=" m-3 image">
                            <img src={Image9} alt="img1" class="rounded " />

                            <div className="details">
                                <h4>Levis</h4>
                                <p class="text-muted">Slim Fit Casual Shirt</p>
                                <span >+Explore</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
