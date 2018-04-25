<template>
	<div>
		<div class="head gradient">
			<div class="content">
				<ul class="clearfix">
					<a href="#">
						<li class="muzhi fl">
							<i class="icon_spri"></i>
							<div>91muzhi</div>
						</li>
					</a>
					<a href="#">
						<li class="mobile fl">
							<i class="icon_spri"></i>
							<span>手机版</span>
						</li>
					</a>
					<li class="count fr" v-if="!userdata.name">
						<i class="icon_spri"></i>

						<router-link  to="/login" tag="span">登录</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/register" tag="span">注册</router-link>
					</li>
					<li class="count fr" v-else>
						<router-link  to="/user" tag="span">{{userdata.name}}</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="signOut">退出</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="nav">
			<router-link to="/index" class="log fl"></router-link>
			<div class="fl">
				<ul class="clearfix">
					<router-link to="/index" tag="li">首页</router-link>
					<router-link to="/user" tag="li">用户中心</router-link>
					<router-link to="/game" tag="li">游戏中心</router-link>
					<router-link to="/gift" tag="li">礼包中心</router-link>
					<router-link to="/charge" tag="li">充值中心</router-link>
					<router-link to="/active" tag="li">活动中心</router-link>
					<router-link to="/service" tag="li">客服中心</router-link>
				</ul>
			</div>
			<div class="search fr">
				<input type="text" @blur="defaultkeyword" @focus="clearkeyword" v-model="keyword" :placeholder="keyword">
				<router-link :to="{path:'/search/'+keyword}" tag="div" class="searchBtn"><i class="icon_spri"></i></router-link>

			</div>
		</div>
	</div>
</template>
<script>

	import axios from 'axios';
	import {hint,url,userdata} from '../common/js/general';
	export default{

		data(){
			return {
				keyword:'还珠格格',
				userdata
			}
		},
		methods:{
			clearkeyword(){
				if(this.keyword=='还珠格格'){
					this.keyword = "";
				}
			},
			defaultkeyword(){
				if(this.keyword==''){
					this.keyword = '还珠格格';
				}
			},
			signOut(){
				 localStorage.clear();
				 window.location.reload()
			}
		}
	}
</script>
<style scoped>
	.head{width: 100%;height: 40px;}
	.head .content,.nav{width: 1200px;margin: 0 auto;}
	.head ul li{height: 40px;color: #fff;font-size: 13px;display: flex;align-items: center;}
	.head li.muzhi,.head li.mobile{width: 87px;}
	.head li.mobile{margin-left: 10px;}
	.head li.muzhi i{width: 19px; height: 15px;background-position: -48px -112px;display: inline-block;}
	.head li.muzhi div{width: 58px;height: 13px;line-height: 13px; border-right:1px solid #fff;display: inline-block;margin-left: 5px;}
	.head li.mobile i{width: 11px; height: 21px;display: inline-block; background-position: -168px -82px;margin-right:5px;}
	.head li.count i{width: 18px; height: 18px;background-position: -10px -112px;display: inline-block;margin-right: 5px;}
	.count span {cursor: pointer;}
	.nav,.nav ul li,.nav .log{height: 93px;}
	.nav .log{margin-right: 10px; width: 150px;background: url('../assets/images/logo.png') no-repeat center center;}
	.nav ul li{float: left;width: 105px;text-align: center;line-height: 93px;font-size: 16px;color: #666666;position: relative;}
	/*.nav ul li:not(:last-child):before{content: '';background-color: #dadada; height: 14px;width: 1px;position: absolute;right: 0;top: 50%;margin-top: -7px;transform: rotate(25deg);
			-ms-transform:rotate(25deg); -moz-transform:rotate(25deg);-webkit-transform:rotate(25deg); -o-transform:rotate(25deg);}*/
	.nav ul li+li:before{content: '';background-color: #dadada; height: 14px;width: 1px;position: absolute;left: 0;top: 50%;margin-top: -7px;transform: rotate(25deg);
			-ms-transform:rotate(25deg); -moz-transform:rotate(25deg);-webkit-transform:rotate(25deg); -o-transform:rotate(25deg);} /*选中除了第一个li的其他li*/
	.nav ul .router-link-active{color:#820c9b}
	
	.nav .search{font-size: 0; display: flex;align-items: center;justify-content: center; height:100%;}
	.nav input,.nav .search .searchBtn{width: 45px;}
	.nav .search input{height: 30px; font-size: 10px; width: 165px; border-radius:15px 0 0 15px;border: 1px solid #dadada; color: #a9a9a9;padding-left: 20px;}
	.nav .search .searchBtn{height: 34px;border-radius:0 15px 15px 0;background-color: #bb3679;display: inline-block;position: relative;cursor: pointer;}
	.nav .search .searchBtn i{ display:block; width: 16px; height: 14px;background-position: -87px -112px;position: absolute;top:50%;left:50%;margin-left: -8px;margin-top: -7px; }
</style>