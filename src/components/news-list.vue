<template>
	<div class="new_list">
		<ul>
			<li class="clearfix" v-for="item in newsList" @click="selectNew(item)"> 
				<div class="new_img fl">
					<img :src="item.imgUrl" />
				</div>
				<div class="new_title fl">
					<h1>{{item.title}}</h1>
					<p>{{item.describ}}</p>
				</div>
				<div class="new_time fr">
					<span>{{item.time}}</span>
				</div>
			</li>
		</ul>
		<div class="more_news">
			<load-more></load-more>
		</div>
	</div>
</template>
<script>
	import LoadMore from 'base/load-more'
	export default{
		components:{
			LoadMore
		},
		data(){
			return{
				newsList:[
					{
						id:1,
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属',
						describ:'过年最该打折的是什么？当然是拇指币啦！过年最该打折的是什么？当然是拇指币啦！',
						time:'2018-01-18'
					},
					{
						id:2,
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属',
						describ:'过年最该打折的是什么？当然是拇指币啦！过年最该打折的是什么？当然是拇指币啦！',
						time:'2018-01-18'
					},
					{
						id:3,
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属',
						describ:'过年最该打折的是什么？当然是拇指币啦！过年最该打折的是什么？当然是拇指币啦！',
						time:'2018-01-18'
					},
					{
						id:4,
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属',
						describ:'过年最该打折的是什么？当然是拇指币啦！过年最该打折的是什么？当然是拇指币啦！',
						time:'2018-01-18'
					},
					{
						id:5,
						imgUrl:require('../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属',
						describ:'过年最该打折的是什么？当然是拇指币啦！过年最该打折的是什么？当然是拇指币啦！',
						time:'2018-01-18'
					}
				]
			}
		},
		methods:{
			selectNew(item){
				this.$router.push({
					path:`/news/${item.id}`
				})
			}
		}
	}
</script>
<style scoped>
	.new_list li{padding: 30px 0;border-top:1px solid #f0f0f0;}
	.new_list li:first-child{border-top:none !important;padding:0 0 30px!important;}
	.new_list li .new_img{border: 1px solid red; width: 234px;height: 118px;margin-right: 20px;display: flex;justify-content: center;align-items: center;}
	.new_list li .new_title h1{margin:10px 0; font-weight: normal;font-size: 20px;color: #333333;}
	.new_list li .new_title p{width:419px; font-size:15px;color: #959595;line-height: 25px;overflow: hidden;text-overflow: ellipsis;
    	display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
    }
	.new_list li .new_time{display: flex;align-items:center; width: 95px;height:15px;margin:105px 0 0 40px;background: url('../assets/images/news_time.png') no-repeat center left;}
	.new_list li .new_time span{color:#959595;font-size:12px;margin-left:20px;}
	.new_list .more_news{margin-top: 75px;}
</style>