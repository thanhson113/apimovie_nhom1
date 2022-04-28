import React, { useState, memo, Fragment } from 'react'
import { Tabs, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
function HomeMenu(props) {
    const { heThongRapChieu } = props;
    const { TabPane } = Tabs;
    const [state, setState] = useState({
        tabPosition: 'left',
    })
    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    const { tabPosition } = state;
    const renderRapPhim = () => {
        return heThongRapChieu.map((rap, index) => {
            return (
                <TabPane tab={<img src={rap.logo} className="img-fluid" style={{ width: 50 }} />} key={`rap-${index}`}>
                    <Tabs tabPosition={tabPosition}>
                        {rap.lstCumRap.map((cumRap, index) => {
                            return (
                                <TabPane tab={
                                    <div className="movielist__tab">
                                        <img src={rap.logo} className="" style={{ width: 50, objectFit: 'contain' }} />
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>{cumRap.tenCumRap}</p>
                                            <p>{cumRap.diaChi}</p>
                                        </div>
                                    </div>
                                } key={`list-${index}`}>
                                    {/* Load phim tương ứng */}
                                    {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="list__phim">
                                                    <img style={{ width: 100, height: 100, padding: '10px 0', objectFit: 'cover' }} src={phim.hinhAnh} alt="" />
                                                    <div className="list__info">
                                                        <p style={{}}>{phim.tenPhim}</p>
                                                        <span>{cumRap.diaChi}</span>

                                                    </div>
                                                </div>
                                                <div className="list__time">
                                                    {
                                                        phim.lstLichChieuTheoPhim.slice(0, 10).map((lichChieu, index) => {
                                                            return (
                                                                <NavLink to="/" key={index}>
                                                                    <Button>{moment(lichChieu.ngayChieuGioChieu).format('LT')}</Button>
                                                                    
                                                                </NavLink>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </Fragment>
                                        )
                                    })}
                                </TabPane>
                            )
                        })}

                    </Tabs>
                </TabPane>
            )
        })
    }
    return (
        <div className="movies__lists">
            <h1  className="text-center">Cụm rạp</h1>
            <hr />
            <Tabs tabPosition={tabPosition}>
                {renderRapPhim()}
            </Tabs>
        </div>
    )
}
export default memo(HomeMenu)