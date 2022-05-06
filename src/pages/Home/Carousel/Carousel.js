import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { getCarousel } from '../../../redux/actions/CarouselAction'
export default function Carousel() {
  const { carouselArr } = useSelector(state => state.carouselReducer)
  const dispatch = useDispatch()
  const callAPI = () => {
    dispatch(getCarousel())
  }
  useEffect(() => {
    callAPI()
  }, [])

  const renderCalrousel = () => {
    return carouselArr.map((carousel) => {
      return (
        <SwiperSlide key={carousel.maPhim}>
          <img src={carousel.hinhAnh} className="d-block w-100" alt="..." />
        </SwiperSlide>
      )
    })
  }
  return (
    <section className="movieCarousel">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {renderCalrousel()}
      </Swiper>
    </section>
  )
}
