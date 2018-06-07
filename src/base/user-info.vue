<template>
	<div class="login" >
		<div class="login_top clearfix">
			<div class="avatars fl">
				
				<img v-if="user.mUserIcon" :src="user.mUserIcon|addHttp" />
				<img v-else src="../assets/images/user_icon.png" />
			</div>
			<a href="javascript:;" class="exit fr " @click="signOut">退出</a>
			<div class="user_title fl">
				<div>
					<span v-if="user.nickName!='undefined'">{{user.nickName}}</span>
					<router-link to="/user/account" tag="span" v-else>请设置你的昵称</router-link>
					<img v-if="user.level" :src="'static/images/vip_'+user.level+'.png'" />
					<img v-else src="static/images/vip_0.png" />
				</div>
				<p v-if="user.signature" :title="user.signature">{{user.signature}}</p>
				<p v-else>这个人很懒，什么也没留下</p>
			</div>
		</div>
		<div class="login_botm">
			<ul class="clearfix">
				<li>
				<router-link to="/user/myGift" class="gift">
					<i class="user_spri"></i>
					<p><a href="javascript:;">礼包：</a><span>{{user.giftSum}}</span></p>
				</router-link>
				</li>
				<li>
				<router-link to="/user/myCoupon" class="lj">
					<i class="user_spri"></i>
					<p><a href="javascript:;">礼劵：</a><span>{{user.couponSum}}</span></p>
				</router-link>
				</li>
				<li>
				<router-link to="/user/myWallet" class="muzhi_money">
					<i class="user_spri"></i>
					<p><a href="javascript:;">拇指币：</a><span>{{user.mzAccount}}</span></p>
				</router-link>
				</li>
			</ul>
		</div>
		<div class="play_gm">

			<div class="title">
				<span class="middlespan"></span>
				<i class="icon_spri"></i>
				<span>最近玩过的游戏</span>
			</div>
			<ul class="clearfix">
				<li v-for="(item,index) in game" :key="index" v-if="index<4">
					<router-link :to="'game/'+item.id" >
						<img :title="item.name" :src="item.icon|addHttp" >
						<p :title="item.name" class="hoveraction">{{item.name}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { url, userdata, token } from "common/js/general";
export default {
  data() {
    return {
      //userdata: this.$store.state.userName || userdata,
      game: [],
      userdata,
      token
    };
  },
  created() {
    this._getUserInfo();
  },
  filters: {
    addHttp(data) {
      return url + data;
    }
  },
  methods: {
    _getUserInfo() {
      this.game = JSON.parse(window.localStorage.getItem("game"));
    },
    signOut() {
      localStorage.clear();
      this.$store.state.userName = {
        accountId: null,
        auth: null,
        backgroundImg: null,
        bindstatus: null,
        birthDay: null,
        certificationStatus: null,
        consignee: null,
        contactNo: null,
        couponSum: null,
        email: null,
        gender: null,
        giftSum: null,
        goldAccount: null,
        id: null,
        identityCard: null,
        level: null,
        mUserIcon: null,
        mzAccount: null,
        name: null,
        nickName: null,
        onlyAccount: null,
        phoneNum: null,
        point: null,
        psd: null,
        qq: null,
        realName: null,
        receivedAddress: null,
        recentLoginAddr: null,
        recentLoginIp: null,
        recentLoginTime: null,
        signInToday: null,
        signInWhatDay: null,
        signature: null,
        upgradePoint: null,
        wx: null
      };

      this.$store.state.token = "";
      this.$store.state.game = [];
      window.localStorage.setItem(
        "userdata",
        JSON.stringify(this.$store.state.userName)
      );
      window.localStorage.setItem(
        "token",
        JSON.stringify(this.$store.state.token)
      );
      window.localStorage.setItem("game", "[]");
      this.$emit("userExit");
    }
  },
  computed: {
    user() {
      return this.$store.state.userName.id
        ? this.$store.state.userName
        : this.userdata;
    }
  }
};
</script>
<style scoped>
.login {
  height: 398px;
  width: 350px;
  border: 1px solid #e9e9e9;
}
.login_top {
  height: 97px;
  margin: 20px 20px 10px;
}
.login_top .avatars {
  width: 103px;
  height: 97px;
  overflow: hidden;
  margin-right: 10px;
}
.avatars img {
  max-height: 100%;
  width: auto;
  max-width: none;
}
.login_top .exit {
  font-size: 15px;
  color: #666666;
  text-decoration: underline;
}
.exit:hover {
  color: #820c9b;
}
.login_top .user_title div {
  display: flex;
  align-items: center;
}
.login_top .user_title span {
  margin-right: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #820c9b;
  display: block;
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user_title {
  margin-top: 10px;
}
.login_top .user_title img {
  width: 68px;
}
.login_top .user_title p {
  color: #b0b0b0;
  font-size: 14px;
  margin-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 187px;
}
.login_botm {
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
}
.login_botm .lj {
  position: relative;
}
.login_botm li {
  float: left;
  font-size: 16px;
  width: 33%;
  text-align: center;
}
.login_botm li a {
  color: #746aa7;
}
.login_botm li {
  color: #af2f7d;
}
.login_botm .lj:before {
  content: "";
  width: 1px;
  height: 25px;
  background-color: #ededed;
  position: absolute;
  /* top: 43%; */
  margin-top: 27px;
}

.login_botm .lj:after {
  content: "";
  width: 1px;
  height: 25px;
  background-color: #ededed;
  position: absolute;
  /* top: 43%; */
  margin-top: -80px;
}
.login_botm .lj:before {
  left: -18px;
}
.login_botm .lj:after {
  right: -58px;
}
.login_botm li i {
  width: 78px;
  height: 78px;
  display: inline-block;
  margin-bottom: 3px;
}
.login_botm .gift i {
  background-position: -10px -10px;
}
.login_botm .lj i {
  background-position: -108px -10px;
}
.login_botm .muzhi_money i {
  background-position: -108px -108px;
}
.play_gm {
  padding: 10px 20px 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.play_gm .title span {
  font-size: 16px;
  vertical-align: middle;
}
.play_gm ul li {
  float: left;
  text-align: center;
  width: 65px;
  margin-right: 16px;
}
.play_gm ul li:last-child {
  margin-right: 0 !important;
}
.play_gm ul li img {
  height: 65px;
  margin: 12px 0 5px;
}
.play_gm ul li p {
  font-size: 12px;
  color: #666666;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>






















