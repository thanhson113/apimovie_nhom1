import axios from 'axios'
import { ACCESS_TOKEN, TOKEN_MOVIE, DOMAIN } from './Setting.js'
// Cấu hình interceptor (Cấu hình những tham số mặc định cho api)
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000, // Thời gian nếu như load lâu sẽ out
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'TokenCybersoft': TOKEN_MOVIE,
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
    }
    return config
}, (errors => {
    return Promise.reject(errors)
}))
