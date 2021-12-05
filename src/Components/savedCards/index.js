import React, { useState } from 'react'
import './Savecards.css'
import download from './images/download.png'
import visa from './images/visa.png'
import bank from './images/bank.png'
export default function Savecards() {
    let [isEnable, setIsEnable] = useState(false)

    return (
        <div >
            {
                isEnable === false ?
                    <div className={"savecard__main"}>
                        <img className="image" src={download} alt="download" />

                        <div className="savecard__1">
                            <h4>SAVE YOUR CREDIT/DEBIT CARDS</h4>
                        </div>
                        <div className="savecard__1">
                            <h5>It's convenient to pay with saved cards. <br />
                                Your card information will be secure,we<br />
                                use 128-bit encryption</h5>
                        </div>
                        <div>
                            <button className="cardbutton" onClick={() => setIsEnable(true)}>+Add Card</button>
                        </div><br/>
                        <div className="secured">
                            <img className="bank__visa" src={bank} alt="bank" />
                        </div>
                    </div>

                    :

                    <div className={'popup_1On'}>
                        <div className="debitcard__1">
                            <h5>Add New Credit/Debit card</h5>
                        </div>
                        <div>
                            <input type="number" className="search_1" placeholder="Card Number*"  />
                            <img className="image__visa" src={visa} alt="visa" /><br />
                            <input type="search" className="search_2" placeholder="Card Name*" /><br />
                            <input type="number" className="search_3" placeholder="Expiry Month*" />
                            <input type="number" className="search_3" placeholder="Expiry Year*" /><br />
                            <small className="small">Expiry Month and Year not required if not mentioned on your card.</small>



                        </div>
                        <div>
                            <button className="cardbutton_1" onClick={() => setIsEnable(false)}>Cancel</button>
                            <button className="cardbutton_1">Submit</button>
                        </div>
                    </div>
            }


        </div>
    )
}
