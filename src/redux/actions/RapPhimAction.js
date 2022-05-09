import { quanLyRapService } from "../../services/QuanLyRapService";
import { GET_TT_LICHCHIEU_RAP, GET_TT_LICHCHIEU_PHIM } from "../types/RapPhimType";
import { message } from 'antd';

export const getTTHeThongRap = () =>{
    return async (dispatch) => {
        try{
            let result =  await quanLyRapService.layThongTinLichChieu();
            dispatch({
                type: GET_TT_LICHCHIEU_RAP,
                rapPhimArr: result.data.content
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}

export const getTTLichChieu = (id) => {
    return async (dispatch) => {
        try{
            let result = await quanLyRapService.layThongTinLichChieuPhim(id)
            dispatch({
                type: GET_TT_LICHCHIEU_PHIM,
                phimDetail : result.data.content
            })
        }catch(err){
            console.log(err.response.data)
        }
       
    }
}

export const taoLichChieu = (value) => {
    return async (dispatch) => {
        try {
            console.log(value)
            let result = await quanLyRapService.taoLichChieu(value)
            console.log(result)
            // message.success('tạo lịch chiếu thành công');
        }
        catch(err){
            console.log(err.response.data)
        }
    }
}