import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button, Select, Cascader, DatePicker, InputNumber } from 'antd';
import { quanLyRapService } from '../../../services/QuanLyRapService';
import moment from 'moment';
import { useFormik } from 'formik';
import { taoLichChieu } from '../../../redux/actions/RapPhimAction';
export default function ShowTime(props) {
  const { id, tenphim } = props.match.params;
  const dispatch = useDispatch()
  const [state, setState] = useState({
    heThongRap: [],
    cumRap: []
  })
  console.log(state.cumRap)
  useEffect(async () => {
    try {
      let result = await quanLyRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRap: result.data.content
      })
    } catch (err) {
      console.log(err.response.data)
    }
  }, [])
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: 0,
    },
    onSubmit: (value) => {
      dispatch(taoLichChieu(value))
    }
  })
  const handleChangeHTR = async (value) => {
    try {
      let result = await quanLyRapService.LayThongTinCumRapTheoHeThong(value)
      setState({
        ...state,
        cumRap: result.data.content
      })
    } catch (err) {
      console.log(err.response.data)
    }

  }
  const handleChangeCumRap = (value) => {
    formik.setFieldValue('maRap', value)
  }
  const handleChangeDatePicker = (value) => {
    formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
  }
  const handleChangeInputNumber = (value) => {
    console.log(value)
    formik.setFieldValue('giaVe', value)
  }
  const onOk = (values) => {
    console.log(values)
  }
  const renderHeThongRap = () => {
    return state.heThongRap?.map((rap, index) => {
      return {
        value: rap.maHeThongRap,
        label: rap.tenHeThongRap,

      }
    })
  }
  const renderCumRap = () => {
    return state.cumRap?.map((rap, index) => {
      return {
        value: rap.maCumRap,
        label: rap.tenCumRap,

      }
    })
  }
  let phim = {}
  if (localStorage.getItem('film')) {
    phim = JSON.parse(localStorage.getItem('film'))
  }
  console.log(phim)
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onSubmitCapture={formik.handleSubmit}
      >
        <h3>Tạo lịch chiếu - {tenphim}</h3>
        <img src={phim.hinhAnh} alt=""  style={{width: 200, height:200, objectFit: 'cover'}}/>
        <Form.Item label="Hệ thống rạp" >
          <Select options={renderHeThongRap()} onChange={handleChangeHTR} placeholder="Chọn hệ thống rạp" />
        </Form.Item>
        <Form.Item label="Cụm rạp" >
          <Select options={renderCumRap()} onChange={handleChangeCumRap} placeholder="Chọn cụm rạp" />
        </Form.Item>
        <Form.Item label="Ngày giờ chiếu" >
          <DatePicker format='DD/MM/YYYY hh:mm:ss' showTime onChange={handleChangeDatePicker} onOk={onOk} placeholder="Chọn ngày giờ chiếu" />
        </Form.Item>
        <Form.Item label="Giá vé" >
          <InputNumber min={75000} max={150000} defaultValue={0} onChange={handleChangeInputNumber} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Tạo lịch chiếu
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
