<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="expect" v-if="!hotGift.length">
            <p>无此分类礼包，敬请期待...</p>
        </div>
		<div v-else class="game_list">
			<ul class="clearfix">
				<li v-for="(item,index) in hotGift" :key="index">
					<a class="gm_icon fl">
						<img :src="'http://game.91muzhi.com/muzhiplat'+item.giftIconUrl"/>
					</a>
					<div class="item_title fl">
						<p :title="item.gameName" class="hoveraction">{{item.gameName}}</p>
						<span :title="item.giftName">{{item.giftName}}</span>
						<a :href="item.download" target="_blank" class="hotGmBtn">   
							<span class="middlespan	"></span>
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="load_more" v-if="hotGift.length>0"><!--  @click="addgift" -->
			<p></p>
		</div>
	</div>
</template>
<script>
import expect from "base/expect";
export default {
  data() {
    return {
      hotGift: []
    };
  }
};
</script>
<style scoped>
</style>