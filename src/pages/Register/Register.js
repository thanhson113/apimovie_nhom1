import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { DatePicker, Space, Alert } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import './register.css'

export default function Register() {
  return (
    <div className="register">
      <div className="registerForm col-10 col-sm-10 col-md-8 col-lg-5 m-auto">
        <h2 className="text-center"><NavLink to="/"><img src="./images/logo.png" /></NavLink></h2>
        <h2 className="text-center">Register</h2>
        <form>
          <div className="form-group row">
            <div className="col-12 col-sm-6">
              <input type="text" name="hoTen" className="form-control input__line" placeholder="Họ Tên" id="displayName" />
            </div>
            <div className="col-12 col-sm-6">
              <input type="email" name="email" className="form-control input__line"  placeholder="Email" id="email" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 col-sm-6">
              <input type="text" name="taiKhoan" className="form-control input__line"  placeholder="Tài Khoản" id="displayName" />
            </div>
            <div className="col-12 col-sm-6">
              <input type="password" name="matKhau" className="form-control input__line"  placeholder="Mật Khẩu" id="email" />
            </div>
          </div>
          <div className="form-group row" >
            <div className="col-12 col-sm-6">
              <select type="text" name="gioiTinh" className="form-control input__line" o placeholder="Giới Tính" id="displayName" >
                <option value="" disabled selected>Giới Tính</option>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <input type="number" name="soDt" className="form-control input__line"  />
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
