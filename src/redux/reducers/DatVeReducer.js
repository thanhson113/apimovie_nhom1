import { GET_DS_PHONGVE, DAT_VE, DAT_VE_HOANTAT, ACTIVE_TAB, NEXT_TAB } from "../types/DatVeType"
import {ThongTinLichChieu} from '../../_core/model/ThongTinPhongVe'
const PhongVeState = {
    chiTietPhongVe : new ThongTinLichChieu(),
    dsGheDangDat : [],
    activeTab : '1'
}

export const DatVeReducer = (state = PhongVeState, action) => {
  switch (action.type) {
    case GET_DS_PHONGVE:{
      state.chiTietPhongVe = action.chiTietPhongVe;
      return {...state}
    }
    case DAT_VE :{
      let mangCapNhat = state.dsGheDangDat;
      let index = mangCapNhat.findIndex(ghe => ghe.maGhe === action.gheDuocChon.maGhe)
      console.log(index)
      if(index !== -1){
        mangCapNhat.splice(index,1);
      }else{
        mangCapNhat.push(action.gheDuocChon);
      }
      state.dsGheDangDat = mangCapNhat;
      return {...state}
    }
    case DAT_VE_HOANTAT :{
      state.dsGheDangDat = [];
      return {...state}
    }
    case ACTIVE_TAB :{
      state.activeTab = action.activeTab;
      return {...state}
    }
    case NEXT_TAB :{
      state.activeTab = '2'
    }
  default:
    return state
  }
}
