import { GROUPID } from "../util/Setting";
import { http } from "../util/SettingAxios";
class QuanLyPhimService {
    // Quản lý dữ liệu api
    LayDanhSachBanner = () => {
        return http.get('/api/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim = () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyPhimServices = new QuanLyPhimService()
