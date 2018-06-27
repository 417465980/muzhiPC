<template>
	<div class="gm_rank">
		<div class="rank_title">
			<i></i>
			<span>热门礼包榜</span>
		</div>
		<ul>
			<li v-for="(item,index) in giftRank" :key="index" @mouseover="rankShow(index)" @mouseout="rankHide(index)">
        <a href="javascript:;" class="hoveraction" @click="markfqa">
				<div class="showRankGm clearfix" v-if="currentIndex === index">
					<div class="rankGmIcon fl pis-hover">
						<img class="" v-lazy="'http://game.91muzhi.com/muzhiplat'+item.giftIconUrl" />
						<div>
							<span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i>
						</div>
					</div>
					<div class="gmRank_tit fl">
						<a href="javascript:;" class="hoveraction" >{{item.gameName}}</a>
						<span>{{item.giftName}}</span>
					</div>
					<div class="rankGmBtn fr">
						<i class="activeCenRrankIco gmCen_spri pis-hover"></i>    
                    </div>
				</div>
				<div class="hotRank_tit" v-else>
					<div>
						<span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i>
					</div>
					<span>{{item.gameName}}</span>
				</div>
        </a>
			</li>
		</ul>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
		<div class="markfqa" @click.stop="close" v-show="bool">
          <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
              <div class="markbox markbox-gift">
				<div class="close" @click.stop="close">×</div>
				<div @click.stop="function(){return false}">
					<div class="mark-content">
						<p>
						<span class="f18 lh24">请到拇指游戏宝领取</span><br>
                  <a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk"><img class="receive" src="../assets/images/2.png" alt=""></a>
						<a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk" class="markhtml downbtn">马上下载</a>
						</p>
					</div>  
				</div>
              </div>
            </transition>
      	</div>
	</div>
</template>
<script>
import { hotGift } from "api/muzhi";
import { hint } from "../common/js/general";
export default {
  data() {
    return {
      giftRank: [],
      currentIndex: 0,
      bool: false,
      markhtml: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this._getGiftRank();
    }, 20);
  },
  methods: {
    _getGiftRank() {
      let place = "hotGift";
      let page = 1;
      let rows = 10;
      hotGift(place, page, rows).then(res => {
        if (res.ret === true) {
          this.giftRank = res.rows;
        }
      });
    },
    rankShow(index) {
      this.currentIndex = index;
    },
    rankHide(index) {
      this.currentIndex = index;
    },
    receivebag() {
      hint(this.$refs, "请到App领取");
    },
    markfqa() {
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  }
};
</script>
<style scoped>
.gmRank_tit a {
  margin: 2px 0 10px;
  display: block;
}
</style> 





