import React, { useState } from 'react'
import Styles from './Filters.module.css';
import { MdClose, MdFilterAlt, MdSearch } from 'react-icons/md'

export default function Filters() {

    let [isEnable, setIsEnable] = useState(false);

    return (
        <>
            <div className={isEnable ? Styles.filterSectionOn : Styles.filterSection} onClick={() => setIsEnable(false)}>
                <h3>FILTERS <MdClose className={Styles.closeIcon} onClick={() => setIsEnable(false)} /></h3>
                <div className={Styles.genSection}>
                    <p><input type="radio" name='styles' /> Men</p>
                    <p><input type="radio" name='styles' /> Women</p>
                    <p><input type="radio" name='styles' /> Boys</p>
                </div>
                <div className={Styles.categories_Section}>
                    <div className={Styles.titles}>
                        <h4>CATEGORIES</h4>
                        <MdSearch />
                    </div>
                    <p><input type="checkbox" /> Shirts <span>(211)</span></p>
                    <p><input type="checkbox" /> Tshirts <span>(109)</span></p>
                    <p><input type="checkbox" /> Jeans <span>(78)</span></p>
                    <p><input type="checkbox" /> Sweatshirts <span>(64)</span></p>
                    <p><input type="checkbox" /> Trousers <span>(58)</span></p>
                    <p><input type="checkbox" /> Dresses <span>(53)</span></p>
                    <p><input type="checkbox" /> Jackets <span>(45)</span></p>
                    <p><input type="checkbox" /> Handbags <span>(45)</span></p>
                </div>
                <div className={Styles.brandSection}>
                    <div className={Styles.titles}>
                        <h4>BRANDS</h4>
                        <MdSearch />
                    </div>
                    <p><input type="checkbox" /> Ted Baker <span>(151)</span></p>
                    <p><input type="checkbox" /> HACKETT LONDON <span>(102)</span></p>
                    <p><input type="checkbox" /> Polo Ralph Lauren <span>(90)</span></p>
                    <p><input type="checkbox" /> HUGO <span>(81)</span></p>
                    <p><input type="checkbox" /> Fred Perry <span>(61)</span></p>
                    <p><input type="checkbox" /> Rinascimento <span>(42)</span></p>
                    <p><input type="checkbox" /> Farah <span>(41)</span></p>
                    <p><input type="checkbox" /> Karl Lagerfeld <span>(32)</span></p>
                </div>
                <div className={Styles.priceSection}>
                    <div className={Styles.titles}>
                        <h4>PRICE</h4>
                        <MdSearch />
                    </div>
                    <p><input type="checkbox" /> Rs.1050 to Rs.48538 <span>(892)</span></p>
                    <p><input type="checkbox" /> Rs.48538 to Rs.96026 <span>(17)</span></p>
                    <p><input type="checkbox" /> Rs.96026 to Rs.143514 <span>(1)</span></p>
                </div>
                <div className={Styles.colorSection}>
                    <div className={Styles.titles}>
                        <h4>COLORS</h4>
                        <MdSearch />
                    </div>
                    <p><input type="checkbox" /><label className={Styles.black}></label> Black <span>(211)</span></p>
                    <p><input type="checkbox" /><label className={Styles.navyBlue}></label> Navy Blue <span>(150)</span></p>
                    <p><input type="checkbox" /><label className={Styles.blue}></label> Blue <span>(140)</span></p>
                    <p><input type="checkbox" /><label className={Styles.white}></label> White <span>(65)</span></p>
                    <p><input type="checkbox" /><label className={Styles.pink}></label> Pink <span>(65)</span></p>
                    <p><input type="checkbox" /><label className={Styles.green}></label> Green <span>(41)</span></p>
                    <p><input type="checkbox" /><label className={Styles.gray}></label> Gray <span>(39)</span></p>
                </div>
                <div className={Styles.discountSection}>
                    <div className={Styles.titles}>
                        <h4>DISCOUNT RANGE</h4>
                        <MdSearch />
                    </div>
                    <p><input type="radio" name='discount' /> 10% and above</p>
                    <p><input type="radio" name='discount' /> 20% and above</p>
                    <p><input type="radio" name='discount' /> 40% and above</p>
                </div>
            </div>

            <div className={Styles.mobilePopup}>
                <button onClick={() => setIsEnable(true)}>Filter <MdFilterAlt className={Styles.filterIcon} /></button>
            </div>
        </>
    )
}


