<template>
	<div class="news_info">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<i class="icon_spri"></i>
				<span>新闻资讯</span>
			</div>
			<div class="hot_more fr">
				<router-link :to="{path:'/news'}" tag="a">+</router-link>
			</div>
		</div>
		<div class="new_content">
			<h2>&gt;&gt;还珠格格&lt;&lt;手游今日首发！</h2>
			<ul>
				<li v-for="item in newList" @click="homeNews(item)" v-bind:key="item.id" >
					<a>{{item.type}}</a>
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
	.news_info .new_content h2{color: #820c9b;text-align: center;line-height: 65px;}
	.news_info .new_content li{height: 18px;width: 300px;display: flex;align-items: center;margin-bottom: 15px;}
	.news_info .new_content li a{margin-right: 15px; height: 100%;width: 60px;border: 1px solid #cf387f;display: inline-block;text-align: center;line-height: 18px;
		color:#cf387f;font-size:12px;border-radius: 5px;
	}
	.news_info .new_content li span{color:#666666;font-size: 15px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;line-height: 18px;}
</style>