<template>
	<div class="topBorder news-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<game-rank></game-rank>
				<div class="newsHotActive">
					<hot-active></hot-active>
				</div>
			</div>
			<div class="gmCen_right fr">
				<div class="info_pro">
					<div class="fl">
						<i class="gmCen_spri"></i>
						<span>{{rows.adType}}专题</span>
					</div>
					<router-link to="/news" class="fr" >+</router-link>
				</div>
				<div class="detail_cont">
					<div class="title">
						<h1>{{rows.title}}</h1>
						<span>发布时间：{{rows.startDate}}</span>
					</div>
					<div class="content">
						<p v-html="rows.contentUrl"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import GameRank from 'base/game-rank'
	import HotActive from 'base/hot-active'
	import {mapGetters} from 'vuex'
	import axios from 'axios'
	import {url } from 'common/js/general'
	export default{
		components:{
			GameRank,
			HotActive
		},
		data(){
			return {
				rows:{}
			}
		},
		computed:{
            newsTitle(){
                return this.newsInfo.title
            },
            newsTime(){
                return this.newsInfo.startDate
            },
            newsCont(){
                return this.newsInfo.contentUrl
            },
            ...mapGetters([  
                'newsInfo' 
            ])
        },
        created(){
            this._getNewsDetail()
        },
        methods:{
            _getNewsDetail(){
				let URL = window.location.href
				if(URL.indexOf('news') > -1){
					if (!this.newsInfo.id) {
						this.$router.push('/news')
						return
					}	
				}
				if(URL.indexOf('active') > -1){
					if (!this.newsInfo.id) {
						this.$router.push('/active')
						return
					}
				}
            }
		},
		methods:{
			getData(){
				const that = this
				let paramsUrl = new URLSearchParams()
				//http://game.91muzhi.com/muzhiplat/pc2/news/{id}

				var newsId = window.location.href.split('/news/')[1]
				newsId = newsId=='all'?null:newsId
				if(newsId){
					axios.post(url + '/muzhiplat/pc2/news/'+newsId,).then(function(res){
						console.log(res.data)
						that.rows = res.data.rows
					}).catch(function(res){
						
					})				
				}				
			}


		},
		created (){
            this.getData()
        },
         watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getData'
        },
	}
	
</script>
<style scoped>
	.news-center .gmCen_right{width:810px;padding:10px 0 0 40px;}
	.info_pro{height: 20px;line-height: 20px;padding: 15px 0; border-bottom: 1px solid #f0f0f0;}
	.info_pro div{display: flex;align-items: center;position: relative;}
	.info_pro div i{display: inline-block; width: 26px; height: 25px;background-position: -10px -58px;margin-right: 10px;}
	.info_pro div span{font-size: 20px;}
	.info_pro div:before,.info_pro div:after{left: 60px;}
	.info_pro div:before{top:36px;}
	.info_pro div:after{top: 35px;}
	.detail_cont .title{border-bottom: 1px solid #f0f0f0;text-align: center;padding: 12px 0 35px;}
	.detail_cont .title h1{font-weight: normal;line-height: 60px;font-size: 25px;color: #333333;}
	.detail_cont .title span{font-size: 14px;color:#959595;}
	.content{ margin:20px;}
</style>


