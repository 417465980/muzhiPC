<template>
	<div class="topBorder news-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<game-rank :rankList="rankList">
					<span slot="index" slot-scope="props">{{props.type}}&nbsp;&nbsp;|&nbsp;&nbsp;{{props.appSize}}M</span>
					<i slot="rankFigIcon" class="gmCenRrankIco gmCen_spri"></i>
				</game-rank>
				<div class="newsHotActive">
					<hot-active>
						<img slot="index" slot-scope="props" class="end_icon fr" src="../assets/images/big_acEnd.png" />
					</hot-active>
				</div>
			</div>
			<div class="gmCen_right fr">
				<div class="info_pro">
					<div class="fl">
						<i class="gmCen_spri"></i>
						<span>资讯专题</span>
					</div>
					<router-link to="/news" class="fr" >+</router-link>
				</div>
				<div class="detail_cont">
					<div class="title">
						<h1>单与不单，都来狂欢</h1>
						<span>发布时间：2018-02-14</span>
					</div>
					<div class="content">
						<p>双十一最该打折的是什么？</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import GameRank from 'base/game-rank'
	import HotActive from 'base/hot-active'
	export default{
		components:{
			GameRank,
			HotActive
		},
		data(){
			return{
				rankList:[
					{
						title:'正统三国',
						type:'角色1',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色2',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色3',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色4',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色5',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色6',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色7',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色8',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色9',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色10',
						appSize:'113',
						gmIcon:require('../assets/images/gmIcon.png')
					}
				]
			}
		}
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
</style>


