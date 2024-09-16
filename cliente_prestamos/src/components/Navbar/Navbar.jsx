import React, { useState } from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return (
        <header>
                <div className="container-hero">
                    <div className="container hero">
                        <div className="container-logo">
                            <h1 className="logo">
                                <NavLink to='/home' className="navbar-brand">
                                    Aplicacion de Tigo
                                </NavLink>
                            </h1>
                        </div>
                        <div className="container-user">
                            <i>
                                <NavLink to='/login'>
                                    <FontAwesomeIcon icon={faUser} className='text-white' />
                                </NavLink>
                            </i>
                        </div>
                    </div>
                </div>
            

        </header>
    )
}

export default Navbar;