import React, { useState, memo, Fragment } from 'react'
import { Tabs, Button, Collapse } from 'antd';
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
    const { Panel } = Collapse;
    const renderRapPhim = () => {
        return heThongRapChieu.map((rap, index) => {
            console.log(rap)
            return (
                <Fragment>
                    <TabPane tab={<img src={rap.logo} className="img-fluid" style={{ width: 50 }} />} key={rap.maHeThongRap}>
                        <Tabs tabPosition={tabPosition}>
                            {rap.lstCumRap.map((cumRap, index) => {
                                return (
                                    <TabPane tab={
                                        <div className="movielist__tab">
                                            <div>
                                                <p style={{ fontWeight: 'bold' }}>{cumRap.tenCumRap}</p>
                                                <span>{cumRap.diaChi}</span>
                                            </div>
                                        </div>
                                    } key={cumRap.maCumRap}>

                                        {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                                            return (
                                                <Fragment key={phim.maPhim}>

                                                    <div className="cineplex__tabcontent" >
                                                        <div className="list__phim">
                                                            <img style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '3px', margin: '0 0 10px' }} src={phim.hinhAnh} alt="" />
                                                            <div className="list__info">
                                                                <p style={{}}>{phim.tenPhim}</p>

                                                            </div>
                                                        </div>
                                                        <div className="list__time">
                                                            {
                                                                phim.lstLichChieuTheoPhim.slice(0, 10).map((lichChieu, index) => {
                                                                    return (
                                                                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu}>
                                                                            <Button>{moment(lichChieu.ngayChieuGioChieu).format('LT')}</Button>

                                                                        </NavLink>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </Fragment>
                                            )
                                        })}
                                    </TabPane>
                                )
                            })}

                        </Tabs>
                    </TabPane>
                    
                    <Panel key={`panel-${rap.maHeThongRap}`} header={
                    <>
                        <img src={rap.logo} className="img-fluid" style={{ width: 50 }} />
                        <span>{rap.tenHeThongRap}</span>
                    </>

                    }>
                    {rap.lstCumRap.map((cumRap, index) => {
                        return (
                            <Collapse key={`panel-${cumRap.maCumRap}`}>
                                <Panel header={
                                    <div className="movielist__tab">
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>{cumRap.tenCumRap}</p>
                                            <span>{cumRap.diaChi}</span>
                                        </div>
                                    </div>
                                }>
                                      {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                                            return (
                                                <Fragment key={phim.maPhim}>

                                                    <div className="cineplex__tabcontent" >
                                                        <div className="list__phim">
                                                            <img style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '3px', margin: '0 0 10px' }} src={phim.hinhAnh} alt="" />
                                                            <div className="list__info">
                                                                <p style={{}}>{phim.tenPhim}</p>

                                                            </div>
                                                        </div>
                                                        <div className="list__time">
                                                            {
                                                                phim.lstLichChieuTheoPhim.slice(0, 10).map((lichChieu, index) => {
                                                                    return (
                                                                        <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={lichChieu.maLichChieu}>
                                                                            <Button>{moment(lichChieu.ngayChieuGioChieu).format('LT')}</Button>

                                                                        </NavLink>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </Fragment>
                                            )
                                        })}
                                </Panel>
                            </Collapse>
                        )
                    })}
                </Panel> 
                </Fragment>




            )
        })
    }
    return (
        <div className="cineplex" id="cineplex">
            <h1 className="text-center">Cụm rạp</h1>
            <hr />
            {/* Tabs */}
            <Tabs tabPosition={tabPosition}>
                {renderRapPhim()}
            </Tabs>
            {/* Collapse */}
            <Collapse  >
                {renderRapPhim()}
            </Collapse>
        </div>
    )
}
export default memo(HomeMenu)