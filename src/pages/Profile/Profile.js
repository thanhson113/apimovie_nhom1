import React ,{useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './profile.css'
import {capNhatThongTinNguoiDung, layThongTinTaiKhoan} from '../../redux/actions/NguoiDungAction'
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function Profile(props) {
    const {thongTinNguoiDung} = useSelector(state => state.nguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        callAPI()
    },[])
    const callAPI = () => {
        dispatch(layThongTinTaiKhoan())
    }
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          hoTen: thongTinNguoiDung?.hoTen,
          taiKhoan: thongTinNguoiDung?.taiKhoan,
          email: thongTinNguoiDung?.email,
          matKhau: thongTinNguoiDung?.matKhau,
          soDt: thongTinNguoiDung?.soDT,
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
          dispatch(capNhatThongTinNguoiDung(values))
          onSubmitProps.resetForm()
        },
      });
  return (
      <div className="container profile">
          <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                      <div className="card-body">
                          <div className="account-settings">
                              <div className="user-profile">
                                  <div className="user-avatar">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
                                  </div>
                                  <h5 className="user-name">{thongTinNguoiDung.hoTen}</h5>
                                  <h6 className="user-email">{thongTinNguoiDung.email}</h6>
                              </div>
                              <div className="about">
                                  <h5>About</h5>
                                  <p>I'm {thongTinNguoiDung.hoTen}. Front-End Developer I enjoy creating user-centric, delightful and human experiences.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="card h-100">
                      <div className="card-body">
                          <form onSubmit={formik.handleSubmit}>
                          <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <h4 className="mb-2 text-dark text-center">Thông tin cá nhân</h4>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                      <label>Tài khoản</label>
                                      <input type="text" className="form-control" id="account" placeholder="" disabled  
                                      name="taiKhoan"
                                      value={formik.values.taiKhoan}
                                      onChange={formik.handleChange}
                                      />
                                  </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                      <label>Họ tên</label>
                                      <input type="text" className="form-control" id="fullName" placeholder="Enter full name"  
                                      name="hoTen"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.hoTen}
                                      />
                                       {formik.touched.hoTen && formik.errors.hoTen ? (
                <div className="text-danger">{formik.errors.hoTen}</div>
              ) : null}
                                  </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                      <label>Mật khẩu</label>
                                      <input type="password" 
                                      className="form-control" 
                                      id="password" placeholder="Enter password"
                                      name="matKhau"
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.matKhau}
                                      />
                                       {formik.touched.matKhau && formik.errors.matKhau  ? (
                <div className="text-danger">{formik.errors.matKhau}</div>
              ) : null}
                                  </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                      <label htmlFor="eMail">Email</label>
                                      <input type="email" name="email"
                                      className="form-control" id="eMail" placeholder="Enter email ID" 
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.email}
                                      />
                                        {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
                                  </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                      <label htmlFor="phone">Phone</label>
                                      <input type="text" name="soDt" className="form-control" id="phone" placeholder="Enter phone number" 
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.soDt}
                                      />
                                      {formik.touched.soDt && formik.errors.soDt ? (
                <div className="text-danger">{formik.errors.soDt}</div>
              ) : null}
                                  </div>
                              </div>
                          </div>
                          <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <div className="text-right">
                                      <button type="submit"  name="submit" className="btn btn-danger">Update</button>
                                  </div>
                              </div>
                          </div>
                          </form>
                        
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}
