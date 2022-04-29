import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../../../assets/images/favicon.co.png'
import avatar from '../../../../assets/images/avatars/avatar1.jpg'
import { ACCESS_TOKEN, USER_LOGIN } from '../../../../util/Setting'
export default function Header() {
    const { userLogin } = useSelector((state) => state.nguoiDungReducer)

    const renderUserLogin = () => {
        if (Object.values(userLogin).length === 0) {
            // Kiểm tra object userLogin có bằng rỗng hay không
            return (
                <>
                    <NavLink to="/login" className="mx-1 header__login">
                        <img className="header__avatar" src={logo} alt="" />
                        Đăng nhập
                    </NavLink>
                    |
                    <NavLink to="/register" className=" mx-1 header__register">
                        Đăng kí
                    </NavLink>
                </>

            )
        }
        else {
            return (
                <div className="dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" >
                        <img style={{ width: 35, height:35, objectfit: 'cover', borderRadius: '50%', margin: '0 10px'}} src={avatar} />
                        <span className="text-dark">
                            {userLogin.hoTen}
                        </span>
                    </a>
                    <div className="dropdown-menu" >
                        <NavLink className="dropdown-item" to="/profile">Thông tin</NavLink>
                        <div className="dropdown-divider" />
                        <button className="dropdown-item" onClick={()=> {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(ACCESS_TOKEN)
                            window.location.reload()
                            }}>Đăng xuất</button>
                    </div>
                </div>
            )
        }
    }
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
                                <a className="nav-link header__link" href="#movielist">Lịch chiếu</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#cineplex">Cụm rạp</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#article">Tin tức</a>
                            </li>
                            <li className="nav-item header__item">
                                <a className="nav-link header__link" href="#introduce">Ứng dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__right">
                        {renderUserLogin()}

                    </div>
                </nav>
            </div>
        </header>

    )
}
