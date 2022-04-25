import axios from 'axios'
import { TOKEN_MOVIE, DOMAIN, ACCESS_TOKEN } from '../util/Setting'

export class BaseService {
    get = (url)=> {
        return axios({
            url:`${DOMAIN}/${url}`,
            method: 'get',
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        })
    }
    post = (url, model)=> {
        return axios({
            url:`${DOMAIN}/${url}`,
            method: 'post',
            data: model,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE,
                "Authorization": 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            }
        })
    }
    put = (url, model)=> {
        return axios({
            url:`${DOMAIN}/${url}`,
            method: 'put',
            data: model,
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        })
    }
    delete = (url)=> {
        return axios({
            url:`${DOMAIN}/${url}`,
            method: 'delete',
            headers: {
                "TokenCybersoft": TOKEN_MOVIE
            }
        })
    }
}