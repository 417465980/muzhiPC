<template>
	<div id='my-gift'>
		<div v-if="!!rows" >
			<div class="my-gift-nav">
				<ul>
					<li><a href="javascript:;">礼包名称</a></li>
					<li><a href="javascript:;">有效期</a></li>
					<li><a href="javascript:;">激活码</a></li>
					<!-- <li><a href="javascript:;">状态</a></li> -->
				</ul>
			</div>
			<div class="contscroll">
				<div class="my-gift-list"  v-for="data in rows" :key="data.$index">
					<ul>
						<li>《{{data.gameName}}》{{data.giftName}}</li>
						<li>{{data.giftedate}}至{{data.giftpdate}}</li>
						<li>{{data.giftcode|toUpperCase}}</li>
						<!-- <li>{{data.giftState|giftState}}</li> -->
					</ul>
				</div>
			</div>
		</div>
		<div  v-else >
			<img src="static/images/3.png" class="center-img" alt=""/>
			<p class="g6 f16 tc mt20">前往app领取吧</p>
		</div>

		<!-- <div class="paging" id="page"></div> -->
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { url, token, userdata } from "../../common/js/general";

export default {
  data() {
    return {
      rows: []
    };
  },
  computed: {
    token() {
      return this.$store.state.token.length > 0
        ? this.$store.state.token
        : token;
    },
    username() {
      return this.$store.state.userName.id
        ? this.$store.state.userName.name
        : userdata.name;
    }
  },
  mounted() {
    //获取礼包
    let that = this;
    let paramsUrl = qs.stringify({
      username: that.username,
      token: that.token
    });

    axios
      .post(url + "/muzhiplat/pc2/user/findMyGifts", paramsUrl)
      .then(function(res) {
        if (res.data.ret) {
          res.data.msg = "获取成功";
        }
        that.rows = res.data.rows;
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
    },
    toUpperCase(data) {
      return data.toUpperCase();
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
	width: 33%;

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
		width: 33%;
		font-size: 14px;
		color: #666;
		padding: 18px 0;
		line-height: 1;
	}
}

.contscroll {
	max-height: 600px;
	overflow-y: scroll;
}
</style>