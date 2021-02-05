import React from 'react'
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Logo from '../../robinhood.svg'
import './header.css'

function Header() {
    return (
        <div className='header__wrapper'>
            <div className='header__logo'>
            <img src={Logo} width={25} alt='logo'/>
            </div>
            <div className='header__search'>
                <div className='header__searchContainer'>
               <SearchOutlined />
                    <input placeholder='search' type='text'/>
                </div>
            </div>
            <div className='header__menuItems'>
                <a href='/'>Free Stocks</a>
                <a href='/'>Portfolio</a>
                <a href='/'>Cash</a>
                <a href='/'>Messages</a>
                <a href='/'>Account</a>
            </div>
        </div>
    )
}

export default Header