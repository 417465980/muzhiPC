<template>
	<div class="cont_box gm_center clearfix">
		<div class="gmCen_left fl">
			<user-info></user-info>
			<game-rank :rankList="rankList">
				<span slot="index" slot-scope="props">{{props.type}}&nbsp;&nbsp;|&nbsp;&nbsp;{{props.appSize}}M</span>
				<i slot="rankFigIcon" class="gmCenRrankIco gmCen_spri"></i>
			</game-rank>
		</div>
		<div class="gmCen_right fr">
			<clsifi-type :typeFields="typeFields">
				<i class="icon_spri"></i>
				<span>游戏分类</span>
			</clsifi-type>
			<gmclsifi-box></gmclsifi-box>
		</div>
	</div>
</template>
<script>
	import UserInfo from 'base/user-info'
	import GameRank from 'base/game-rank'
	import ClsifiType from 'base/clsifi-type'
	import GmclsifiBox from 'components/gmclsifi-box'
	export default{
		components:{
			UserInfo,
			GameRank,
			ClsifiType,
			GmclsifiBox
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
				],
				typeFields:['全部','休闲益智','角色扮演','经营策略','动作冒险','棋牌天地','飞行射击','体育竞技','网络游戏']
			}
		}
	}
</script>
<style scoped>
	.gm_center .gmCen_right{border-top: 1px solid #e9e9e9;width:810px;padding: 15px 0 0 40px;} 
</style>