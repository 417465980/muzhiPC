<template>
	<div>
		<div class="head gradient">
			<div class="content">
        
				<ul class="clearfix">
					
					<li class="muzhi fl">
						<router-link to="/index">
							<span class="middlespan" ></span>
							<i class="icon_spri"></i>
							<span>&nbsp;91muzhi |</span>
						</router-link>
					</li>
					<li class="mobile fl">
						<a href="http://game.91muzhi.com/m/" target="_blank">
							<span class="middlespan" ></span>
							<i class="icon_spri"></i>
							<span>手机版 |</span>
						</a>
					</li>
					<li class="mobile fl">
						<a href="http://game.91muzhi.com/yyb/pc/">
							<span class="middlespan" ></span>
							<i class="icon_spri"></i>
							<span>app</span>
						</a>
					</li>
          <li class="count fr" v-if="name">
						<span class="middlespan"  ></span>
						<router-link  to="/user" tag="span" >{{name}}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="signOut">退出</span>
					</li>
          
          <li class="count fr" v-else>
						<span  class="middlespan"></span>
						<i class="icon_spri"></i>
						<router-link  to="/login" tag="span">登录</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/register" tag="span">注册</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="nav">
			<router-link to="/index" class="log fl"></router-link>
			<div class="fl">
				<ul class="clearfix">
					<router-link to="/index" tag="li">首页</router-link>
					<router-link v-if="name" to="/user" tag="li">用户中心</router-link>
					<router-link v-else to="/login" tag="li">用户中心</router-link>
					<router-link to="/game" tag="li">游戏中心</router-link>
					<router-link to="/gift" tag="li">礼包中心</router-link>
					<router-link to="/charge" tag="li">充值中心</router-link>
					<router-link to="/active" tag="li">活动中心</router-link>
					<router-link to="/service" tag="li">客服中心</router-link>
				</ul>
			</div>
			<div class="search fr">
				<span class="middlespan"></span>
				<input type="text" @blur="defaultkeyword" @focus="clearkeyword" v-model="keyword" :placeholder="keyword">
				<router-link @click.native="nativeSearch" :to="{path:'/search/'+keyword}" tag="div" class="searchBtn"><i class="icon_spri"></i></router-link>
				<transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX" >
					<div class="searchArray" v-if="show">
						<p v-for="(item,index) in searchArray" v-if="index<5" :key="index" @click="chioceKey(item)">{{item}}</p>
						<span @click="show=false">×</span>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";
import { hint, url } from "../common/js/general";
export default {
  data() {
    return {
      keyword: "还珠格格",
      searchKeyword: [],
      show: false
    };
  },
  methods: {
    clearkeyword() {
      if (this.keyword == "还珠格格") {
        this.keyword = "";
      }
      if (!window.localStorage.getItem("searchKeyword")) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    defaultkeyword() {
      if (this.keyword == "") {
        this.keyword = "还珠格格";
      } else {
        var that = this;
        var searchKeyword = "";
        if (window.localStorage.getItem("searchKeyword")) {
          searchKeyword = window.localStorage
            .getItem("searchKeyword")
            .split(",");
          this.show = true;
        } else {
          searchKeyword = [];
          this.show = false;
        }
        setTimeout(() => {
          searchKeyword.unshift(that.keyword);
          searchKeyword = this.unique(searchKeyword).slice(0, 5);
          this.searchKeyword = this.unique(searchKeyword).slice(0, 5);
          window.localStorage.setItem(
            "searchKeyword",
            `${searchKeyword.toString()}`
          );
        }, 200);
      }
    },
    signOut() {
      localStorage.clear();
      this.$store.state.userdata = {
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
      var that = this;
      var ahref = window.location.href;
      if (ahref.indexOf("index") != -1) {
        // window.location.reload();
      } else if (ahref.indexOf("user") != -1) {
        // window.location.href = "#/login";
        this.$router.push("/login");
      } else {
        // window.location.href = "#/index";
        this.$router.push("/index");
      }
    },
    nativeSearch() {
      this.show = false;
    },
    unique(arr) {
      var i,
        obj = {},
        result = [],
        len = arr.length;
      for (i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
          //如果能查找到，证明数组元素重复了
          obj[arr[i]] = 1;
          result.push(arr[i]);
        }
      }
      return result;
    },
    chioceKey(item) {
      this.keyword = item;
      this.show = false;
    }
  },
  mounted() {
    if (!window.localStorage.getItem("searchKeyword")) {
      this.show = false;
    }
    if (this.token || this.checkUser != "") {
      this.changeStatus = false;
    } else {
      this.changeStatus = true;
    }
  },
  computed: {
    searchArray() {
      if (window.localStorage.getItem("searchKeyword")) {
        this.searchKeyword = window.localStorage
          .getItem("searchKeyword")
          .split(",");
      } else {
        this.searchKeyword = [];
      }
      return this.searchKeyword;
    },
    checkUser() {
      if (this.userdata.id) {
        return this.userdata.name;
      } else {
        return (this.changeStatus = true);
      }
    },
    ...mapGetters(["userName"]),
    name() {
      if (this.userdata.id) {
        return this.userdata.name;
      }
      return false;
    },
    ...mapState(["userdata", "token", "game"])
  }
};
</script>
<style scoped>
@import "../common/style/animate.css";
.head {
  width: 100%;
  height: 40px;
  background: url("../assets/images/head_bg.png") no-repeat center center;
  background-size: 100% 100%;
}
.head .content,
.nav {
  width: 1200px;
  margin: 0 auto;
}
.head ul li {
  height: 40px; /* display: flex;align-items: center; */
  color: #fff;
}
.head ul li a {
  color: #fff;
  font-size: 0;
  display: inline-block;
  height: 100%;
}
.head ul li a span {
  vertical-align: middle;
  font-size: 13px;
}
.head li.mobile {
  margin-left: 10px;
}
.head li.muzhi i {
  width: 19px;
  height: 15px;
  background-position: -48px -112px;
  display: inline-block;
  vertical-align: middle;
}
.head li.muzhi div {
  width: 58px;
  height: 13px;
  line-height: 13px;
  border-right: 1px solid #fff;
  display: inline-block;
  margin-left: 5px;
}
.head li.mobile i {
  width: 11px;
  height: 21px;
  display: inline-block;
  background-position: -168px -82px;
  margin-right: 5px;
  vertical-align: middle;
}
.head li.count i {
  width: 18px;
  height: 18px;
  background-position: -10px -112px;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
.count span {
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  vertical-align: middle;
}
.nav,
.nav ul li,
.nav .log {
  height: 93px;
}
.nav .log {
  margin-right: 10px;
  width: 150px;
  background: url("../assets/images/logo.png") no-repeat center center;
}
.nav ul li {
  float: left;
  cursor: pointer;
  width: 105px;
  text-align: center;
  line-height: 93px;
  font-size: 16px;
  color: #333;
  position: relative;
}
/*.nav ul li:not(:last-child):before{content: '';background-color: #dadada; height: 14px;width: 1px;position: absolute;right: 0;top: 50%;margin-top: -7px;transform: rotate(25deg);
			-ms-transform:rotate(25deg); -moz-transform:rotate(25deg);-webkit-transform:rotate(25deg); -o-transform:rotate(25deg);}*/
.nav ul li + li:before {
  content: "";
  background-color: #dadada;
  height: 14px;
  width: 1px;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -7px;
  transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
  -webkit-transform: rotate(25deg);
  -o-transform: rotate(25deg);
} /*选中除了第一个li的其他li*/
.nav ul .router-link-active {
  color: #820c9b;
}
.nav ul li:hover {
  color: #820c9b;
}
.nav .search {
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  display: block\0;
}
.nav input,
.nav .search .searchBtn {
  width: 45px;
}
.nav .search input {
  height: 30px;
  font-size: 12px;
  width: 165px;
  border-radius: 15px 0 0 15px;
  border: 1px solid #dadada;
  color: #a9a9a9;
  padding-left: 20px;
  vertical-align: middle;
}
.nav .search .searchBtn {
  height: 32px;
  border-radius: 0 15px 15px 0;
  background-color: #bb3679;
  display: inline-block;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
.nav .search .searchBtn i {
  display: block;
  width: 16px;
  height: 14px;
  background-position: -87px -112px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -7px;
}
.searchArray {
  position: absolute;
  top: 64px;
  left: 0;
  width: 212px;
  height: auto;
  border: 1px solid #dadada;
  border-radius: 6px;
  box-shadow: inset 0 0 2px #666;
  background: #fff;
  z-index: 99;
}
.searchArray p {
  height: auto;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  padding: 0 20px;
  cursor: pointer;
}
.searchArray p:hover {
  color: #820c9b;
  background: #dadada;
}
.searchArray p + p {
  border-top: 1px solid #dadada;
}
.searchArray span {
  position: absolute;
  right: -25px;
  top: 0px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #dadada;
  border-radius: 10px;
  font-size: 16px;
  color: #dadada;
  text-align: center;
  line-height: 17px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
