import React from 'react';
import ProductInfo from './productsInformation';
import Product from '../features/ProductCard'
import Styles from './ProductCard.module.css'
import InputElements from '../InputElements'
import NavigationProduct from '../NavigationProduct'

export default function MakeUp() {

    return (
        <div className={Styles.ProductCard_product}>
            <div className={Styles.ProductCard_navigationPath}>
                <NavigationProduct home={"Home"} type={"Mens"} place={"MakeUp"} />
            </div>
            <div className={Styles.ProductCard_section2}>
                <div className={Styles.ProductCard_Filters}>
                    <InputElements />
                </div>
                <div className={Styles.ProductCard_products}>
                    {
                        ProductInfo.map(items => items.category === "makeup" ?
                            <Product key={items._id}
                                title={items.title}
                                bName={items.bName}
                                image={items.image}
                                price={items.price}
                                oldprice={items.oldprice}
                                review={items.reviews}
                                rating={items.rating}
                                count={items.count}
                                id={items.id}
                                off={items.off}
                                cardImage1={items.cardImage1}
                                cardImage2={items.cardImage2}
                                cardImage3={items.cardImage3}
                                cardImage4={items.cardImage4}
                            />
                            : "")
                    }
                </div>
            </div>

        </div>
    )

}