<template>
  	<div class="cont_box">
    		<div class="banner clearfix">
		    	<div class="fl">
					<user-info></user-info>
				</div>
				<div class="fr">
					<Slide :slides="slides" :inv="invSpeed" @onchange="dosomethingOnslide"></Slide>
				</div>
			</div>
			<game-recommend></game-recommend>
			<div class="clearfix">
				<div class="homeHotActive fl">
					<hot-active>
						<img slot="index" slot-scope="props" class="end_icon fr" src="../assets/images/endIcon.png" />
					</hot-active>
				</div>
				<div class="homeGmList fr">
					<hot-game :hotGame="hotGame"></hot-game>
				</div>
			</div>
			<div class="news_gift clearfix">
				<div class="fl">
					<news-info :newList="newList"></news-info>
				</div>
				<div class="homeGiftList fr">
					<hot-gift :hotGift="hotGift">
						<div slot="hotLb_Tit" class="hotGift_tit clearfix">
							<div class="hot_icon fl">
									<i class="icon_spri"></i>
									<span>热门礼包</span>
							</div>
							<div class="hot_more fr">
									<router-link to="/giftCenter">+</router-link>
							</div>
						</div>
						<a slot="index" slot-scope="props" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</hot-gift>
				</div>
			</div>
		</div>
</template>

<script>
import Head from 'base/head'
import UserInfo from 'base/user-info'
import Slide from './slide'
import GameRecommend from './game-recommend'
import HotActive from 'base/hot-active'
import  HotGame from './hot-game'
import NewsInfo from './news-info'
import  HotGift from 'base/hot-gift'

export default {
  	components:{
  		UserInfo,
  		Slide,
  		GameRecommend,
  		HotActive,
  		HotGame,
  		NewsInfo,
  		HotGift
  		
  	},
  	data(){
  		return{
  				invSpeed: 3000,
					slides: [
				        {
				          src: require('../assets/images/banner01.jpg'),
				          title: 'xxx1',
				          href: 'http://91muzhi.com'  
				        },
				        {
				          src: require('../assets/images/banner01.jpg'),
				          title: 'xxx2',
				          href: 'http://dmx.muzhiyouwan.com'
				        },
				        {
				          src: require('../assets/images/banner01.jpg'),
				          title: 'xxx3',
				          href: 'http://hz.muzhiyouwan.com'
				        },
				        {
				          src: require('../assets/images/banner01.jpg'),
				          title: 'xxx4',
				          href: 'http://ddt.muzhiyouwan.com'
				        }
				  ],
				  hotGame:[
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		},
				  		{
				  			gmIcon: require('../assets/images/gmIcon.png'),
				  			title:'坦克警戒',
				  			size:'角色扮演100M'
				  		}
				  ],
				  newList:[
				  		{
				  			id:6,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:7,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:8,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:9,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:10,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:11,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:12,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		},
				  		{
				  			id:13,
				  			type: '新闻',
				  			title:'电饭锅开了房咖喱咖啡得房率高级的发过来电饭锅突然一天',
				  			content:'腐烂国度几个东方蓝海国际饭店ID发了个了块记录对方感觉对方立刻感觉到凤凰老地方和框架格里芬的空间割发代首'
				  		}
				  ],
				  hotGift:[
					{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		},
			  		{
			  			gmIcon: require('../assets/images/gmIcon.png'),
			  			title:'坦克警戒',
			  			size:'拇指特权礼包'
			  		}
				]
  		}
  	},
  	methods:{
			dosomethingOnslide(){
				console.log('dosomethingOnslide run!!');
			}
		}
}
</script>

<style scoped>
	.homeHotActive{width: 300px;}
	.homeGmList,.homeGiftList{width:900px;}
	.homeGiftList .hotGift_tit{margin-bottom: 20px;}
	.homeGiftList .game_list .item_title a{width:83px;height: 28px;line-height: 28px;}
</style>



