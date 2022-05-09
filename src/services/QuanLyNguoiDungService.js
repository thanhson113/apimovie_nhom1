import { http } from '../util/SettingAxios'
import { BaseService } from './BaseServices'
class QuanLyNguoiDungService {
    constructor() {
    }
    dangNhap = (thongTinDangNhap) => {
        return http.post('api/QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    }
    dangKy = (thongTinDangKi) => {
        return http.post('api/QuanLyNguoiDung/DangKy', thongTinDangKi)
    }
    layThongTinNguoiDung = () => {
        return http.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    capNhatThongTinNguoiDung = (thongTinCapNhat) => {
        return http.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', thongTinCapNhat)
    }
    laydanhSachNguoiDung = (tuKhoa) => {
        if (tuKhoa.trim() !== '') {
            return http.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`)
        }
        return http.get('api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
    }
    themNguoiDung = (nguoiDung) => {
        return http.post('/api/QuanLyNguoiDung/ThemNguoiDung',nguoiDung);
    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService()
