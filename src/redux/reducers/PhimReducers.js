import { GET_MOVIE, GET_TT_MOVIE, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../types/PhimType"

const movieState = {
  movieArr: [],
  dangChieu: true,
  sapChieu: false,
  arrPhimDefault: [],
}

export const movieReducers = (state = movieState, action) => {
  switch (action.type) {
    case GET_MOVIE: {
      state.movieArr = action.movieArr;
      state.arrPhimDefault = state.movieArr;
      let mangCapNhat = [...state.arrPhimDefault];
      state.movieArr = mangCapNhat.filter(movie => movie.dangChieu === state.dangChieu);
      return { ...state }
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = true;
      state.sapChieu = false;
      let mangCapNhat = [...state.arrPhimDefault];
      state.movieArr = mangCapNhat.filter(movie => movie.dangChieu === state.dangChieu);
      return { ...state }
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = true;
      state.dangChieu = false;
      let mangCapNhat = [...state.arrPhimDefault];
      state.movieArr = mangCapNhat.filter(movie => movie.sapChieu === state.sapChieu);
      return { ...state }
    }
    default:
      return state
  }
}
