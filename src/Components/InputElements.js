import React, { useState } from 'react'
import Styles from '../styles/InputElements.module.css'
import RadioButton from './features/RadioButton'
import FilterDetails from './features/FilterDetails.json'
import { MdSearch, MdClose, MdFilterAlt, } from 'react-icons/md'
import FilterOptions from './FilterOptions'

export default function InputElements() {

    let [isEnableSearch, setIsEnableSearch] = useState(true);
    let [isPopup, setIsPopUp] = useState(false);

    return (
        <div className={Styles.filters}>
            <div className={Styles.popup_filter}>
                <button onClick={() => setIsPopUp(true)}>FILTERS <MdFilterAlt className={Styles.filterIcon} /></button>
            </div>
            <div className={isPopup ? Styles.input_filters : Styles.input_filters_off} onClick={() => setIsPopUp(false)}>
                <div className={Styles.input_filters_title}>
                    <h2>FILTERS</h2>
                    <MdClose className={Styles.closeIconFilter} style={{ fontSize: 25 }} onClick={() => setIsPopUp(false)} />
                </div>
                <div className={Styles.input_filters_options}>
                    {
                        FilterDetails.map(items => items.type === 'fashion' ? <RadioButton key={items._id} name={items.name} type={items.type} /> : "")
                    }
                </div>
                <FilterOptions title="CATERGORIES" type='categories' />
                <FilterOptions title="BRANDS" type='brands' />
                <FilterOptions title="PRICE" type='price' />
                <FilterOptions title="COLORS" type='colors' />
                <div className={Styles.input_filters_options}>
                    {
                        isEnableSearch ?
                            <div className={Styles.optionTitle}>
                                <h4>DISCOUNTS</h4>
                                <MdSearch style={{ fontSize: 20, cursor: "pointer" }} onClick={() => setIsEnableSearch(false)} />
                            </div> :
                            <div className={Styles.searchBar}>
                                <input type='text' placeholder="Search here" />
                                <MdClose className={Styles.closeIcon} style={{ fontSize: 20 }} onClick={() => setIsEnableSearch(true)} />
                            </div>
                    }
                    {
                        FilterDetails.map(items => items.type === 'discount' ? <RadioButton key={items._id} name={items.name} type={items.type} /> : "")
                    }
                </div>
            </div>
        </div>
    )
}
