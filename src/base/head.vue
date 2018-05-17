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
					
					<router-link v-if="token" to="/user" tag="li">用户中心</router-link>
					<router-link v-else to="/login" tag="li">用户中心</router-link>
					<router-link to="/game" tag="li">游戏中心</router-link>
					<router-link to="/gift" tag="li">礼包中心</router-link>
					<router-link to="/charge" tag="li">充值中心</router-link>
					<router-link to="/active" tag="li">活动中心</router-link>
					<router-link to="/service" tag="li">客服中心</router-link>
				</ul>
			</div>
			<div class="search fr">
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

	import axios from 'axios';
	import {hint,url,userdata,token} from '../common/js/general';
	export default{
		data(){
			return {
				keyword:'还珠格格',
				userdata,
				token,
				searchKeyword:[],
				show:false
			}
		},
		methods:{
			clearkeyword(){
				if(this.keyword=='还珠格格'){
					this.keyword = "";
				}
				if(!window.localStorage.getItem('searchKeyword')){
					this.show =false
				}else{
					this.show = true
				}	
				
			},
			defaultkeyword(){
				
				if(this.keyword==''){
					this.keyword = '还珠格格';
				}else{
					var that = this;
					var searchKeyword="";
					if(window.localStorage.getItem('searchKeyword')){
						searchKeyword = window.localStorage.getItem('searchKeyword').split(',')
						this.show = true
					}else{
						searchKeyword = []
						this.show = false
					}
					setTimeout(()=>{
						searchKeyword.unshift(that.keyword)
						searchKeyword = this.unique(searchKeyword).slice(0,5)
						this.searchKeyword = this.unique(searchKeyword).slice(0,5)
						window.localStorage.setItem('searchKeyword',`${searchKeyword.toString()}`)
					},200)
				}
			},
			signOut(){
				localStorage.clear();
				var ahref =  window.location.href
				if(ahref.indexOf('index')!=-1){
					window.location.reload()
				}else if(ahref.indexOf('user')!=-1){
					window.location.href='/#/login'
				}else{
					window.location.href='/#/index'
				}
				 
			},
			nativeSearch(){
				this.show = false
			},
			unique (arr){
				var i,
				obj = {},
				result = [],
				len = arr.length;
				for(i = 0; i< arr.length; i++){
					if(!obj[arr[i]]){ //如果能查找到，证明数组元素重复了
						obj[arr[i]] = 1;
						result.push(arr[i]);
					}
				}
				return result;
			},
			chioceKey(item){
				this.keyword = item
				this.show =false
			}
		},
		mounted(){
			if(!window.localStorage.getItem('searchKeyword')){
				this.show =false
			}
		},
		computed:{
			searchArray(){
				if(window.localStorage.getItem('searchKeyword')){
					this.searchKeyword = window.localStorage.getItem('searchKeyword').split(',')
				}else{
					this.searchKeyword = []
				}
				return this.searchKeyword
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
	.count span {cursor: pointer;color:#fff;}
	.nav,.nav ul li,.nav .log{height: 93px;}
	.nav .log{margin-right: 10px;width: 150px;background: url('../assets/images/logo.png') no-repeat center center;}
	.nav ul li{float: left; cursor: pointer; width: 105px;text-align: center;line-height: 93px;font-size: 16px;color: #333;position: relative;}
	/*.nav ul li:not(:last-child):before{content: '';background-color: #dadada; height: 14px;width: 1px;position: absolute;right: 0;top: 50%;margin-top: -7px;transform: rotate(25deg);
			-ms-transform:rotate(25deg); -moz-transform:rotate(25deg);-webkit-transform:rotate(25deg); -o-transform:rotate(25deg);}*/
	.nav ul li+li:before{content: '';background-color: #dadada; height: 14px;width: 1px;position: absolute;left: 0;top: 50%;margin-top: -7px;transform: rotate(25deg);
			-ms-transform:rotate(25deg); -moz-transform:rotate(25deg);-webkit-transform:rotate(25deg); -o-transform:rotate(25deg);} /*选中除了第一个li的其他li*/
	.nav ul .router-link-active{color:#820c9b}
	.nav ul li:hover{color:#820c9b}
	.nav .search{font-size: 0; display: flex;align-items: center;justify-content: center; height:100%; position: relative;}
	.nav input,.nav .search .searchBtn{width: 45px;}
	.nav .search input{height: 30px; font-size: 12px; width: 165px; border-radius:15px 0 0 15px;border: 1px solid #dadada; color: #a9a9a9;padding-left: 20px;}
	.nav .search .searchBtn{height: 32px;border-radius:0 15px 15px 0;background-color: #bb3679;display: inline-block;position: relative;cursor: pointer;}
	.nav .search .searchBtn i{ display:block; width: 16px; height: 14px;background-position: -87px -112px;position: absolute;top:50%;left:50%;margin-left: -8px;margin-top: -7px; }
	.searchArray{position: absolute; top:64px;left:0; width:212px; height:auto;border:1px solid #dadada; border-radius: 6px; box-shadow: inset 0 0 2px #666;background:#fff;z-index:99;}
	.searchArray p{height:auto; line-height:30px; font-size:14px;color:#666;padding:0 20px;cursor: pointer;}
	.searchArray p:hover{
		color:#820c9b;
		background:#dadada;
	}
	.searchArray p+p{
		border-top :1px solid #dadada;
	}
	.searchArray span{
		position: absolute;
		right:-25px;
		top:0px;
		display: inline-block;
		width:20px;
		height:20px;
		border:1px solid #dadada;
		border-radius: 10px;
		font-size:16px;
		color:#dadada;
		text-align:center;
		line-height:17px;
		box-sizing: border-box;
		cursor: pointer;
	}
</style>
