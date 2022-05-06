import { history } from '../../App'
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService'
import { DANG_NHAP,DANG_KY, GET_TT_NGUOIDUNG, DANG_NHAP_FAIL, CAP_NHAT_ND, DANG_KY_FAIL } from '../types/NguoiDungType'

export const dangNhap = (thongTinDangNhap) => {
    return async (dispatch) => {
        try{
            let result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
            dispatch({
                type: DANG_NHAP,
                thongTinDangNhap: result.data.content
            })
            history.push({ pathname: '/home' })
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
            dispatch({
                type: DANG_KY_FAIL,
                dangKyFail: err.response.data.content
            })
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
            let thongTinCapNhat = {
                ...thongTinNguoiDung,
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
            }
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinCapNhat)
            if (result.data.statusCode === 200) {
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