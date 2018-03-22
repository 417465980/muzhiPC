<template>
	<div class="acBox">
		<div class="acIcon">
			<i class="icon_spri"></i>
			<span>全部活动</span>
		</div>
		<ul class="clearfix">
			<li v-for="item in allActive" @click="selectActive(item)" :key='item.id'>
				<div class="ac_img">
					<img :src="item.imgUrl" />
				</div>
				<div class="ac_title clearfix">
					<div class="active_time fl">
						<p>{{item.title}}</p>
						<div class="effective">
							<i></i>
							<span>活动时间：2018-07-10至2018-09-15</span>
						</div>
						<div class="remain_time">
							<i></i>
							<span>剩余时间：0天0小时0分0秒</span>
						</div>
					</div>
					<img class="end_icon fr" src="../../assets/images/big_acEnd.png" />
				</div>
			</li>
		</ul>
		<div class="moreWrap">
			<load-more></load-more>
		</div>
	</div>
</template>
<script>
	import LoadMore from '../../base/load-more'
	export default{
		components:{
			LoadMore
		},
		data(){
			return{
				allActive:[
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					},
					{
						imgUrl:require('../../assets/images/ac-img.jpg'),
						title:'七夕约鹊桥，情人终眷属'
					}
				]
			}
		},
		methods:{
			selectActive(item){
				this.$router.push({
					path:`/news/${item.id}`
				})
			}
		}
	}
</script>
<style scoped>
	.acBox{width: 810px;padding:10px 0 0 40px;}
	.acBox .acIcon{width: 100%;height:56px;border-bottom:1px solid #e9e9e9;position: relative;margin-bottom: 20px;}
	.acBox .acIcon i{width: 32px; height: 32px;background-position:-65px -10px;display: inline-block;margin-right: 15px;}
	.acBox .acIcon span{font-size: 20px;}
	.acBox .acIcon:before,.acBox .acIcon:after{left: 65px;}
	.acBox .acIcon:before{top:56px;}
	.acBox .acIcon:after{top: 55px;}
	.acBox ul li{width: 385px;float:left;margin-bottom: 30px;}
	.acBox ul li:nth-child(odd){margin-right: 40px;}
	.acBox li .ac_img{width: 100%;height: 163px;margin-bottom:15px;display: flex;justify-content: center;align-items: center;}
	.acBox li .active_time{width:314px;height: 70px;}
	.acBox li .active_time p{font-size:18px;color: #333333;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	
	.acBox li .active_time span{font-size: 13px;color: #666666;font-family: simsun,"宋体";}
	.acBox li .active_time .effective,.acBox li .active_time .remain_time{height: 20px;display: flex;align-items: center;margin-top:5px;}
	.acBox li .active_time i{display:inline-block; width:5px;height: 5px;border: 1px solid #999999;margin-right: 15px;
			transform: rotate(45deg);-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-moz-transform: rotate(45deg);-o-transform: rotate(45deg);
		}
	.acBox li .ac_title{position: relative;}
	.acBox li .ac_title .end_icon{position: absolute;bottom: 0;}
	.acBox .moreWrap{margin-top: 35px;}
</style>