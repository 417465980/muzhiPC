<template>
	<div id='coupon'>
		<div  class="my-coupon-box">
			<div class="nav-coupon">
				<ul>
					<li v-for="(item,index) in coupon" :key="index" @click="couponTab(index)" ref="item" :class="{active:!index}">{{item.content}}</li>
				</ul>
			</div>
			<div class="">
				<div v-for="(itemcont,index) in couponlist" :key="index" ref="itemcont" :class="{'coupon-list':true, 'coupon-active':index=='acct'}">
					
					<ul v-if="!!itemcont.length">
						<li v-for="(item,i) in itemcont" :key="i">
							<p :class="{ canuse:index=='acct', cantuse:index == 'cantuse'||index == 'perms',  'coupon-sum':true}">￥{{item.rebate_num}}</p>
							<div class="coupon-content">
								<p :class="{f16:'true', g3:'true', ellipsis:'true', permswidth:index == 'cantuse'||index == 'perms'}">{{item.remark}}</p>
								<p class="f14 g9 " v-if="index=='acct'">有效期：{{item.start_date|dateformat}}-{{item.end_date|dateformat}}</p>
								<p class="f14 g9 " v-if="index == 'cantuse'||index == 'perms'">{{item.start_date|dateformat}}-{{item.end_date|dateformat}}</p>
								<a v-if="index=='acct'" href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk">下载app使用</a>
								<div v-if="index=='perms'" class="perms" href="javascript:;">已使用</div>
								<div v-if="index=='cantuse'" class="perms" href="javascript:;">已失效</div>
							</div>
						</li>
					</ul> 
					<div v-else >
						<img class="center-img" src="static/images/4.png">
						<p  class="g6 f16 tc mt20">暂无礼券</p>
					</div>
				</div>
			</div>
		</div>
		
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { url, hint } from "../../common/js/general";
import { mapState } from "vuex";
export default {
  data() {
    return {
      info: {
        type: "3",
        page: "10",
        rows: "1"
      },
      rows: [
        {
          coupon_no: 2017002,
          coupon_name: "25拇指币优惠券",
          start_date: "2017-12-01",
          end_date: "2017-12-08",
          remark: "充值满200元 赠送25拇指币",
          cue_date: 0,
          rebate_type: 2,
          rebate_num: "25",
          use_rule: 2,
          coupon_count: 0
        }
      ],
      selected: "1",
      coupon: [
        {
          name: "canuse",
          content: "可使用"
        },
        {
          name: "alreadyuse",
          content: "已使用"
        },
        {
          name: "cantuse",
          content: "已失效"
        }
      ],
      couponlist: {
        acct: [],
        perms: [],
        cantuse: []
      }
    };
  },
  computed: {
    ...mapState(["userdata", "token"])
  },
  methods: {
    getCoupon3() {
      let that = this;
      let paramsUrl = qs.stringify({
        username: that.userdata.name,
        flag: 3,
        amount: 100
      });

      return axios.post(
        "http://gm.91muzhi.com:8088/muzhi/coupon_manage/getCoupon.do",
        paramsUrl
      );
    },
    getCoupon4() {
      let that = this;
      let paramsUrl = qs.stringify({
        username: that.userdata.name,
        flag: 4,
        amount: 0
      });

      return axios.post(
        "http://gm.91muzhi.com:8088/muzhi/coupon_manage/getCoupon.do",
        paramsUrl
      );
    },
    getCoupon5() {
      let that = this;
      let paramsUrl = qs.stringify({
        username: that.userdata.name,
        flag: 5,
        amount: 0
      });

      return axios.post(
        "http://gm.91muzhi.com:8088/muzhi/coupon_manage/getCoupon.do",
        paramsUrl
      );
    },
    couponTab(index) {
      for (var i in this.$refs.item) {
        this.$refs.item[i].className = "";
      }
      this.$refs.item[index].className += " active";
      for (var i in this.$refs.itemcont) {
        this.$refs.itemcont[i].className = "coupon-list";
      }
      this.$refs.itemcont[index].className += " coupon-active";
    },
    acct(acct) {
      if (acct.data.length) {
        this.couponlist.acct = acct.data;
      }
    }
  },
  mounted() {
    //获取礼包

    var that = this;
    axios.all([this.getCoupon3(), this.getCoupon4(), this.getCoupon5()]).then(
      axios.spread(function(acct, perms, cantuse) {
        that.acct(acct);
        that.acct(perms);
        that.acct(cantuse);
      })
    );
  },
  filters: {
    dateformat(val) {
      return val.split("-").join(".");
    }
  }
};
</script>
<style scoped lang="stylus" >
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

.nav-coupon {
	width: 800px;
	height: 40px;
	border-bottom: 1px solid #af2f7d;

	ul {
		width: 540px;
		height: 40px;
		margin: 0 auto;

		.active {
			border-bottom: 2px solid #af2f7d;
			color: #af2f7d;
		}

		li {
			display: inline-block;
			width: 84px;
			height: 100%;
			margin: 0 40px;
			text-align: center;
			box-sizing: border-box;
			cursor: pointer;
		}
	}
}

.coupon-content {
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	height: 131px;
	margin-left: 145px;
}

.coupon-list {
	display: none;
}

.perms {
	position: absolute;
	right: 10px;
	top: 36px;
	width: 60px;
	height: 60px;
	border: 1px solid #999;
	border-radius: 30px;
	font-size: 14px;
	color: #999;
	text-align: center;
	line-height: 60px;
	transform: rotate(45deg);
}

.permswidth {
	width: 140px;
}

.coupon-list li {
	display: inline-block;
	width: 370px;
	height: 131px;
	border: 1px solid #e6e6e6;
	border-left: none;
	margin-top: 40px;
}

.coupon-list li:nth-of-type(2n) {
	margin-left: 52px;
}

.coupon-sum {
	float: left;
	width: 131px;
	height: 131px;
	font-size: 30px;
	color: #fff;
	text-align: center;
	line-height: 131px;
	font-weight: bold;
}

.canuse {
	background-image: url('../../assets/images/canuse.png');
	background-repeat: no-repeat;
	background-position: center center;
}

.cantuse {
	background-image: url('../../assets/images/cantuse.png');
	background-repeat: no-repeat;
	background-position: center center;
}

.coupon-content {
	p {
		line-height: 30px;
	}

	a {
		display: inline-block;
		padding: 8px 10px;
		border: 1px solid #73468f;
		border-radius: 6px;
		font-size: 12px;
		color: #73468f;
	}
}

.coupon-active {
	display: block;
}
</style>
