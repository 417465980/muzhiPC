<template>
	<div class="topBorder">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<load-app></load-app>
				<game-rank :rankList="rankList">
					<span slot="index" slot-scope="props">{{props.type}}</span>
					<i slot="rankFigIcon" class="activeCenRrankIco gmCen_spri"></i>
				</game-rank>
			</div>
			<div class="gmCen_right fr">
				<active-box></active-box>
			</div>
		</div>
	</div>
</template>
<script>
	import LoadApp from '../../base/load-app'
	import GameRank from '../../base/game-rank'
	import ActiveBox from './active-box'
	export default{
		components:{
			LoadApp,
			GameRank,
			ActiveBox
		},
		data(){
			return{
				rankList:[
				{
					title:'正统三国',
					type:'新手礼包1',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包2',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包3',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包4',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包5',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包6',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包7',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包8',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包9',
					gmIcon:require('../../assets/images/gmIcon.png')
				},
				{
					title:'正统三国',
					type:'新手礼包10',
					gmIcon:require('../../assets/images/gmIcon.png')
				}
			]
			}
		}
	}
</script>
<style scoped>
	
</style>