import React, { useState } from 'react'
import Styles from '../styles/InputElements.module.css'
import CheckBox from './features/CheckBox'
import FilterDetails from './features/FilterDetails.json'
import { MdSearch, MdClose } from 'react-icons/md'

export default function FilterOptions(props) {

    let { type, title } = props;

    let [isEnableSearch, setIsEnableSearch] = useState(true);

    return (
        <div className={Styles.input_filters_options}>
            {
                isEnableSearch ?
                    <div className={Styles.optionTitle}>
                        <h4>{title}</h4>
                        <MdSearch style={{ fontSize: 20, cursor: "pointer" }} onClick={() => setIsEnableSearch(false)} />
                    </div> :
                    <div className={Styles.searchBar}>
                        <input type='text' placeholder="Search here" />
                        <MdClose className={Styles.closeIcon} style={{ fontSize: 20 }} onClick={() => setIsEnableSearch(true)} />
                    </div>
            }
            {
                FilterDetails.map(items => items.type === type ? <CheckBox key={items._id} name={items.name} count={items.count} /> : "")
            }
        </div>
    )
}