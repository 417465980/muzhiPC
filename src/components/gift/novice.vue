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
						<a href="javascript:;" @click="markfqa(item.download)" class="hotGmBtn">   
							<span class="middlespan	"></span>
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<div class="load_more" v-if="hotGift.length>0"><!--  @click="addgift" -->
			<span class="hoveraction">查看更多</span>
			<a>
				<i class="gmCen_spri"></i>
			</a>
		</div>
		<div class="markfqa" @click.stop="close" v-show="bool">
			<transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
				<div class="markbox markbox-gift">
					<div class="close" @click.stop="close">×</div>
					<div @click.stop="function(){return false}">
						<div class="mark-content">
							<p>
								<span class="f18 lh24">请到拇指游戏宝领取</span><br>
                  <a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk"><img class="receive" src="../../assets/images/2.png" alt=""></a>
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
import { url, hint } from "../../common/js/general";
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      hotGift: [],
      place: ["hotGift", "recomGift"],
      rows: 16,
      page: 1,
      url,
      show: true,
      bool: false,
      markhtml: ""
    };
  },
  methods: {
    findMyGifts() {
      let that = this;
      let paramsUrl = qs.stringify({
        place: that.place[1],
        page: that.page,
        rows: that.rows
      });
      axios
        .post(url + "/muzhiplat/pc2/gift/findGiftsByType", paramsUrl)
        .then(function(res) {
          // hint(that.$refs,res.data.msg)
          that.hotGift = res.data.rows;
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    receivebag() {
      hint(this.$refs, "请到App领取");
    },
    addgift() {
      let that = this;
      that.page = that.page + 1;
      let paramsUrl = qs.stringify({
        place: that.place[1],
        page: that.page,
        rows: 8
      });
      axios
        .post(url + "/muzhiplat/pc2/gift/findGiftsByType", paramsUrl)
        .then(function(res) {
          if (res.data.ret) {
            res.data.msg = "加载成功";
          }
          // hint(that.$refs,res.data.msg)

          that.hotGift = that.hotGift.concat(res.data.rows);
          if (res.data.rows.length == 0) {
            that.show = false;
          }
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    markfqa(download) {
      this.markhtml = download;
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  },
  mounted() {
    this.findMyGifts();
  },
  filters: {
    addHttp(val) {
      return url + val;
    }
  }
};
</script>
<style scoped>
</style>
