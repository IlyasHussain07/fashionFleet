import React, { useState } from 'react'
import Styles from '../styles/Elements.module.css'
import { MdDone } from 'react-icons/md'

export default function CheckBox(props) {

    let { name, count } = props
    let [isCheck, setIsCheck] = useState(false);

    return (
        <div className={Styles.checkbox}>
            <div className={Styles.checkbox_item} onClick={isCheck ? () => setIsCheck(false) : () => setIsCheck(true)}>
                <MdDone className={isCheck ? Styles.check_on : Styles.check} />
            </div>
            <p className={isCheck ? Styles.checkbox_nameColor : Styles.checkbox_name}>{name} <span>({count})</span></p>
        </div >
    )
}