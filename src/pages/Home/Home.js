import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import { getPhim } from '../../redux/actions/PhimAction';
import Slider from "react-slick";
import './home.css'
import { Button, Card, Modal } from 'antd';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from '../../redux/types/PhimType';
import { getTTHeThongRap } from '../../redux/actions/RapPhimAction';
import Carousel from './Carousel/Carousel';
import { NavLink } from 'react-router-dom'
import Article from './Article/Article';
import Introduce from './Introduce/Introduce';

export default function Home() {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trailer, setTrailer] = useState('')
  const { movieArr, dangChieu, sapChieu } = useSelector((state) => state.movieReducers)
  const { rapPhimArr } = useSelector((state) => state.rapPhimReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    callAPI()

  }, [])
  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 4,
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 4,
  };

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
    return movieArr.map(movie => {
      return (
        <div key={movie.maPhim}>
          <Card
            hoverable
            style={{ width: 240, height: 450 }}
            cover={<img alt="example" src={movie.hinhAnh} style={{ height: 315, objectFit: 'cover' }} />}
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
  return (
    <>
      <Carousel />
      <div className="container">
        <section className="movielist" id="movielist">
          <div className="movielist__tabs text-center mb-5">
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
          </div>
          {movieArr.length <= 7 ? <Slider {...settings2} >{renderMovie()}</Slider> : <Slider {...settings} >{renderMovie()}</Slider>}
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
