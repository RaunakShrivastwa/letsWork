import React from 'react';
import './Header.scss';
import { AlignCenter, Facebook, Instagram, Linkedin, Mail, Menu, Phone, SkipBack, Twitter } from 'react-feather';
// import {} from 'react-feather'


const Header = () => {
    return (
        <header className='header box_shadow'>
            <img className='logo' src="https://nextbigtechnology.com/wp-content/uploads/2024/03/nbt-oranges-logos.png" alt="" />
            <div className="header_items_container">
                <span><Phone className='i24' /></span>
                <Mail className='i24' />
                <Instagram className='i24' />
                <Facebook className='i24' />
                <Linkedin className='i24 me-4' />
                <button className='quotes btn custome_radius f19'>Get Quotes</button>
                <button className='quotes btn custome_radius f19'>Hire Us</button>
                <p className='menus'>
                    <span>Menu</span>
                    <AlignCenter className='i24' />
                </p>
            </div>
        </header>
    )
}

export default Header