import { quanLyPhimServices } from "../../services/QuanLyPhimService";
import { GET_MOVIE } from "../types/PhimType";

export const getPhim = () => {
    return async (dispatch) => {
        try {
            let result = await quanLyPhimServices.layDanhSachPhim();
            dispatch({
                type: GET_MOVIE,
                movieArr: result.data.content
            })
        } catch (err) {
            console.log(err.response.data)
        }
    }
}