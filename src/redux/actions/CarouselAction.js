
import { GET_CAROUSEL } from "../types/CarouselType";
import { quanLyPhimServices } from "../../services/QuanLyPhimService";
export const getCarousel = () => {
    // File action quản lý các state
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.LayDanhSachBanner();
            dispatch({
                type: GET_CAROUSEL,
                carouselArr: result.data.content
            })
        }catch (err){
            console.log(err.response.data)
        }
    }
}