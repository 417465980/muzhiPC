<template>
	<div class="hot_active">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<i class="icon_spri"></i>
				<span>热门活动</span>
			</div>
			<div class="hot_more fr">
				<router-link to="/activeCneter">+</router-link>
			</div>
		</div>
		<ul>
			<li v-for="(item,index) in hotActive" @click="hotAc(item)">
				<figure>
					<img :src="item.imgUrl" :style="imgHeight"/>
					<figcaption>
						{{item.title}}
					</figcaption>
				</figure>
				<div class="hotTimeCont clearfix">
					<div class="active_time fl">
						<div class="effective">
							<i></i>
							<span>活动时间：2018-07-10至2018-09-15</span>
						</div>
						<div class="remain_time">
							<i></i>
							<span>剩余时间：0天0小时0分0秒</span>
						</div>
					</div>
					<slot name="index"></slot>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				hotActive:[
					{
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					}
				]
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
			}
		},
		methods:{
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