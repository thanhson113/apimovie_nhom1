import { http } from '../util/SettingAxios'
import {BaseService} from './BaseServices'
class QuanLyNguoiDungService  {
    constructor(){
    }
    dangNhap = (thongTinDangNhap) => {
        return http.post('api/QuanLyNguoiDung/DangNhap',thongTinDangNhap)
    }
    dangKy = (thongTinDangKi) => {
        return http.post('api/QuanLyNguoiDung/DangKy',thongTinDangKi)
    }
    layThongTinNguoiDung = () => {
        return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    capNhatThongTinNguoiDung = (thongTinCapNhat) => {
        return http.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', thongTinCapNhat)
    }
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService()
