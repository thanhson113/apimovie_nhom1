import { GROUPID } from "../util/Setting";
import { http } from "../util/SettingAxios";
class QuanLyPhimService {
    // Quản lý dữ liệu api
    LayDanhSachBanner = () => {
        return http.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim = (tenPhim) => {
        if(tenPhim.trim() == ''){
            return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
        }
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)

    }
    themPhimUploadHinh = (formData) => {
        return http.post('/api/QuanLyPhim/ThemPhimUploadHinh', formData)
    }
    layThongTinPhim = (maPhim) => {
        return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    capNhatPhimUpload = (formData) => {
        return http.post('/api/QuanLyPhim/CapNhatPhimUpload', formData)
    }
    xoaPhim = (maPhim) => {
        return http.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }

}

export const quanLyPhimServices = new QuanLyPhimService()
