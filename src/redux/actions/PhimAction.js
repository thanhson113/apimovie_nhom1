import { quanLyPhimServices } from "../../services/QuanLyPhimService";
import { GET_MOVIE, GET_INFO_MOVIE } from "../types/PhimType";
import { message } from 'antd';
import { history } from "../../App";
export const getPhim = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.layDanhSachPhim(tenPhim);
            dispatch({
                type: GET_MOVIE,
                movieArr: result.data.content
            })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

export const themPhim = (formData) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.themPhimUploadHinh(formData)
            message.success('Thêm phim thành công');
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

export const layThongTinPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.layThongTinPhim(maPhim);
            dispatch({
                type: GET_INFO_MOVIE,
                thongTinPhim: result.data.content
            })
        } catch (err) {
            console.log(err.data.response)
        }
    }
}

export const capNhatPhim = (formData) => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.capNhatPhimUpload(formData)
            dispatch(getPhim())
            message.success('Cập nhật phim thành công');
            history.push('/admin/film')
        } catch (err) {
            console.log(err.response.data)
        }
    }
}

export const xoaPhim = (maPhim) => {
    return async (dispatch) => {
        try{
            let result = await quanLyPhimServices.xoaPhim(maPhim);
            message.success('Xóa phim thành công');
            dispatch(getPhim())
        }catch(err){
            console.log(err.response.data)
        }
    }
}
