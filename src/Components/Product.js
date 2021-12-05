import React from 'react'
import ProductCard from "./features/ProductCard"
import {mens} from "./ProductDetails"
import  "./styles/Productcard.css"

export default function Product() {
    return (
        <div>
            <h1>topbrands</h1>
            <div className="productcards">
            {
                mens.map((item)=>{
                    return <ProductCard key={item.id} title={item.title}
                     image={item.image}
                     price={item.price}
                     oldprice={item.oldprice}
                     review={item.reviews}
                     rating={item.rating}
                     count={item.count}
                     id={item.id}
                     off={item.off}
                    />
                })
            }
            </div>

             
            
        </div>
    )
}
