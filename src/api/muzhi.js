import axios from 'axios'
import {DOMAIN} from 'common/js/params'
export function getBanner(){
    const url = DOMAIN+'banner'
    return axios.get(url).then((res)=>{
        return Promise.resolve (res.data)
    })
}

export function getGames(place,page,rows){
    const url = DOMAIN+'game/findGameByPlace'
    const data = {
        place,
        page,
        rows
    }
    return axios.get(url,{
        params: data
    }).then((res)=>{
        return Promise.resolve (res.data)
    })
}

export function hotGift(place,page,rows){
    const url = DOMAIN+'gift/findGiftsByPlace'
    const data = {
        place,
        page,
        rows
    }
    return axios.get(url,{
        params: data
    }).then((res)=>{
        return Promise.resolve (res.data)
    })
}

export function getNews(type,page,rows){   
    const url = DOMAIN+'news/findNewsByType'
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





