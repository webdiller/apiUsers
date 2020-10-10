import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (
        <div className="bg-primary">
            <div className="container px-0 mb-3">
                <nav className="nav header flex-nowrap">
                    <NavLink exact activeClassName="header__item_active" className="header__item text-white nav-link" to="/">Главная</NavLink>
                    <NavLink exact activeClassName="header__item_active" className="header__item text-white nav-link" to="/about">Информация</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
