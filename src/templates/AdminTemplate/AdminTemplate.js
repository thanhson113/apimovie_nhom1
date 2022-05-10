import { ACCESS_TOKEN, USER_LOGIN } from "../../util/Setting";
// import logo from "../../assets/images/logo.jpg"
// import user from "../../assets/images/avatars/avatar1.jpg"
import _ from "lodash";
import { history } from "../../App";
import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route, Redirect } from 'react-router-dom'
import { Layout, Menu, Button, Dropdown } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
    const { userLogin } = useSelector(state => state.nguoiDungReducer)
    const [state, setState] = useState({ collapsed: false })
    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }

    return <Route exact path={props.path} render={(propsRoute) => {
        return (
            <Fragment>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider trigger={null} collapsible collapsed={state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink to='/admin/user'>User</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <NavLink to='/admin/film'>Film</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <NavLink to='/admin/showtime'>ShowTime</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background d-flex justify-content-between align-items-center  px-3" style={{ padding: 0 }}>
                            {state.collapsed ? <MenuUnfoldOutlined style={{ color: 'white', fontSize: '20px' }} onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} style={{ color: 'white', fontSize: '20px' }} />}
                            <div className=" d-flex">
                                <div class="dropdown">
                                    <div>
                                        <div style={{ width: 50, height: 50, lineHeight: 3.5, cursor: 'pointer' }} className="text-white bg-primary rounded-circle text-center" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">{userLogin.taiKhoan.substr(0, 1)}</div>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" onClick={() => {
                                                localStorage.removeItem(USER_LOGIN);
                                                localStorage.removeItem(ACCESS_TOKEN);
                                                history.push('/home'); 
                                                window.location.reload();
                                            }}>Đăng xuất</a>
                                            <NavLink className="dropdown-item" to="/profile">Thông tin</NavLink>
                                        </div>
                                    </div>

                                </div>
                                </div>
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            <props.component {...propsRoute} />
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }} />
}

