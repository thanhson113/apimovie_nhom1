import { http } from '../util/SettingAxios'
import {BaseService} from './BaseServices'
class QuanLyNguoiDungService  {
    constructor(){
    }
    dangNhap = (thongTinDangNhap) => {
        return http.post('api/QuanLyNguoiDung/DangNhap',thongTinDangNhap)
    }
    layThongTinNguoiDung = () => {
        return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService()
