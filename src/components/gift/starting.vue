<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="game_list">
			<ul class="clearfix">
				<li v-for="(item,index) in hotGift" :key="index">
					<a class="gm_icon fl">
						<img :src="'http://game.91muzhi.com/muzhiplat'+item.giftIconUrl"/>
					</a>
					<div class="item_title fl">
						<p :title="item.gameName">{{item.gameName}}</p>
						<span :title="item.giftName">{{item.giftName}}</span>
						<a :href="item.download" target="_blank" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		
		data(){
			return{
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
	
</style>