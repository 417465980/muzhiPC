<template>
	<div class="topBorder gift-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<load-app></load-app>
				<game-rank :rankList="rankList">
					<span slot="index" slot-scope="props">{{props.type}}</span>
					<i slot="rankFigIcon" class="activeCenRrankIco gmCen_spri"></i>
				</game-rank>
			</div>
			<div class="gmCen_right fl">
				<div class="lbClsifiTit">
					<clsifi-type :typeFields="typeFields">
						<i class="giftCen_icon"></i>
						<span>礼包分类</span>
					</clsifi-type>
				</div>
				<div class="hotLbCont">
					<hot-gift :hotGift="hotGift">
						<a slot="index" slot-scope="props" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</hot-gift>
				</div>
				<load-more></load-more>
			</div>
		</div>
	</div>
</template>
<script>
	import LoadApp from '../../base/load-app'
	import GameRank from '../../base/game-rank'
	import ClsifiType from '../../base/clsifi-type'
	import HotGift from '../../base/hot-gift'
	import LoadMore from '../../base/load-more'
	export default{
		components:{
			LoadApp,
			GameRank,
			ClsifiType,
			HotGift,
			LoadMore
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
				],
				typeFields:['全部','最新礼包','新手礼包','专属礼包','特权礼包','首发礼包','白金礼包','豪华礼包','节日礼包','其他'],
				hotGift:[
					{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		}
				]
			}
		}
	}
</script>
<style scoped>
	.gift-center .gmCen_right{width: 850px;padding-top:15px;}
	.gift-center .gmCen_right .lbClsifiTit{margin:0 0 40px 40px;}
	.gift-center .gmCen_right .hotLbCont{margin:0 0 35px 10px;}
	.gift-center .hotLbCont .game_list .item_title a{width:73px;height: 25px;line-height: 25px;}
</style>