import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/Setting";
import { Layout, Menu, Breadcrumb } from 'antd';
// import "../../assets/app.min.css"
import "../../assets/bootstrap.min.css"

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { history } from "../../App";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export const AdminTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;
    // const { userLogin } = useSelector(state => state.nguoiDungReducer);

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    // if (!localStorage.getItem(USER_LOGIN)) {
    //     alert('Bạn không có quyền truy cập vào trang này !')
    //     return <Redirect to='/' />
    // }

    // if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
    //     alert('Bạn không có quyền truy cập vào trang này !')
    //     return <Redirect to='/' />
    // }

    // const operations = <Fragment>
    //     {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
    //         history.push('/profile')
    //     }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0, 1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={() => {
    //         localStorage.removeItem(USER_LOGIN);
    //         localStorage.removeItem(ACCESS_TOKEN);
    //         history.push('/home');
    //         window.location.reload();
    //     }} className="text-blue-800">Đăng xuất</button> </Fragment> : ''}
    // </Fragment>
    return (
        <Route exact path={props.path} render={
            (propsRouter) => {
                return (
                    <>
                        <div id="layout-wrapper">
                            <header id="page-topbar">
                                <div className="navbar-header">
                                    <div className="d-flex align-items-center">
                                        <div className="navbar-brand-box">
                                            <a href="index.html" className="logo">
                                                <span className="logo-sm">
                                                    <img src="assets\images\logo.jpg" alt height={60} width={70} />
                                                </span>
                                                <span className="logo-lg">
                                                    <img src="assets\images\logo.jpg" alt height={110} />
                                                </span>
                                            </a>
                                        </div>
                                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                                            <i className="fa fa-fw fa-bars" />
                                        </button>
                                        <form className="app-search d-none d-lg-block">
                                            <div className="position-relative">
                                                <input id="inputTK" type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" /></span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-flex">
                                        <div className="dropdown d-inline-block d-lg-none ml-2">
                                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="mdi mdi-magnify" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
                                                <form className="p-3">
                                                    <div className="form-group m-0">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                            <div className="input-group-append">
                                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="dropdown d-none d-lg-inline-block ml-1">
                                            <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                                <i className="bx bx-fullscreen" />
                                            </button>
                                        </div>
                                        <div className="dropdown d-inline-block">
                                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="bx bx-bell bx-tada" />
                                                <span className="badge badge-danger badge-pill">3</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                                                <div className="p-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h6 className="m-0"> Notifications </h6>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="#!" className="small"> View All</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-simplebar style={{ maxHeight: 230 }}>
                                                    <a href className="text-reset notification-item">
                                                        <div className="media">
                                                            <div className="avatar-xs mr-3">
                                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                                    <i className="bx bx-cart" />
                                                                </span>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="mt-0 mb-1">Your order is placed</h6>
                                                                <div className="font-size-12 text-muted">
                                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                                    <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="p-2 border-top">
                                                    <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                                        <i className="mdi mdi-arrow-right-circle mr-1" /> View More..
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown d-inline-block">
                                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img className="rounded-circle header-profile-user" src="assets\images\user.jpg" alt="Header Avatar" />
                                                <span className="d-none d-xl-inline-block ml-1">Luong Ngoc</span>
                                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle mr-1" />
                                                    Profile</a>
                                                <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle mr-1" /> My Wallet</a>
                                                <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="bx bx-wrench font-size-16 align-middle mr-1" /> Settings</a>
                                                <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle mr-1" /> Lock screen</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger" /> Logout</a>
                                            </div>
                                        </div>
                                        <div className="dropdown d-inline-block">
                                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                                <i className="bx bx-cog bx-spin" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div className="vertical-menu">
                                <div data-simplebar className="h-100">
                                    <div id="sidebar-menu">
                                        <ul className="metismenu list-unstyled" id="side-menu">
                                            <li className="menu-title">Menu</li>
                                            <li>
                                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                                    <i className="bx bx-store" /><span className="badge badge-pill badge-info float-right">03</span>
                                                    <span>Ecommerce</span>
                                                </a>
                                                <ul className="sub-menu" aria-expanded="false">
                                                    <li><a href="index.html">Products</a></li>
                                                    <li><a href="#">Customers</a></li>
                                                    <li><a href="#">Shops</a></li>
                                                    <li><a href="#">Checkouts</a></li>
                                                    <li><a href="#">Orders</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#" className=" waves-effect">
                                                    <i className="bx bx-chat" />
                                                    <span className="badge badge-pill badge-success float-right">New</span>
                                                    <span>Chat</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                                    <i className="bx bx-envelope" />
                                                    <span>Email</span>
                                                </a>
                                                <ul className="sub-menu" aria-expanded="false">
                                                    <li><a href="#">Inbox</a></li>
                                                    <li><a href="#">Read Email</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                                    <i className="bx bxs-user-detail" />
                                                    <span>Contacts</span>
                                                </a>
                                                <ul className="sub-menu" aria-expanded="false">
                                                    <li><a href="#">User Grid</a></li>
                                                    <li><a href="#">User List</a></li>
                                                    <li><a href="#">Profile</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                                    <i className="bx bx-user-circle" />
                                                    <span>Authentication</span>
                                                </a>
                                                <ul className="sub-menu" aria-expanded="false">
                                                    <li><a href="#">Login</a></li>
                                                    <li><a href="#">Register</a></li>
                                                    <li><a href="#">Recover Password</a></li>
                                                    <li><a href="#">Lock Screen</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="main-content">
                                <div className="container">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#DanhSachSP" role="tab" data-toggle="tab" />
                                        </li>
                                    </ul>
                                    <br />
                                    <div className="table-responsive">
                                        <div className="table-wrapper">
                                            <div className="table-title">
                                                <div className="row">
                                                    <div className="col-sm-5">
                                                        <button id="btnThemSP" className="btn btn-success" data-toggle="modal" data-target="#myModal">
                                                            <i className="material-icons"></i>
                                                            Create a new product
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="table table-striped table-hover">
                                                <thead>
                                                    <tr><th>#</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Image</th>
                                                        <th>Type</th>
                                                        <th>Actions</th>
                                                    </tr></thead>
                                                <tbody id="tblDanhSachSP" />
                                            </table>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">HandPhone</h4>
                                                    <button type="button" className="close" data-dismiss="modal">
                                                        ×
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <form action id="form__add">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Product name:</label>
                                                            <input id="name" className="form-control" placeholder="Enter product name" />
                                                            <span className="sp-thongbao" id="tbname" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="price">Product price:</label>
                                                            <input id="price" className="form-control" placeholder="Enter product price" />
                                                            <span className="sp-thongbao" id="tbprice" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="size">Product screen size:</label>
                                                            <input id="size" className="form-control" placeholder="Enter product screen size" />
                                                            <span className="sp-thongbao" id="tbsize" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="back">Product back camera:</label>
                                                            <input id="back" className="form-control" placeholder="Enter product back camera" />
                                                            <span className="sp-thongbao" id="tbback" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="front">Product front camera:</label>
                                                            <input id="front" className="form-control" placeholder="Enter product front camera" />
                                                            <span className="sp-thongbao" id="tbfront" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="img">Product image:</label>
                                                            <input id="img" className="form-control" placeholder="Enter product image" />
                                                            <span className="sp-thongbao" id="tbimg" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="desc">Product description:</label>
                                                            <textarea className="form-control" id="desc" rows={3} placeholder="Enter product description" defaultValue={""} />
                                                            <span className="sp-thongbao" id="tbdesc" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="type">Product type:</label>
                                                            <textarea className="form-control" id="type" rows={3} placeholder="Enter product type" defaultValue={""} />
                                                            <span className="sp-thongbao" id="tbtype" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="modal-footer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="container" />
                            </div>
                            <div className="right-bar">
                                <div data-simplebar className="h-100">
                                    <div className="rightbar-title px-3 py-4">
                                        <a href="javascript:void(0);" className="right-bar-toggle float-right">
                                            <i className="mdi mdi-close noti-icon" />
                                        </a>
                                        <h5 className="m-0">Settings</h5>
                                    </div>
                                    <hr className="mt-0" />
                                </div>
                            </div>
                        </div>




                        {/* <Layout style={{ minHeight: '100vh' }}>
                            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                                <div className="logo">
                                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
                                </div>
                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                    <Menu.Item key="1" icon={<UserOutlined />}>
                                        <NavLink to="/admin/users">Users</NavLink>
                                    </Menu.Item>
                                    <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                                        <Menu.Item key="10" icon={<FileOutlined />}>
                                            <NavLink to="/admin/films">Films</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="11" icon={<FileOutlined />}>
                                            <NavLink to="/admin/films/addnew">Add new</NavLink>
                                        </Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                                        <NavLink to="/admin/showtimes">Showtime</NavLink>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0 }} >
                                    <div className="text-right pr-10 pt-1"></div>
                                </Header>
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                    </Breadcrumb>
                                    <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                                        <props.component {...propsRouter} />
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                            </Layout>
                        </Layout> */}

                    </>
                )
            }
        }
        />
    )

}
