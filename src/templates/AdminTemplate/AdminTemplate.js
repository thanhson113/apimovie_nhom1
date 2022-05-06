import { ACCESS_TOKEN, USER_LOGIN } from "../../util/Setting";
// import logo from "../../assets/images/logo.jpg"
// import user from "../../assets/images/avatars/avatar1.jpg"
import _ from "lodash";
import { history } from "../../App";
import React, { Fragment, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
export const AdminTemplate = (props) => {
    console.log(props.path)
    const [state, setState] = useState({ collapsed: false })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
    return <Route exact path={props.path} render={(propsRoute) => {
        return (
            <Fragment>
                <Layout style={{minHeight:'100vh'}}>
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
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {state.collapsed ? <MenuUnfoldOutlined style={{ color: 'white', fontSize: '20px' }} onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} style={{ color: 'white', fontSize: '20px' }} />}
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