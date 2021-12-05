import "./TopbrandProduct.css"


export default function Products({ id, prdName, img, brandimg }) {
    return (
        <div className="Product_header">
            <div className="product_layout">
                <div className="image_layout">
                    <img src={img} alt="image1" />
                </div>
                <div className="logo">
                    <img src={brandimg} alt="image2" />
                </div>
                {/* <div className="brand_name">
                    <strong>{prdName}</strong>
                </div> */}
            </div>


        </div>
    )



}