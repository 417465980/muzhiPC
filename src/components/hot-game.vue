<template>
	<div class="gmListWrap">
		<div class="hotGame_tit clearfix">
			<div class="hot_icon fl">
				<span class="middlespan"></span>
				<i class="icon_spri"></i>
				<span>热门游戏</span>
			</div>
			<div class="hot_more fr">
					<router-link to="/game"><img src="../assets/images/more.png" alt=""></router-link>
			</div>
		</div>
		<div class="game_list">
			<ul class="clearfix">
				<li v-for="(item,index) in hotGame" :key="index">
					<router-link :to="'/game/'+item.id" tag="a" class="gm_icon fl"><img class="pis-hover"  v-lazy="'http://game.91muzhi.com/muzhiplat'+item.icon"/></router-link>
					<div class="item_title fl">
						<router-link :to="'/game/'+item.id" tag="p" class="hoveraction" :title="item.name">{{item.name}}</router-link>
						<span :title="item.type+item.appSize+'M'">{{item.type}}{{item.appSize}}M</span>
						<a :href="item.downloadLink" class="hotGmBtn"><span>游戏下载</span></a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  props: {
    hotGame: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.gmListWrap .hotGame_tit .hot_icon i {
  width: 35px;
  height: 33px;
  display: inline-block;
  background-position: -10px -10px;
  margin-right: 10px;
  vertical-align: middle;
}
.hotGame_tit {
  margin-bottom: 30px;
}
.game_list .item_title p,
.game_list .item_title > span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}

.game_list .item_title > span {
  line-height: 28px;
  display: block;
  width: 97px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.game_list .item_title a {
  display: block;
  width: 90px;
  height: 23px;
  text-align: center;
  border: 1px solid #a0a0a0;
  border-radius: 5px;
}
.game_list .item_title a span {
  color: #666666;
  font-size: 14px;
  line-height: 25px;
}
</style>


											