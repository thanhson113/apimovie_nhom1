import { GET_TT_LICHCHIEU_RAP, GET_TT_LICHCHIEU_PHIM } from "../types/RapPhimType"

const rapPhimState = {
    rapPhimArr : [],
    phimDetail: {},
}

export const rapPhimReducer = (state = rapPhimState, action) => {
  switch (action.type) {
    case GET_TT_LICHCHIEU_RAP:{
        state.rapPhimArr = action.rapPhimArr;
        return {...state}
    }
    case GET_TT_LICHCHIEU_PHIM : {
      state.phimDetail = action.phimDetail;
      return {...state}
    }
  default:
    return state
  }
}
