<template>
	<div class="gm_recomd">
		<div class="recomd_tit">
			<span class="middlespan"></span>
			<i class="icon_spri"></i>
			<span>精品游戏推荐</span>
		</div>
		<ul class="clearfix">
			<li v-for="(item,index) in qualityGame" :key="index" @mouseover="showCode(index)" @mouseout="hideCode(index)">
				<!-- <a :href="item.downloadLink"><img v-lazy="item.bigImg|addHttp" /></a> -->
				<router-link :to="'/game/'+item.id" tag="a"><img v-lazy="url +item.bigImg" /></router-link>
				<div class="load" v-if="index == isShow">
					<div class="code">
						<img  :src="qrcode(item.qrcode)">
					</div>
					<div class="title">
						<h3>{{item.name}}</h3>
						<p>{{item.type}}{{item.appSize}}M</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { url } from "../common/js/general";
export default {
  props: {
    qualityGame: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isShow: null,
      url
    };
  },
  methods: {
    showCode(index) {
      this.isShow = index;
    },
    hideCode(index) {
      this.isShow = null;
    },
    qrcode(data) {
      return url + data;
    }
  },
  filters: {
    addHttp(val) {
      return url + val;
    }
  }
};
</script>
<style scoped>
.gm_recomd {
  margin: 30px 0;
}
.recomd_tit {
  /* display: flex;align-items: center; */
  font-size: 0;
}
.recomd_tit i {
  width: 30px;
  height: 29px;
  display: inline-block;
  background-position: -10px -63px;
  margin-right: 10px;
  vertical-align: middle;
}
.recomd_tit span {
  font-size: 20px;
  vertical-align: middle;
}
.gm_recomd ul li {
  float: left;
  width: 278px;
  height: 316px;
  margin-top: 12px;
  margin-right: 29px;
  position: relative;
}
.gm_recomd ul li a {
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
}
.gm_recomd ul li a:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.gm_recomd ul li a img {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
}
.gm_recomd ul li:last-child {
  margin-right: 0 !important;
}
.gm_recomd .load {
  color: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.7);
}
.gm_recomd .load .code {
  width: 77px;
  flex: 0 0 77;
  margin-right: 10px;
}
.gm_recomd .load .title h3 {
  line-height: 25px;
}
.gm_recomd .load .title p {
  line-height: 25px;
  color: #bcbcbf;
}
</style>