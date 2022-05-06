import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import './login.css'
import { dangNhap } from '../../redux/actions/NguoiDungAction';
export default function Login() {
  const { userLogin, dangNhapFail } = useSelector((state) => state.nguoiDungReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .required('Tài khoản không được để trống'),
      matKhau: Yup.string()
        .required('Mật khẩu không được để trống'),
    }),
    onSubmit: (value) => {
      dispatch(dangNhap(value))
    }
  })

  return (
    <div className="login" >
      <div className="loginForm col-10 col-sm-10 col-md-6 col-lg-4 m-auto" >
        <h2 className="text-center"><NavLink to="/"><img src="./images/logo.png" /></NavLink></h2>
        <h2 className="text-center">
          Login
          </h2>
          <span className="text-danger d-flex justify-content-center">{dangNhapFail}</span>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="username" className="form-control input__line" placeholder="Tài Khoản" name="taiKhoan" id="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                <div className="text-danger">{formik.errors.taiKhoan}</div>
              ) : null}
              
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <input type="password" className="form-control input__line" placeholder="Mật Khẩu" name="matKhau" id="password" 
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.firstName}
              />
              {formik.touched.matKhau && formik.errors.matKhau ? (
                <div className="text-danger">{formik.errors.matKhau}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row" style={{ alignItems: 'center' }}>
            <div className="col-7" >
              <a className="forgotPassword" href="#">Forgot your password?</a>
            </div>
            <div className="col-12 col-sm-12 col-md-5">
              <button type="submit" className="buttonLogin ">Sign in</button>
            </div>
            <div className="col-sm-12 row" style={{ alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
              <p >Don't have account?<NavLink to="/register" className="registerLink"> Sign up now!</NavLink></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
