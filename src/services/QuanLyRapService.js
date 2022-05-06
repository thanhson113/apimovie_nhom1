import { GROUPID } from "../util/Setting";
import { http } from '../util/SettingAxios'
class QuanLyRapService {
    layThongTinLichChieu = () => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}
export const quanLyRapService = new QuanLyRapService()