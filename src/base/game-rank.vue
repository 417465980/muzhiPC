<template>
	<div class="gm_rank">
		<div class="rank_title">
			<i></i>
			<span>热门游戏榜</span>
		</div>
		<ul>
			<li v-for="(item,index) in rankList" :key="index" @mouseover="rankShow(index)" @mouseout="rankHide(index)">
			
				
					<div class="showRankGm clearfix" v-if="currentIndex === index">
						<div class="rankGmIcon fl">
							<router-link :to="'/game/'+item.id">
								<img :src="'http://game.91muzhi.com/muzhiplat'+item.icon" />
								<div><span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i></div>
							</router-link>
						</div>
						<div class="gmRank_tit fl">
							<p class="hoveraction">{{item.name}}</p>
							<span>{{item.type}}&nbsp;|{{item.appSize}}M</span>
						</div>
						<div class="rankGmBtn fr">
							<a :href="item.downloadLink" >
							<i class="gmCenRrankIco gmCen_spri"></i>
							</a>
						</div>
					</div>
					<div class="hotRank_tit" v-else>
						<div><span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i></div>
						<span>{{item.name}}</span>
					</div>
				
			</li>
		</ul>
	</div>
</template>
<script>
import { getGames } from "api/muzhi";
export default {
  data() {
    return {
      rankList: [],
      currentIndex: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this._getRank();
    }, 20);
  },
  methods: {
    _getRank() {
      let place = "gameHot";
      let page = 1;
      let rows = 10;
      getGames(place, page, rows).then(res => {
        if (res.ret === true) {
          this.rankList = res.rows;
        }
      });
    },
    rankShow(index) {
      this.currentIndex = index;
    },
    rankHide(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped>
</style> 





