import { GROUPID } from "../util/Setting";
import { http } from '../util/SettingAxios'
class QuanLyRapService {
    layThongTinLichChieu = () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    layThongTinHeThongRap = () => {
        return http.get('/api/QuanLyRap/LayThongTinHeThongRap')
    }
    LayThongTinCumRapTheoHeThong = (maHeThongRap) => {
        return http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
    taoLichChieu = (value) => {
        return http.post(`/api/QuanLyDatVe/TaoLichChieu`, value)
    }
}
export const quanLyRapService = new QuanLyRapService()