<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="game_list">
			<ul class="clearfix">
				<li v-for="item in hotGift" :key="item.id">
					<a class="gm_icon fl">
						<img :src="item.gmIcon"/>
					</a>
					<div class="item_title fl">
						<p>{{item.title}}</p>
						<span>{{item.size}}</span>
						<slot name="index"></slot>
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
		},
		data(){
			return{
				
			}
		}
		
	}
</script>
<style scoped>
	.gmListWrap .hotGift_tit .hot_icon i{width: 28px; height: 28px;display:block;background-position: -60px -63px;margin-right: 10px;}
	.game_list ul li{margin-bottom: 30px;}
	.game_list .item_title > span{line-height: 25px;}
	.game_list .item_title a{display: flex;justify-content: center;align-items: center; text-align: center;border: 1px solid #a0a0a0;border-radius: 5px;}
	.game_list .item_title a i,.game_list .item_title .hotGmBtn:hover i{display: inline-block;height:16px;width:16px;margin-right: 5px;}
	.game_list .item_title a i{background-position:-168px -46px;}
	.game_list .item_title a span{color: #666666;font-size: 14px;}
	.game_list .item_title .hotGmBtn:hover i{background-position:-168px -10px}
</style>