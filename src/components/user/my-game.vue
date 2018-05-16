<template>
	<div id="my-game">
		<div class="">
			<div class="my-game-main">
				<ul class="my-game-list">
					<li v-for="(item,index) in game" :key="index">
						<div>
							<img class="my-game-icon" :src="item.icon|addHttp" alt="">
							<div class="my-game-info">
								<p>{{item.name}}</p>
								<a :href="item.website" terget="_blank" class="officialWeb">官网</a>
								<a href="javascript:;" class="gift-packbag"><i></i>礼包</a></div>
						</div>
					</li>
					
				</ul>
			</div>
			<div class="subnav">&nbsp;&nbsp;精品游戏推荐</div>
			<ul class="my-game-list">
				<li v-for="data in rows" :key="data.$index">
					<div>
						<router-link to="/"><img class="my-game-icon" :src="data.icon|addHttp" alt=""></router-link>
						<div class="my-game-info">
							<p>{{data.name}}</p>
							<a :href="data.website" class="officialWeb">官网</a>
							<a href="javascript:;" class="gift-packbag"><i></i>礼包</a></div>
					</div>
				</li>
			</ul>
		</div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs'
	import {url,hint,token,userdata,game} from '../../common/js/general'
	export default{
		data(){
			return {
				info:{
					username:userdata.name,
					token
				},
				rows:[],
				game,
			}
		},
		mounted(){
			let paramsUrl =qs.stringify({
				'username':that.info.username,
				'token':that.info.token
			})
			let that = this;
			axios.post(url+'/muzhiplat/pc2/user/findMyGame',paramsUrl).then(function(res){
				console.log(res.data)
				that.rows = res.data.rows
				hint(that.$refs,res.data.msg)
			}).catch(function(res){
				console.log(res)
			})
		},
		filters:{
			addHttp(data){
				return url+data
			}
		}
	}	
</script>
<style scoped lang="stylus">
.subnav
	font-size 20px
	color #723083
	line-height 22px
	&:before
		content ''
		vertical-align top
		display inline-block
		width 3px
		height 22px
		background #723083

.my-game-main	
	margin 35px 0
.my-game-list
	li
		display inline-block
		width 230px
		margin 25px 0
	li+li
		margin-left 50px
	li:nth-of-type(3n-2)
		margin-left 0
.my-game-icon
	width 80px
	float left
.my-game-info
	margin-left 90px
	p
		text-align left 
		line-height 1
		padding 14px 0
		font-size 16px
		color #333
	a
		display inline-block 
		width 64px
		height 32px
		border-radius 6px
		text-align center
		font-size 14px
		line-height 32px
		color #666
		border 1px solid #999 
		background #fff
		cursor pointer
		&:hover
			background: linear-gradient(left, #6461a5, #cf2878);
			background: -webkit-linear-gradient(left, #6461a5, #cf2878);
			color: #fff;
</style>