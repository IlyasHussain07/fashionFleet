import React, { useState } from 'react'
import './Header_rightmenu.css'
import SearchIcon from '@material-ui/icons/Search'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
import ProfileMenu from "./ProfileMenu/Index"
import { useSelector } from 'react-redux'

export default function Header() {

    let [isMenu, setIsMenu] = useState(false);
    let basket = useSelector(state => state.cartBasket);

    return (
        <div className='header'>
            <div className='header__main'>
                <div className='header_section1'>
                    <div className='header_1 '>
                        <input type='search' placeholder="Search" list="browers" />
                        <SearchIcon className='header__searchIcon'></SearchIcon>
                        <datalist id="browers">
                            <option value="Shoes" />
                            <option value="Lipstick" />
                            <option value="bags" />
                            <option value="watches" />
                            <option value="shirts" />
                            <option value="skirts" />
                            <option value="t-shirts" />
                            <option value="mobiles" />
                        </datalist>
                    </div>
                </div>
                <div className='header_section2'>
                    <div className='header_login'>
                        <div className='dropdown_2'>
                            <AccountBoxOutlinedIcon className='header__acountIcon ' onMouseEnter={() => setIsMenu(true)} onMouseLeave={() => setIsMenu(false)}></AccountBoxOutlinedIcon>
                        </div>
                    </div>
                    <div className='header_cart'>
                        <div className='dropdown_3'>
                            <Link to='/cart'>< ShoppingCartIcon className='header__shoppingCartIcon'></ ShoppingCartIcon></Link>
                            <p className="cart_length">{basket.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileMenu isMenu={isMenu} setIsMenu={setIsMenu} />
        </div>
    )
}