<template>
  	<div class="cont_box">
    		<div class="banner clearfix">
		    	<div class="fl">
					<user-info v-if="showInfo"></user-info>
					<reg-info v-else></reg-info>
				</div>
				<div class="fr">
					<Slide :slides="slides" :inv="invSpeed"></Slide>
				</div>
			</div>
			<game-recommend :qualityGame="qualityGame"></game-recommend>
			<div class="clearfix">
				<div class="homeHotActive fl">
					<hot-active></hot-active>
				</div>
				<div class="homeGmList fr">
					<hot-game :hotGame="hotGame"></hot-game>
				</div>
			</div>
			<div class="news_gift clearfix">
				<div class="fl">
					<news-info :newList="newList">
						<h2 @click="selectHdline">{{headlines}}</h2>
					</news-info>
				</div>
				<div class="homeGiftList fr">
					<hot-gift :hotGift="hotGift">
						<div slot="hotLb_Tit" class="hotGift_tit clearfix">
							<div class="hot_icon fl">
									<i class="icon_spri"></i>
									<span>热门礼包</span>
							</div>
							<div class="hot_more fr">
								<router-link to="/gift">+</router-link>
							</div>
						</div>
					</hot-gift>
				</div>
			</div>                             
		</div>
</template>

<script>
import Head from 'base/head'
import UserInfo from 'base/user-info'
import RegInfo from 'base/reg-info'
import Slide from './slide'
import GameRecommend from './game-recommend'
import HotActive from 'base/hot-active'
import  HotGame from './hot-game'
import NewsInfo from './news-info'
import  HotGift from 'base/hot-gift'
import {getBanner,getGames,getNews,hotGift} from 'api/muzhi'
import {token} from '../common/js/general'
export default {
  	components:{
		UserInfo,
		RegInfo,
  		Slide,
  		GameRecommend,
  		HotActive,
  		HotGame,
  		NewsInfo,
  		HotGift
  	},
  	data(){
  		return{
			slides:[],
			showInfo:token,
			invSpeed: 4000,
			place:'',
			page:'',
			rows:'',
			qualityGame:[],
			hotGame:[],
			hotGift:[],
			headlines:'',
			headlineId:null,
			newList:[]
		}
	},
	created(){
		this._getSlide()
		this._getQualityGame()
		this._getHotGames()
		this._getHotGift()
		this._getNews()
	},
  	methods:{
			// dosomethingOnslide(){
			// 	console.log('dosomethingOnslide run!!');
			// }
			_getSlide(){
				getBanner().then((res) =>{
					this.slides = res
				})	
			},
			_getQualityGame(){
				this.place = 'indexBoutique'
				this.page = 1
				this.rows = 4
				getGames(this.place,this.page,this.rows).then((res) => {
					if(res.ret === true){
						this.qualityGame = res.rows
					}	
				})	
			},
			_getHotGames(){
				this.place = 'gameHot'
				this.page = ''
				this.rows = ''
				getGames(this.place,this.page,this.rows).then((res) => {
					if(res.ret === true){
						this.hotGame = res.rows
					}	
				})
			},
			_getNews(){
				let type = 4
				this.page = 1
				this.rows = 9
				getNews(type,this.page,this.rows).then((res) =>{
					if(res.ret === true){
						this.headlines = res.rows[0].title
						this.headlineId = res.rows[0].id
						this.newList = res.rows.slice(1,9)
					}
				})
			},
			_getHotGift(){
				this.place = 'hotGift'
				this.page = ''
				this.rows = ''
				hotGift(this.place,this.page,this.rows).then((res) =>{
					if(res.ret === true){
						this.hotGift = res.rows
					}	
				})	
			},
			selectHdline(){
				this.$router.push({
					path:`/news/${this.headlineId}`
				})
			}
		}
}
</script>

<style scoped>
	.homeHotActive{width: 300px;}
	.homeGmList,.homeGiftList{width:900px;}
	.homeGiftList .hotGift_tit{margin-bottom: 20px;}
	
</style>







