<template>
	<div class="news_info">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<i class="icon_spri"></i>
				<span>新闻资讯</span>
			</div>
			<div class="hot_more fr">
				<router-link :to="{path:'/news/all'}" tag="a">+</router-link>
			</div>
		</div>
		<div class="new_content">
			<slot></slot>
			<ul>
				<li v-for="(item,index) in newList" :key="index" @click="homeNews(item)">
					<a>{{item.adType}}</a>
					<span>{{item.title}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			newList:{
				type:Array,
				default:[]
			}
		},
		methods:{
			homeNews(item){
				this.$router.push({
					path:`/news/${item.id}`
				})		
			}
		}
	}
</script>
<style scoped>
	.news_info{width: 300px;}
	.news_info .active_tit .hot_icon i{ width: 24px; height: 26px;display:block;background-position: -117px -54px;margin-right: 10px;}
	.news_info .new_content{border-top:1px solid #e9e9e9;margin-top: 10px;}
	.news_info .new_content h2{color: #820c9b;text-align: center;line-height: 65px;cursor: pointer}
	.news_info .new_content li{width: 300px;margin-bottom: 15px;display: flex;align-items: center;cursor: pointer}
	.news_info .new_content li a{flex: 0 0 43; margin-right: 10px; height: 20px;width: 43px;border: 1px solid #cf387f;text-align: center;line-height: 20px;
		color:#cf387f;font-size:12px;border-radius: 5px;
	}
	.news_info .new_content li span:hover{
		color:#666;
		text-shadow: 1px 1px 1px #b788a0;
	}
	.news_info .new_content li span{color:#666666;font-size: 14px;flex:1; text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
</style>