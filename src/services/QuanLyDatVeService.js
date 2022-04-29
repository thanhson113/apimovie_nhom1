import {ThongTinDatVe} from '../_core/model/ThongTinDatVe'
import { http } from "../util/SettingAxios";

class QuanLyDatVe  {
    layDanhSachPhongVe = (maLichChieu) => {
        return http.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return http.post('api/QuanLyDatVe/DatVe',thongTinDatVe)
    }
}
export const quanLyDatVe = new QuanLyDatVe()