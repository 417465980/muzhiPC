<template>
	<div id="wallet">
		<div class="my-wallet">
			<p >拇指币余额：<span>{{mzAccount}}</span><router-link  to="/charge">立即充值</router-link></p>
		</div>
		<div class="my-gift-nav">
			<p>&nbsp;&nbsp;充值记录</p>
			
			<ul v-if="!!rows">
				<li><a href="javascript:;">充值订单号</a></li>
				<li><a href="javascript:;">充值金额</a></li>
				<li><a href="javascript:;">拇指币</a></li>
				<li><a href="javascript:;">充值时间</a></li>
			</ul>
		</div>
		<div class="my-gift-list" v-if="!!rows" v-for="(item, index) in rows" :key="index" >
			<ul>
				<li>{{item.thirPayId}}</li>
				<li>￥{{item.channelNo}}</li>
				<li>{{item.mzAmount}}</li>
				<li>{{item.time}}</li>
			</ul>
		</div>
		<div  class="my-gift-box"  v-if="!rows">
			<img src="static/images/5.png" class="center-img" alt="">
			<p class="g6 f16 tc mt20">暂无充值记录</p>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import { url, hint, userdata, token } from "../../common/js/general";
export default {
  data() {
    return {
      rows: [],
      mzAccount: userdata.mzAccount
    };
  },
  computed: {
    token() {
      return this.$store.state.token ? this.$store.state.token : token;
    },
    username() {
      return this.$store.state.userName.id
        ? this.$store.state.userName.name
        : userdata.name;
    }
  },
  mounted() {
    //查看充值记录

    let that = this;
    let paramsUrl = qs.stringify({
      username: that.username,
      token: that.token
    });
    axios
      .post(url + "/muzhiplat/pc2/user/findMyRecharge", paramsUrl)
      .then(function(res) {
        if (res.data.ret) {
          res.data.msg = "获取成功";
        }
        that.rows = res.data.rows;
        hint(that.$refs, res.data.msg);
      })
      .catch(function(res) {
        console.log(res);
      });
  }
};
</script>
<style scoped lang="stylus" >
.my-wallet {
	margin: 20px auto;
	color: #333;

	a {
		float: right;
		background: linear-gradient(left, #6461a5, #cf2878);
		background: -webkit-linear-gradient(left, #6461a5, #cf2878);
		background: url('../../assets/images/btn_bg.png') no-repeat center center \0;
		background-size: cover \0;
		color: #fff;
		dispaly: inline-block;
		padding: 10px 20px;
		border: 1px solid #999;
		border-radius: 6px;
		font-size: 14px;
	}

	span {
		font-size: 16px;
		color: #820c9b;
	}
}

#roll-box {
	width: 100%;
	position: relative;
	height: 400px;
	overflow: hidden;
}

#roll-content {
	position: absolute;
	top: 0;
	left: 0;
}

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

	p {
		font-size: 16px;
		color: #820c9b;
		text-align: left;
		line-height: 20px;
		vertical-align: top;
		margin-bottom: 20px;

		&:before {
			content: '';
			display: inline-block;
			width: 3px;
			height: 20px;
			background: #820c9b;
			vertical-align: top;
		}
	}
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