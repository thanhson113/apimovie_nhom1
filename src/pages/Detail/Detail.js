import React, { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './detail.css'
import { Button, Tabs, Radio, Space, Rate } from 'antd';
import star from '../../assets/images/icons/star1.png'
import { getTTLichChieu } from '../../redux/actions/RapPhimAction'
import moment from 'moment';
import { NavLink } from 'react-router-dom';
export default function Detail(props) {
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
    const callAPI = () => {
        let { id } = props.match.params
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
            <div className="glassmorphism" style={{  }}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row detail__row">
                                <div className="col-4">
                                    <img src={phimDetail.hinhAnh} alt="" />
                                </div>
                                <div className="col-8">
                                    <div className="detail__content">
                                        <span>Ngày chiếu: {moment(phimDetail.ngayKhoiChieu).format("DD - MM - YYYY")}</span>
                                        <p className="detail__text">{phimDetail.tenPhim}</p>
                                        <p>120 phút - 5.7 IMDb - 2D/Digitals</p>
                                        <Button type="primary">Mua vé</Button>

                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-4 detail__circle">
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
                    <Tabs defaultActiveKey="1" centered style={{ backgroundColor: '#fff', margin: '50px 0 0' }}>
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
                                                    rap.cumRapChieu?.map((cumRap,index) => {
                            
                                                       return(
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
                        </TabPane>
                        <TabPane tab="Thông tin" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>

                </div>

            </div>
        </div>
    )
}
