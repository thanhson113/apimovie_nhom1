import { ACCESS_TOKEN, USER_LOGIN } from "../../util/Setting"
import { DANG_NHAP, GET_TT_NGUOIDUNG } from "../types/NguoiDungType"

let user = {}
if(JSON.parse(localStorage.getItem(USER_LOGIN))){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const nguoiDungState = {
    userLogin: user,
    thongTinNguoiDung: {},
}

export const nguoiDungReducer = (state = nguoiDungState, action) => {
    switch (action.type) {
        case DANG_NHAP :{
            state.userLogin = action.thongTinDangNhap;
            localStorage.setItem(USER_LOGIN, JSON.stringify( action.thongTinDangNhap))
            localStorage.setItem(ACCESS_TOKEN, action.thongTinDangNhap.accessToken)
            return {...state}
        }
        case GET_TT_NGUOIDUNG :{
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}
        }
        default:
            return state
    }
}