import React from 'react'
import Styles from '../styles/Elements.module.css'

export default function RadioButton(props) {

    let { name, type } = props;

    return (
        <div className={Styles.radio_grp}>
            <label className={Styles.radio}>
                <input type="radio" value={name} name={type} />
                {name}
                <span></span>
            </label>
        </div>
    )
}