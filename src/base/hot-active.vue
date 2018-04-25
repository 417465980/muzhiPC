<template>
	<div class="hot_active">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<i class="icon_spri"></i>
				<span>热门活动</span>
			</div>
			<div class="hot_more fr">
				<router-link to="/active">+</router-link>
			</div>
		</div>
		<ul>
			<li v-for="(item,index) in hotActive" :key="index" ><!-- @click="hotAc(item)" -->
				<figure>
					<router-link :to="'/news/'+item.id" tag="a"><img :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" :style="imgHeight"/></router-link>
					<!-- <img :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" :style="imgHeight"/> -->
					<figcaption>
						{{item.title}}
					</figcaption>
				</figure>
				<div class="hotTimeCont clearfix">
					<div class="active_time fl">
						<div class="effective">
							<i></i>
							<span>活动时间：{{item.startDate}}至{{item.endDate}}</span>
						</div>
						<div class="remain_time">
							<i></i>
							<span>剩余时间：0天0小时0分0秒</span>
						</div>
					</div>
					<img class="end_icon fr" src="../assets/images/endIcon.png" :style="endIconW" v-show="isEnd === true"/>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import {getNews} from 'api/muzhi'
	import {timeHandle,countdown} from 'common/js/time'
	export default{
		data(){
			return{
				hotActive:[],
				isEnd:false
			}
		},
		computed:{
			imgHeight(){
				var url = window.location.href;
				if(url.indexOf('news') > -1){
					return 'height:139px'
				}else{
					return 'height:119px'
				}
			},
			endIconW(){
				var url = window.location.href;
				if(url.indexOf('news') === -1){
					return 'width:44px'
				}
			}
		},
		mounted(){
			setTimeout(()=>{
				this._getHotActive()
			},20)
		},
		methods:{
			_getHotActive(){
				let type = 1,page = 1,rows = 2
				getNews(type,page,rows).then((res) =>{
					if(res.ret === true){
						this.hotActive = res.rows
						for(let i =0; i< this.hotActive.length; i++){
						//	let endTime = new Date(this.hotActive[i].endDate).getTime()
						//	let nowTime = new Date().getTime()
    						
							if(timeHandle(this.hotActive[i].endDate) === true){
								this.isEnd = false
							}else{
								this.isEnd = true	
							}
						}
					}
				})	
			},
			hotAc(item){
				this.$router.push({
					path:`/news/${item.id}`
				})
			}
		}
	}
</script>
<style scoped>
	.hot_active{width:100%;}
	.hot_active .active_tit .hot_icon i{ width: 32px; height: 32px;display:block;background-position: -65px -10px;margin-right: 10px;}
	.hot_active ul{border-top:1px solid #e9e9e9;margin-top: 11px;}
	.hot_active ul figure img{width: 100%;margin: 20px 0 10px;height: auto;}
	.hot_active ul figure figcaption{color: #333333;font-size: 18px;}
	.hot_active li .hotTimeCont{position: relative;}
	.hot_active ul .active_time{font-size: 10px;color: #666666;}
	.hot_active ul .active_time .effective,.hot_active ul .active_time .remain_time{height: 20px;display: flex;align-items: center;margin-top:5px;}
	.hot_active ul .active_time i{display:inline-block; width:5px;height: 5px;border: 1px solid #999999;margin-right: 15px;
			transform: rotate(45deg);-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-moz-transform: rotate(45deg);-o-transform: rotate(45deg);
		}
	.hot_active ul .end_icon{margin-top: 5px;}
		
</style>