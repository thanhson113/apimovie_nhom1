import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { DatePicker, Space, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector,useDispatch } from 'react-redux';
import './register.css'
import {dangKy} from '../../redux/actions/NguoiDungAction'
export default function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      hoTen: '',
      taiKhoan: '',
      email: '',
      matKhau: '',
      soDt: '',
    },
    validationSchema: Yup.object({
      hoTen: Yup.string()
        .required('Họ tên không được để trống'),
      taiKhoan: Yup.string()
        .required('Tài khoản không được để trống'),
      email: Yup.string()
        .email('Email phải đúng định dạng')
        .required('Email không được để trống'),
      matKhau: Yup.string()
        .required('Mật khẩu không được để trống')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Mật khẩu tối thiểu 6 kí tự, tối đa 20 kí tự, 1 chữ cái viết hoa, 1 kí tự đặc biệt, 1 kí tự số'),
      soDt: Yup.string()
        .required('Số điện thoại không được để trống')
    }),
    onSubmit: (values, onSubmitProps) => {
      dispatch(dangKy(values))
      onSubmitProps.resetForm()
    },
  });
  const handleReset = (event) => {
    console.log(event)
  }
  return (
    <div className="register">
      <div className="registerForm col-10 col-sm-10 col-md-8 col-lg-5 m-auto">
        <h2 className="text-center"><NavLink to="/"><img src="./images/logo.png" /></NavLink></h2>
        <h2 className="text-center">Register</h2>
        <form onSubmit={formik.handleSubmit} onReset={handleReset()}>
          <div className="form-group row">
            <div className="col-12 col-sm-6">
              <input type="text" name="hoTen" className="form-control input__line" placeholder="Họ Tên"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hoTen}
              />
              {formik.touched.hoTen && formik.errors.hoTen ? (
                <div className="text-danger">{formik.errors.hoTen}</div>
              ) : null}
            </div>
            <div className="col-12 col-sm-6">
              <input type="email" name="email" className="form-control input__line" placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 col-sm-6">
              <input type="text" name="taiKhoan" className="form-control input__line" placeholder="Tài Khoản"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoan}
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <div className="text-danger">{formik.errors.taiKhoan}</div>
              ) : null}
            </div>
            <div className="col-12 col-sm-6">
              <input type="password" name="matKhau" className="form-control input__line" placeholder="Mật Khẩu" 
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.matKhau}
              />
                {formik.touched.matKhau && formik.errors.matKhau  ? (
                <div className="text-danger">{formik.errors.matKhau}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row" >
            <div className="col-12 col-sm-6">
              <select type="text" name="gioiTinh" className="form-control input__line" placeholder="Giới Tính"

              >
                <option value="gioiTinh">Giới Tính</option>
                <option value="nu">Nam</option>
                <option value="nam">Nữ</option>
              </select>

            </div>
            <div className="col-12 col-sm-6">
              <input type="number" name="soDt" className="form-control input__line" placeholder="Số điện thoại"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.soDt}
              />
              {formik.touched.soDt && formik.errors.soDt ? (
                <div className="text-danger">{formik.errors.soDt}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row" >
            <div className="col-sm-12">
              <button type="submit" className="buttonRegister">Register</button>
            </div>
            <div className="col-sm-12 row" style={{ alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
              <NavLink to="/login" className="registerLink"> Sign in now!</NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
