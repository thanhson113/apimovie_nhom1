import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { datVe, layDSPhongVe } from '../../redux/actions/DatVeAction';
import './checkout.css'
import { CloseOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { ACTIVE_TAB, DAT_VE } from '../../redux/types/DatVeType';
import { Row, Col, Table, Tabs, Button, Tag, Divider } from 'antd';
import { ThongTinDatVe } from '../../_core/model/ThongTinDatVe';
import { layThongTinTaiKhoan } from '../../redux/actions/NguoiDungAction';
import moment from 'moment'
import { NavLink } from 'react-router-dom'
function Checkout(props) {
  const { userLogin } = useSelector(state => state.nguoiDungReducer);
  const { chiTietPhongVe, dsGheDangDat } = useSelector(state => state.DatVeReducer);  
  const dispatch = useDispatch();
  useEffect(() => {
    callAPI()
  }, [])
  const { id } = props.match.params;
  const callAPI = () => {

    dispatch(layDSPhongVe(id))
  }
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe
  const columns = [
    {
      title: 'Ghế chưa đặt',
      dataIndex: 'gheChuaDat',
    },
    {
      title: 'Ghế đang đặt',
      dataIndex: 'gheDangDat',
    },
    {
      title: 'Ghế đã đặt',
      dataIndex: 'gheDaDat',
    },
    {
      title: 'Ghế vip',
      dataIndex: 'gheVip',
    },
    {
      title: 'Ghế bạn đặt',
      dataIndex: 'gheBanDat',
    },
  ];
  const data = [
    {
      key: '1',
      gheChuaDat: <div className="seat"></div>,
      gheDangDat: <div className="seat seat__booking"></div>,
      gheDaDat: <div className="seat seat__booked"></div>,
      gheVip: <div className="seat seat__vip"></div>,
      gheBanDat: <div className="seat  mySeat__booked"></div>,
    },
  ];
  const renderGhe = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'seat__vip' : '';
      let classGheDaDat = ghe.daDat === true ? 'seat__booked' : ''
      let classGheDangDat = '';
      let classGheUserDat = '';
      let indexGheDD = dsGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
      if (indexGheDD != -1) {
        classGheDangDat = 'seat__booking'
      }
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheUserDat = 'mySeat__booked'
      }
      return (
        <button disabled={ghe.daDat} className={`seat ${classGheDangDat} ${classGheVip} ${classGheDaDat} ${classGheUserDat}`} key={index}
          onClick={() => {
            let action = {
              type: DAT_VE,
              gheDuocChon: ghe
            }
            dispatch(action)
          }}
        >
          {
            // Nếu user đặt rồi thì render ra icon user. Người khác đặt thì render ra icon x
            ghe.daDat ? classGheUserDat !== '' ? <UserOutlined /> : <CloseOutlined /> : ghe.stt
          }
        </button>
      )
    })
  }
  return (
    <section className="checkout">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-8">
            <div className="checkout__screen">
              <div className="checkout__div"></div>
              <div className="checkout__trapezoid text-center">
                Màn hình
              </div>
            </div>
            <div className="checkout__seat">
              {
                renderGhe()
              }
              <div className="checkout__info">
                <Table columns={columns} dataSource={data} size="middle" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <h4 className="text-center" style={{color:'#fb4226'}}>
              {dsGheDangDat.reduce((total, gheDD) => { return total += gheDD.giaVe }, 0).toLocaleString()} VND
            </h4>
            <hr />
            <div className="checkout__movie">
              <h4 className="font-weight-bold">{thongTinPhim.tenPhim}</h4>
              <p>Địa điểm:   <span className="font-weight-bold">{thongTinPhim.diaChi}</span></p>
              <p>Ngày chiếu: <span className="font-weight-bold">{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} {thongTinPhim.tenRap}</span></p>
            </div>
            <hr />
            <div className="checkout__seat ">
              <div className="row">
                <div className="col-md-12">
                  <h5>Ghế</h5>
                  <div className="">
                    {dsGheDangDat.sort((a, b) => a.stt - b.stt).map(gheDD => {
                      return <Tag style={{margin:'5px', padding:'5px', fontSize:'15px', borderRadius:'5px'}} key={gheDD.stt} color="#fb4226">{gheDD.stt} - {gheDD.giaVe.toLocaleString()} VND</Tag>
                    })}
                  </div>
                </div>

              </div>
            </div>
            <hr />
            <div className="checkout__email">
              <h5>Email</h5>
              <p>{userLogin.email}</p>
            </div>
            <hr />
            <div className="checkout__phone">
              <h5>Phone</h5>
              <p>{userLogin.soDT}</p>
            </div>
            <hr />
            <button className="w-100" style={{ fontSize: 20, backgroundColor:'#fb4226', color:'#fff', borderColor:'transparent' }}
              onClick={() => {
                let thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = id;
                thongTinDatVe.danhSachVe = dsGheDangDat;
                dispatch(datVe(thongTinDatVe))
              }}
            >Đặt vé</button>
          </div>
        </div>
      </div>

    </section>
  )
}

const { TabPane } = Tabs;


const Demo = (props) => {
  const { activeTab } = useSelector(state => state.DatVeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch({
        type: ACTIVE_TAB,
        activeTab: '1'
      })
    }
  }, [])
  const operations = <NavLink className="px-3 checkout__home" to="/home" >
    Trang chủ
  </NavLink>;
  return (
    <div className="checkout__tab">
      <Tabs tabBarExtraContent={operations} defaultActiveKey="1" activeKey={activeTab} onChange={(key) => {
        dispatch({
          type: ACTIVE_TAB,
          activeTab: key
        })

      }} className="px-2" >
        <TabPane tab="CHỌN GHẾ VÀ THANH TOÁN" key="1">
          {/* Nhận các propsRouter */}
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
      </Tabs>

    </div>

  )
}
export default Demo;


function KetQuaDatVe(props) {
  const { thongTinNguoiDung } = useSelector(state => state.nguoiDungReducer);
  const { userLogin } = useSelector(state => state.nguoiDungReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    callAPI()
  }, [])
  const callAPI = () => {
    dispatch(layThongTinTaiKhoan())
  }
  const renderThongTinNguoiDung = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((ve, index) => {
      return (
        <div className="col-6" key={index}>
          <div className="info__cinema d-flex my-3 ">
            <div className="row my-3">
              <div className="col-4">
                <img style={{ width: '160px', height: '200px', objectFit: 'cover', borderRadius:'3px' }} src={ve.hinhAnh} alt="" />

              </div>
              <div className="col-8">
                <div className="info__movie px-2">
                  <h5 style={{fontWeight:600}}>{ve.tenPhim}</h5>
                  <p className="">
                    Giờ chiếu: <span className="font-weight-bold">{moment(ve.ngayDat).format('hh:mm A')} </span>
                    - Ngày chiếu : <span className="font-weight-bold">{moment(ve.ngayChieu).format('DD-MM-YYYY')}</span></p>
                  <p>Hệ thống rạp: <span className="font-weight-bold">{[...ve.danhSachGhe]?.shift().tenHeThongRap} </span> </p>
                  <p>Tên rạp: <span className="font-weight-bold">{[...ve.danhSachGhe]?.shift().tenCumRap}</span> </p>
                  <div >Số ghế: <span className="font-weight-bold">{ve.danhSachGhe.map((ghe, index) => (<p key={index} style={{ margin: '0 5px', display: 'inline-block' }}>{ghe.tenGhe}</p>))}</span> </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )
    })
  }
  return (
    <div className="info">
      <div className="container">
        <div className="text-center ">
          <h3 className="text-danger">Kết quả đặt vé</h3>
          <p style={{fontSize:'16px'}}>Hãy xem thông tin địa chỉ và thời gian để xem phim vui vẻ bạn nhé !</p>
        </div>
        <div className="row">
          {renderThongTinNguoiDung()}
        </div>
      </div>


    </div>
  )
}
