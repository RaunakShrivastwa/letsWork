import React, { useState } from 'react';
import './Header.scss';
import { AlignCenter, Facebook, Instagram, Linkedin, Mail, Menu, Moon, Phone, SkipBack, Sun, Twitter, X } from 'react-feather';
// import {} from 'react-feather'

const Header = ({ setTheme }) => {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
        setToggle(!toggle);
        toggle ? setTheme("light_theme") : setTheme("dark_theme");
    };
    return (
        <>
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

                        <span className=' span signin'>SignIn</span>
                        <span className='span signup me-5'>SignUp</span>
                        <img className='logo box_shadow d-none' src="https://cdn-icons-png.flaticon.com/128/16683/16683419.png" alt="" />
                        <p className='toggle_icon' title={`${toggle ? 'You are In Night Mode' : 'You are In Day Mode'}`} onClick={Toggle}>
                            {
                                toggle ? <Moon /> : <Sun />
                            }
                        </p>


                        <p className='menus' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling">
                            <span className='span'>Menu</span>
                            <AlignCenter className='i24' />
                        </p>
                    </div>
                </div>
            </header>

            <div class="offcanvas offcanvas_sidebar box_shadow custome_border offcanvas-end m-3 custome_radius" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

                <div class="offcanvas-body d-flex flex-column p-0">
                    <div className='w-100 header_parent p-3'>
                        <div className='side_header box_shadow  custome_radius mb-4 d-flex gap-2 p-2 h-auto flex-wrap'>
                            <span className='icons flex-grow-1 box_shadow phone'><Phone className='i24' /></span>
                            <span className='icons flex-grow-1 box_shadow mail'><Mail className='i24 mail' /></span>
                            <span className='icons flex-grow-1 box_shadow instagram'> <Instagram className='i24' /></span>
                            <span className='icons flex-grow-1 box_shadow facebook text-danger'> <X className='i24' data-bs-dismiss="offcanvas" /></span>
                       </div>
                    </div>

                    <div className='sidebar_container mb-4 w-100 d-flex flex-column gap-3'>
                        <span className=' span signin'>SignIn</span>
                        {/* <span className='span signup me-5'>SignUp</span> */}
                    </div>

                    <div className='footer_container p-3'>
                        <div className='footer p-2 box_shadow custome_radius d-flex gap-4 justify-content-center align-items-center'>
                            <img className='logo box_shadow' src="https://cdn-icons-png.flaticon.com/128/16683/16683419.png" alt="" />
                            <span className='name'>Shubham Shri.</span>
                            <p className='toggle_icon' title={`${toggle ? 'You are In Night Mode' : 'You are In Day Mode'}`} onClick={Toggle}>
                                {
                                    toggle ? <Moon /> : <Sun />
                                }
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Header