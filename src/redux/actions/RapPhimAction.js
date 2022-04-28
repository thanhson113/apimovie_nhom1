import { quanLyRapService } from "../../services/QuanLyRapService";
import { GET_TT_LICHCHIEU_RAP, GET_TT_LICHCHIEU_PHIM } from "../types/RapPhimType";

export const getTTHeThongRap = () =>{
    return (dispatch) => {
        let promise = quanLyRapService.layThongTinLichChieu();
        promise.then((result) => {
            dispatch({
                type: GET_TT_LICHCHIEU_RAP,
                rapPhimArr: result.data.content
            })
        })
        promise.catch((err) => {
            console.log(err)
        })
    }
}

export const getTTLichChieu = (id) => {
    console.log(id)
    return (dispatch) => {
        let promise = quanLyRapService.layThongTinLichChieuPhim(id)
        promise.then((result) => {
            dispatch({
                type: GET_TT_LICHCHIEU_PHIM,
                phimDetail : result.data.content
            })
        })
        promise.catch((err) => {
            console.log(err)
        })
    }
}