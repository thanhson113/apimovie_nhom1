import { history } from '../../App'
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService'
import { DANG_NHAP,DANG_KY, GET_TT_NGUOIDUNG, DANG_NHAP_FAIL, CAP_NHAT_ND, DANG_KY_FAIL, GET_DSND, TIM_KIEM_ND } from '../types/NguoiDungType'
import { message } from 'antd';

export const dangNhap = (thongTinDangNhap) => {
    return async (dispatch) => {
        try{
            let result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            dispatch({
                type: DANG_NHAP,
                thongTinDangNhap: result.data.content
            })
            if(result.data.content.maLoaiNguoiDung === 'KhachHang'){
                history.push({ pathname: '/home' })
            }else{
                history.push({ pathname: '/admin' })
            }
        }catch(err){
            dispatch({
                type: DANG_NHAP_FAIL,
                dangNhapFail: err.response.data.content
            })
        }
       
    }
}
export const dangKy = (thongTinDangKi) => {
    return async (dispatch) => {
        try{
            let result = await quanLyNguoiDungService.dangKy(thongTinDangKi);
            dispatch({
                type: DANG_KY,
                userRegister : result.data.content
            })
        }catch(err) {
            message.error(err.response.data.content,3)
        }
    }
}

export const layThongTinTaiKhoan = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_TT_NGUOIDUNG,
                    thongTinNguoiDung: result.data.content
                })
            }
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

export const capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinNguoiDung)
            if (result.data.statusCode === 200) {
                message.success('Cập nhật người dùng thành công');
                dispatch({
                    type: CAP_NHAT_ND,
                    thongTinCapNhat: result.data.content
                })
            }
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const laydanhSachNguoiDung = (tuKhoa = '') => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.laydanhSachNguoiDung(tuKhoa)
            dispatch({
                type : GET_DSND,
                danhSachNguoiDung: result.data.content,
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const themNguoiDung = (nguoiDung) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.themNguoiDung(nguoiDung)
            message.success('Thêm người dùng thành công');
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const capNhatThongTinNguoiDungAdmin = (nguoiDung) => {
    return async (dispatch) => {
        try {
            let result = await quanLyNguoiDungService.capNhatThongTinNguoiDungAdmin(nguoiDung)
            message.success('Cập nhật người dùng thành công');
            dispatch({
                type: CAP_NHAT_ND,
                thongTinCapNhat: result.data.content
            })
            history.push('/admin/user')
        }catch(err){
            console.log(err.response.data)
        }
    }
}




