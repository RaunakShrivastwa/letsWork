import React from 'react';
import './Header.scss';
import { AlignCenter, Facebook, Instagram, Linkedin, Mail, Menu, Phone, SkipBack, Twitter } from 'react-feather';
// import {} from 'react-feather'

const Header = () => {
    return (
        <header className='box_shadow parent'>
            <div className='header container'>
                <img className='logo' src="https://cdn-icons-png.flaticon.com/256/8904/8904881.png" alt="" />
                <div className="header_items_container">
                    <span className='icons box_shadow phone'><Phone className='i24' /></span>
                    <span className='icons box_shadow mail'><Mail className='i24 mail' /></span>
                    <span className='icons box_shadow instagram'> <Instagram className='i24' /></span>
                    <span className='icons box_shadow facebook'> <Facebook className='i24' /></span>
                    <span className='icons box_shadow linkedin'><Linkedin className='i24' /></span>
                    <button className='quotes btn custome_radius f19'>Get Quotes</button>
                    <button className='quotes btn custome_radius f19'>Hire Us</button>
                    <p className='menus'>
                        <span className='span'>Menu</span>
                        <AlignCenter className='i24' />
                    </p>

                    <span className=' span signin'>SignIn</span>
                    <span className='span signup'>SignUp</span>
                </div>
            </div>
        </header>
    )
}

export default Header