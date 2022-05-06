import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import { getPhim } from '../../redux/actions/PhimAction';
import './home.css'
import { Button, Card, Modal } from 'antd';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from '../../redux/types/PhimType';
import { getTTHeThongRap } from '../../redux/actions/RapPhimAction';
import Carousel from './Carousel/Carousel';
import { NavLink } from 'react-router-dom'
import Article from './Article/Article';
import Introduce from './Introduce/Introduce';
import { ArrowRightOutlined } from '@ant-design/icons';
export default function Home() {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailer, setTrailer] = useState('')
  const [visible, setVisible] = useState(8)
  console.log(visible)
  const { movieArr, dangChieu, sapChieu } = useSelector((state) => state.movieReducers)
  const { rapPhimArr } = useSelector((state) => state.rapPhimReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    callAPI()

  }, [])
  
  const showModal = (trailer) => {
    setTrailer(trailer)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const callAPI = () => {
    dispatch(getPhim())
    dispatch(getTTHeThongRap())
  }

  const renderMovie = () => {
    return movieArr.slice(0,visible).map(movie => {
      return (
        <div className="col-sm-6 col-lg-3 col-md-4" key={movie.maPhim}>
          <Card 
            hoverable
            cover={<img alt="example" src={movie.hinhAnh} style={{ height: 315, objectFit: 'cover', borderRadius:'5px' }} />}
          >
            <Meta style={{ textAlign: 'center' }} title={movie.tenPhim} />
            <NavLink to={`/detail/${movie.maPhim}`} className="btn movielist__btn">Đặt vé</NavLink>
            <button className="btn  coming__button" onClick={() => {
              showModal(movie.trailer)
            }}>
              <i className="fas fa-play coming__icon" />
            </button>

            <div className="movieList__overLay">
            </div>
          </Card>
        </div>
      )
    })
  }
  const showMoreItem = () => {
    setVisible(movieArr.length)
  }
  return (
    <>
      <Carousel />
      <div className="container-xl">
        <section className="movielist" id="movielist">
          <div className="movielist__tabs text-center">
            <Button className={dangChieu ? 'movielist_link active' : 'movielist_link'} type="link" onClick={() => {
              dispatch({
                type: SET_PHIM_DANG_CHIEU
              })
            }}>Đang chiếu</Button>
            <Button className={sapChieu ? 'movielist_link active' : 'movielist_link'} type="link" onClick={() => {
              dispatch({
                type: SET_PHIM_SAP_CHIEU
              })
            }}>Sắp chiếu</Button>
            <div className="row my-5">
              {renderMovie()}
            </div>
            <div className="movielist_btn">
              {/* Đúng thì trả về kết quả cuối cùng */}
              {visible < movieArr.length && <Button onClick={showMoreItem}>Xem thêm <ArrowRightOutlined /></Button>}
            </div>
          </div>
          {/* Modal */}
          <Modal wrapClassName="movieslist__modal" footer={null} title="Trailer" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}   width={700}>
            <iframe className="movielist__iframe" width="100%" height="400"
              src={trailer} >
            </iframe >
          </Modal >
        </section>
        <HomeMenu heThongRapChieu={rapPhimArr} />
        <Article />
      </div>
      <Introduce />
    </>
  )
}
