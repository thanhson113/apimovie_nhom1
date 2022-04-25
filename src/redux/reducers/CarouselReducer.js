import { GET_CAROUSEL } from "../types/CarouselType";
const carouselState = {
    carouselArr : [],
}

export const carouselReducer = (state = carouselState, action) => {
  switch (action.type) {
      case GET_CAROUSEL: {
        state.carouselArr = action.carouselArr;
        return {...state};
      }
  default:
    return state
  }
}
