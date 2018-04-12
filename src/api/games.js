import axios from 'axios'
import {DOMAIN} from 'common/js/params'

export function getGmesType(type,page,rows){   
    const url = DOMAIN+'game/findGameByType'
    const data = {
        type,
        page,
        rows
    }
    return axios.get(url,{
        params: data
    }).then((res)=>{
        return Promise.resolve (res.data)
    })
}