import { quanLyDatVe } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/model/ThongTinDatVe"
import { DAT_VE_HOANTAT, GET_DS_PHONGVE, NEXT_TAB } from "../types/DatVeType"
export const layDSPhongVe = (maLichChieu) => {
    return async (dispatch) => {
        try{
            let result =  await quanLyDatVe.layDanhSachPhongVe(maLichChieu)
            dispatch({ 
                type: GET_DS_PHONGVE,
                chiTietPhongVe: result.data.content,
            })
        }
        catch(err){
            console.log(err.response.data)
        }
    }
}

export const datVe = (thongTinDatVe = new ThongTinDatVe()) =>{
    return async (dispatch) => {
        try{
            let result = await quanLyDatVe.datVe(thongTinDatVe)
            console.log(result.data.content)
            // Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layDSPhongVe(thongTinDatVe.maLichChieu))
            dispatch({
                type: DAT_VE_HOANTAT
            })
            dispatch({
                type: NEXT_TAB
            })
        }catch(err){
            console.log(err.response.data)
        }
    }
}

