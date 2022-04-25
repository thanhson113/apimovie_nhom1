import { history } from '../../App'
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService'
import { DANG_NHAP, GET_TT_NGUOIDUNG } from '../types/NguoiDungType'

export const dangNhap = (thongTinDangNhap) => {
    return (dispatch) => {
        let promise = quanLyNguoiDungService.dangNhap(thongTinDangNhap)
        promise.then((result) => {
            dispatch({
                type: DANG_NHAP,
                thongTinDangNhap: result.data.content
            })
            history.goBack();
        })
        promise.catch((err) => {
            console.log(err)
        })
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