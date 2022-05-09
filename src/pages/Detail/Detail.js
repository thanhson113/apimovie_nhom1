import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './detail.css'
import { Button, Tabs, Rate, Collapse } from 'antd';
import { getTTLichChieu } from '../../redux/actions/RapPhimAction'
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import DanhGia from './DanhGia/DanhGia';
export default function Detail(props) {
    const { Panel } = Collapse;
    const { TabPane } = Tabs;
    const [state, setState] = useState({
        tabPosition: 'left',
    })
    const phimDetail = useSelector((state) => state.rapPhimReducer.phimDetail)
    console.log(phimDetail)
    const dispatch = useDispatch()
    useEffect(() => {
        callAPI()
    }, [])
    let { id } = props.match.params
    const callAPI = () => {
        dispatch(getTTLichChieu(id))
    }
    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    return (
        <div className="mainDetail" style={{
            backgroundImage: `url(${phimDetail.hinhAnh}) `,
            backgroundPosition: '100%',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            margin: '73px 0 0',
        }}
        >
            <div className="glassmorphism" style={{}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="row detail__row">
                                <div className="col-12 col-md-5">
                                    <img className="img-fluid" style={{ borderRadius: '3px' }} src={phimDetail.hinhAnh} alt="" />
                                </div>
                                <div className="col-12 col-md-7">
                                    <div className="detail__content">
                                        <span>Ngày chiếu: {moment(phimDetail.ngayKhoiChieu).format("DD - MM - YYYY")}</span>
                                        <p className="detail__text">{phimDetail.tenPhim}</p>
                                        <p>120 phút - 5.7 IMDb - 2D/Digitals
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 detail__circle">
                            <div className="circlePercent">
                                <div className="circleBorder" />
                                <span className="circleValue">{phimDetail.danhGia}</span>
                                <div className="slice">
                                    <div className="bar" style={{ transform: 'rotate(72deg)' }} />
                                    <div className="fill" />
                                </div>
                            </div>
                            <div className="detail__evalue">
                                <div className="starFilm mt-3">
                                    <Rate value={phimDetail.danhGia / 2} />
                                </div>
                                <div className="numbersReviewer mt-2">
                                    6 người đánh giá
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tabs className="detail__tabs" defaultActiveKey="1" centered style={{ fontSize: '16px', backgroundColor: '#fff', margin: '50px 0 0' }}>
                        <TabPane tab="Lịch chiếu" key="1">
                            <Tabs tabPosition={state.tabPosition} className="mt-5 ">
                                {
                                    phimDetail.heThongRapChieu?.map((rap, index) => {
                                        return (
                                            <TabPane tab={
                                                <div>
                                                    <img src={rap.logo} alt="" style={{ width: 50, height: 50, marginRight: '10px', objectFit: 'cover' }} />
                                                    <span>{rap.tenHeThongRap}</span>
                                                </div>
                                            } key={index}>
                                                {
                                                    rap.cumRapChieu?.map((cumRap, index) => {

                                                        return (
                                                            <Fragment key={index}>
                                                                <div className="list__phim">
                                                                    <img style={{ width: 100, height: 100, padding: '10px 0', objectFit: 'cover' }} src={cumRap.hinhAnh} alt="" />
                                                                    <div className="list__info">
                                                                        <p style={{}}>{cumRap.tenCumRap}</p>
                                                                        <span>{cumRap.diaChi}</span>

                                                                    </div>
                                                                </div>
                                                                <div className="list__time">
                                                                    {
                                                                        cumRap.lichChieuPhim.slice(0, 10).map((lichChieu, index) => {
                                                                            return (
                                                                                <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                                    <Button>{moment(lichChieu.ngayChieuGioChieu).format('LT')}</Button>
                                                                                </NavLink>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>

                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </TabPane>
                                        )
                                    })
                                }
                            </Tabs>
                            {/* Collapse */}
                            <Collapse className="detail__collaspe">
                                {
                                    phimDetail.heThongRapChieu?.map((rap, index) => {
                                        return (
                                            <Panel header={
                                                <div>
                                                    <img src={rap.logo} alt="" style={{ width: 50, height: 50, marginRight: '10px', objectFit: 'cover' }} />
                                                    <span>{rap.tenHeThongRap}</span>
                                                </div>
                                            } key={`panel-${index}`}>
                                                {rap.cumRapChieu?.map((cumRap, index) => {

                                                    return (
                                                        <Fragment key={index}>
                                                            <div className="list__phim">
                                                                <img style={{ width: 100, height: 100, padding: '10px 0', objectFit: 'cover' }} src={cumRap.hinhAnh} alt="" />
                                                                <div className="list__info">
                                                                    <p style={{}}>{cumRap.tenCumRap}</p>
                                                                    <span>{cumRap.diaChi}</span>

                                                                </div>
                                                            </div>
                                                            <div className="list__time">
                                                                {
                                                                    cumRap.lichChieuPhim.slice(0, 10).map((lichChieu, index) => {
                                                                        return (
                                                                            <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                                <Button>{moment(lichChieu.ngayChieuGioChieu).format('LT')}</Button>
                                                                            </NavLink>
                                                                        )
                                                                    })
                                                                }
                                                            </div>

                                                        </Fragment>
                                                    )
                                                })}
                                            </Panel>
                                        )
                                    })
                                }


                            </Collapse>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Ngày công chiếu</th>
                                        <th scope="col">{moment(phimDetail.ngayKhoiChieu).format("DD - MM - YYYY")}</th>
                                        <th scope="col" className="w-50">Nội dung</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Đạo diễn</th>
                                        <td>Mark</td>
                                        <td>{phimDetail.moTa}</td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Diễn viên </th>
                                        <td>Jacob</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Thể loại</th>
                                        <td colSpan={2}>Phim</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Định dạng</th>
                                        <td colSpan={2}>2D/Digitals</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Quốc gia sản xuất</th>
                                        <td colSpan={2}>Việt Nam</td>
                                    </tr>
                                </tbody>
                            </table>

                        </TabPane>
                        <TabPane tab="Đánh giá" key="3">
                            <DanhGia />
                        </TabPane>
                    </Tabs>

                </div>

            </div>
        </div>
    )
}
