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
						<img slot="index" slot-scope="props" class="end_icon fr" src="../../assets/images/big_acEnd.png" />
					</hot-active>
				</div>
			</div>
			<div class="gmCen_right fr">
				<clsifi-type :typeFields="typeFields">
					<i class="icon_spri"></i>
					<span>资讯专题</span>
				</clsifi-type>
				<news-list></news-list>
			</div>
		</div>
	</div>
</template>
<script>
	import GameRank from '../../base/game-rank'
	import HotActive from '../../base/hot-active'
	import NewsList from './news-list'
	import ClsifiType from '../../base/clsifi-type'
	export default{
		components:{
			GameRank,
			HotActive,
			NewsList,
			ClsifiType
		},
		data(){
			return{
				rankList:[
					{
						title:'正统三国',
						type:'角色1',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色2',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色3',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色4',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色5',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色6',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色7',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色8',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色9',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					},
					{
						title:'正统三国',
						type:'角色10',
						appSize:'113',
						gmIcon:require('../../assets/images/gmIcon.png')
					}
				],
				typeFields:['全部','热门资讯','游戏测评','游戏攻略']
			}
		}
	}
</script>
<style scoped>
	.news-center .gmCen_right{width:810px;padding:15px 0 0 40px;}
	.news-center .clsifi_title .clsifi_icon i{width: 32px; height: 32px;display:block;background-position:-65px -10px;margin-right: 10px;}
</style>