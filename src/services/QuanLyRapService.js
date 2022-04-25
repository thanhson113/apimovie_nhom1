import { GROUPID } from "../util/Setting";
import { BaseService } from "./BaseServices";

class QuanLyRapService extends BaseService {
    constructor(){
        super()
    }
    layThongTinLichChieu = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}
export const quanLyRapService = new QuanLyRapService()