
import "./DealsTopBrands.css";

import BrandProducts from "./BrandProducts";
import Img1 from "./images/Forever.webp"
import Img2 from "./images/W.webp";
import Img3 from "./images/tommy.jpg";
import Img4 from "./images/Levis.webp";
import Img5 from "./images/nike.webp";
import Img6 from "./images/puma.webp";
import Img7 from "./images/vero monda.webp";
import Img8 from "./images/polo.webp";
import Img9 from "./images/Gap.webp";
import Img10 from "./images/Kurta.jpg";



function TopBrands() {
    return (
        <div>
            <div>
                <h1 style={{ color: 'black', marginTop: "20px" }}>BIGGEST DEALS ON TOP BRANDS</h1>
                <hr />
            </div>
            <div className="topBrand_Container">
                <div className="brands__home">
                    <BrandProducts image={Img1} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img2} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img3} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img4} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img5} title="Inclusive of all taxes" offer="FREE Delivery by" />
                </div>
                <div className="brands__home">
                    <BrandProducts image={Img6} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img7} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img8} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img9} title="Inclusive of all taxes" offer="FREE Delivery by" />
                    <BrandProducts image={Img10} title="30% Off Inclusive of all taxes" offer="FREE Delivery by" />

                </div>
            </div>
        </div>
    )
}

export default TopBrands;