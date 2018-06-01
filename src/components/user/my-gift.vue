<template>
	<div id='my-gift'>
	
		<div v-if="!!rows" >
			<div class="my-gift-nav">
				<ul>
					<li><a href="javascript:;">礼包名称</a></li>
					<li><a href="javascript:;">有效期</a></li>
					<li><a href="javascript:;">激活码</a></li>
					<li><a href="javascript:;">状态</a></li>
				</ul>
			</div>
			<div class="my-gift-list"  v-for="data in rows" :key="data.$index">
				<ul>
					<li>《{{data.gameName}}》{{data.giftName}}</li>
					<li>{{data.giftedate}}至{{data.giftpdate}}</li>
					<li>{{data.giftcode}}</li>
					<li>{{data.giftState|giftState}}</li>
				</ul>
			</div>
		</div>
		<div  v-else >
			<img src="static/images/3.png" class="center-img" alt=""/>
			<p class="g6 f16 tc mt20">前往app领取吧</p>
		</div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
		<!-- <div class="paging" id="page"></div> -->
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { url, hint, token, userdata } from "../../common/js/general";

export default {
  data() {
    return {
      info: {
        username: userdata.name,
        token
      },
      rows: null
    };
  },
  methods: {},
  mounted() {
    //获取礼包
    let that = this;
    let paramsUrl = qs.stringify({
      username: that.info.username,
      token: that.info.token
    });

    axios
      .post(url + "/muzhiplat/pc2/user/findMyGifts", paramsUrl)
      .then(function(res) {
        that.rows = res.data.rows;
        hint(that.$refs, res.data.msg);
      })
      .catch(function(res) {
        console.log(res);
      });
  },
  filters: {
    giftState(val) {
      if (val == 1) {
        return "未使用";
      } else {
        return "已使用";
      }
    }
  }
};
</script>
<style scoped lang="stylus" >
.boxout {
	width: 6px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	background: #ccc;
}

.boxout span {
	display: block;
	width: 100%;
	background: rgba(0, 0, 0, 0.2);
	height: 100px;
	border-radius: 3px;
	position: absolute;
	top: 0;
	left: 0;
	cursor: pointer;
}

.my-gift-box {
	width: 100%;
}

.my-gift-nav {
	font-size: 0;
	text-align: center;
	margin-bottom: 15px;
}

.my-gift-nav li {
	display: inline-block;
	width: 25%;

	a {
		display: inline-block;
		width: 98px;
		height: 28px;
		border: 1px solid #820c9b;
		text-align: center;
		margin: 0 auto;
		font-size: 16px;
		color: #820c9b;
		line-height: 28px;
	}
}

.my-gift-list {
	font-size: 0;
	text-align: center;

	li {
		display: inline-block;
		width: 25%;
		font-size: 14px;
		color: #666;
		padding: 18px 0;
		line-height: 1;
	}
}
</style>