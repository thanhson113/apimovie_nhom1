import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../../../assets/images/favicon.co.png'
export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light navbar__custom">
                    <NavLink className="navbar-brand " to="/">
                        <img className="header__logo" src={logo}></img>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto header__list">
                            <li className="nav-item active header__item">
                                <a className="nav-link header__link" href="#">Lịch chiếu</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#">Cụm rạp</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#">Ứng dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__right">
                        <NavLink to="/login" className="mx-1 text-dark">
                            <img className="header__avatar" src="./images/avatar.png" alt="" />
                            Đăng nhập
                        </NavLink>
                        |
                        <NavLink to="/register" className=" mx-1 header__register">
                            Đăng kí
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>

    )
}
