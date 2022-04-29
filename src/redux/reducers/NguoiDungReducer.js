import { ACCESS_TOKEN, USER_LOGIN } from "../../util/Setting"
import { DANG_NHAP,DANG_KY, GET_TT_NGUOIDUNG, DANG_NHAP_FAIL, COMMENT, CAP_NHAT_ND } from "../types/NguoiDungType"

let user = {}
if(JSON.parse(localStorage.getItem(USER_LOGIN))){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const nguoiDungState = {
    userLogin: user,
    useRegister : {},
    thongTinNguoiDung: {},
    dangNhapFail : '',
    commentArr : [],
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
        case CAP_NHAT_ND :{
            state.thongTinNguoiDung = action.thongTinCapNhat;
            return {...state}
        }
        case DANG_NHAP_FAIL : {
            state.dangNhapFail = action.dangNhapFail;
            return {...state}
        }
        case DANG_KY :{
            state.userRegister = action.userRegister;
            return {...state}
        }
        case COMMENT : {
            state.commentArr.push(action.comment);
            localStorage.setItem('comment', JSON.stringify( state.commentArr))
            return {...state}
        }
        default:
            return state
    }
}