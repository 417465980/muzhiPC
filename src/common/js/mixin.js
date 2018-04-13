import {getGmesType} from 'api/games'
import {getNews} from 'api/muzhi'

export const gameListMixin = {
    mounted(){
        setTimeout(()=>{
        this._getGmesType()
        },20)	
    },
    methods:{
        _getGmesType(){
            getGmesType(this.type,this.page,this.rows).then((res) =>{
                if(res.ret === true){
                    this.allList = res.rows
                    if(this.allList.length < res.total){
                        this.hasMore = true
                    }else{
                        this.hasMore = false
                    }
                }
            })	
        },
        allMore(){
            this.page++
            this.total += this.rows;
            getGmesType(this.type,this.page,this.rows).then((res) =>{
                if(res.ret === true){
                    this.allList = this.allList.concat(res.rows)
                    if(!res.rows.length || (this.total+this.rows) >= res.total){
                        this.hasMore = false;
                    }
                }
            })
        }
    }
}

export const listMixin = {
    mounted(){
        setTimeout(() =>{
            this._getAllNews()
        },20)
    },
    methods:{
        _getAllNews(){
            getNews(this.type,this.page,this.rows).then((res) =>{
                if(res.ret === true){
                    console.log(res)
                    this.allNewsList = res.rows
                     if(this.allNewsList.length < res.total){
                        this.hasMore = true
                    }else{
                        this.hasMore = false
                    }
                }
            })
        },
        allNews(){
            this.page++
            this.total += this.rows
            getNews(this.type,this.page,this.rows).then((res) =>{
                if(res.ret === true){
                    this.allNewsList = this.allNewsList.concat(res.rows)
                    if(!res.rows.length || (this.total+this.rows) >= res.total){
                        this.hasMore = false
                    }
                }
            })
        },
        selectNew(item){
            this.$router.push({
                path:`/news/${item.id}`
            })
            this.setNewsInfo(item)
        }
    }
}