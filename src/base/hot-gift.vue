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
		props:{
			hotGift:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style scoped>
	.gmListWrap .hotGift_tit .hot_icon i{width: 28px; height: 28px;display:block;background-position: -60px -63px;margin-right: 10px;}
	.game_list ul li{margin-bottom: 30px;}
	.game_list .item_title p,.game_list .item_title > span{width:97px; text-overflow: ellipsis;overflow: hidden; white-space: nowrap}
	.game_list .item_title > span{line-height: 25px;display: block;}
	.game_list .item_title a{display: flex;justify-content: center;align-items: center; text-align: center;border: 1px solid #a0a0a0;border-radius: 5px;}
	.game_list .item_title a i,.game_list .item_title .hotGmBtn:hover i{display: inline-block;height:16px;width:16px;margin-right: 5px;}
	.game_list .item_title a i{background-position:-168px -46px;}
	.game_list .item_title a span{color: #666666;font-size: 14px;}
	.game_list .item_title .hotGmBtn{width:73px;height: 25px;line-height: 25px;}
	.game_list .item_title .hotGmBtn:hover i{background-position:-168px -10px}
</style>