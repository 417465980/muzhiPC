<template>
	<div id='coupon'>
		<div id="roll-box" ref="rollBox">
			<div id="roll-content" ref="rollContent" class="my-coupon-box">
				<div class="nav-coupon">
					<ul>
						<li v-for="(item,index) in coupon" :key="index" @click="couponTab(index)" ref="item" :class="{active:!index}">{{item.content}}</li>
					</ul>
				</div>
				<div class="">
					<div v-for="(itemcont,index) in coupon" :key="index" ref="itemcont" :class="{'coupon-list':true, 'coupon-active':!index}">
						<ul>
							<li v-for="(item,index) in rows" :key="index">
								<p class="canuse coupon-sum  ">￥{{item.rebate_num}}</p>
								<div class="coupon-content">
									<p class="f16 g3 pt10">{{item.remark}}</p>
									<p class="f14 g9">有效期：{{item.start_data}}-{{item.end_data}}</p>
									<a href="javascript:;" class="mt10">下载app使用</a>
								</div>
							</li>
						</ul>
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
	import Vue from 'vue';
	import axios from 'axios';
	import { Navbar, TabItem } from 'mint-ui';
	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	import {url,hint,token,userdata} from '../../common/js/general'
	export default{
		data(){
			return {
				info:{
					username:userdata.name,
					token,
					type:'1',
					page:'10',
					rows:'1',
				},
				rows:[
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
					},{
						coupon_no: 2017003,
						coupon_name: "10%拇指币返利券",
						start_date: "2017-12-01",
						end_date: "2017-12-03",
						remark: "充值满300元 返利10%拇指币",
						cue_date: 0,
						rebate_type: 1,
						rebate_num: "10",
						use_rule: 2,
						coupon_count: 1
					},{
						coupon_no: 2017001,
						coupon_name: "5拇指币代金券",
						start_date: "2017-12-01",
						end_date: "2017-12-08",
						remark: "点击使用 增加5拇指币",
						cue_date: 0,
						rebate_type: 2,
						rebate_num: "5",
						use_rule: 1,
						coupon_count: 0
					}, {
						coupon_no: 2018002,
						coupon_name: "测试礼券",
						start_date: "2018-03-15",
						end_date: "2018-03-16",
						remark: "测试充值 充1块送1块",
						cue_date: 0,
						rebate_type: 2,
						rebate_num: "1",
						use_rule: 2,
						coupon_count: 0
					}
				],
				selected: '1',
				coupon:[{
					name:'alreadyuse',
					content:'已使用'
				},{
					name:'canuse',
					content:'未使用'
				},{
					name:'cantuse',
					content:'已失效'
				}]
				
			}
		},
		methods:{
			scrollDir(obj,fnEnd){
				if(obj.addEventListener){
					obj.addEventListener('DOMMouseScroll',fn , false)
				}
				obj.onmousewheel = fn;
				var b = true;
				function fn(ev){
					var ev = ev || event;
					
					if( ev.wheelDelta ){
						b=ev.wheelDelta>0?true:false;
						console.log(b)
					}else{
						b=ev.detail<0?true:false;	
					}
					if(fnEnd)fnEnd(b);
					
					if(obj!=document){
						if( ev.preventDefault ){
							ev.preventDefault();
						}
						return false;
					}
				}
			},
			rollspan(ev){
				ev = ev||event;
				let downY = ev.clientY-ev.target.offsetTop;	
				let ele = this.$refs
				document.onmousemove = function(ev){
					var ev = ev||event;
					var t = ev.clientY-downY;
					var pro = 0;
					if( t < 0){
						t=0;	
					}else if(t>ele.boxout.offsetHeight - ele.rollspan.offsetHeight){
						t = ele.boxout.offsetHeight - ele.rollspan.offsetHeight
					}
					ele.rollspan.style.top = t+'px';	
					
					pro = t/(ele.boxout.offsetHeight - ele.rollspan.offsetHeight);
					document.title = pro;
					ele.rollContent.style.top = (ele.rollBox.offsetHeight-ele.rollContent.offsetHeight)*pro+'px';
				}
				document.onmouseup = function(){
					document.onmousemove=document.onmouseup=null;	
				}
				return false;
			},
			getCoupon3(){
				let paramsUrl =  new URLSearchParams();
				let that = this;
				paramsUrl.append('username',that.info.username);
				paramsUrl.append('token',that.info.token);
				paramsUrl.append('type',3);
				paramsUrl.append('page',that.info.page);
				paramsUrl.append('rows',that.info.rows);
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl).then(function(res){
					console.log(res.data)
					that.rows = res.data.rows
					hint(that.$refs,res.data.msg)
				}).catch(function(res){
					console.log(res)
				})
			},
			getCoupon4(){
				let paramsUrl =  new URLSearchParams();
				let that = this;
				paramsUrl.append('username',that.info.username);
				paramsUrl.append('token',that.info.token);
				paramsUrl.append('type',4);
				paramsUrl.append('page',that.info.page);
				paramsUrl.append('rows',that.info.rows);
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl).then(function(res){
					console.log(res.data)
					that.rows = res.data.rows
					hint(that.$refs,res.data.msg)
				}).catch(function(res){
					console.log(res)
				})
			},
			getCoupon5(){
				let paramsUrl =  new URLSearchParams();
				let that = this;
				paramsUrl.append('username',that.info.username);
				paramsUrl.append('token',that.info.token);
				paramsUrl.append('type',5);
				paramsUrl.append('page',that.info.page);
				paramsUrl.append('rows',that.info.rows);
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl).then(function(res){
					console.log(res.data)
					that.rows = res.data.rows
					hint(that.$refs,res.data.msg)
				}).catch(function(res){
					console.log(res)
				})
			},
			couponTab(index){
				console.log(this.$refs)
				for(var i in this.$refs.item){
					this.$refs.item[i].className = ''
				}
				this.$refs.item[index].className +=' active'
				for(var i in this.$refs.itemcont){
					this.$refs.itemcont[i].className = 'coupon-list'
				}
				this.$refs.itemcont[index].className +=' coupon-active'
			}

		},
		mounted(){
			//获取礼包
		/* 	this.getCoupon3()//未使用
			this.getCoupon4()//已使用
			this.getCoupon5()//已失效 */
			axios.all([this.getCoupon3(),this.getCoupon4(),this.getCoupon5()]).then(axios.spread(function(acct,perms){
				console.log(acct.data)
				console.log(perms.data)
			}))
			//自定义滚动条
			this.$nextTick(() =>{
				let ele = this.$refs
				this.scrollDir(ele.rollContent, function(b){
					var a =0;
					var proB = 0;
					if(b){
						
						if(ele.rollContent.offsetTop<0 ){
							a+=30;
							ele.rollContent.style.top = ele.rollContent.offsetTop+a+'px';
						}
					}else{
						
						let iNow = ele.rollContent.offsetTop - (ele.rollBox.offsetHeight - ele.rollContent.offsetHeight)
						if(iNow>0){
							a-=30;
							ele.rollContent.style.top = ele.rollContent.offsetTop+a+'px';
						}
					}
					proB = (ele.rollContent.offsetTop)/(ele.rollBox.offsetHeight-ele.rollContent.offsetHeight);
					
					ele.rollspan.style.top = proB*(ele.boxout.offsetHeight - ele.rollspan.offsetHeight)+'px';
					
				})
				if(parseInt(ele.rollContent.style.height)<parseInt(ele.rollBox.style.height)){
					ele.boxout.style.display = "none"
				}
			})
		}
	}	
</script>
<style scoped lang="stylus" >
	#roll-box 
		width 100%
		position relative
		height 400px
		overflow hidden
		
	#roll-content 
		position absolute
		top 0
		left 0
		
	.boxout 
		width 6px
		height 100%
		position absolute
		top 0
		right 0
		background #ccc
		
	.boxout span 
		display block
		width 100%
		background rgba(0,0,0,.2)
		height 100px
		border-radius 3px
		position absolute
		top 0
		left 0
		cursor pointer
		
	.my-gift-box
		width 100%
	.my-gift-nav
		font-size 0
		text-align center
		margin-bottom 15px
	.my-gift-nav li
		display inline-block
		width 25%
		a 
			display inline-block
			width 98px
			height 28px
			border 1px solid #820c9b
			text-align center 
			margin 0 auto 
			font-size 16px
			color #820c9b
			line-height 28px
	.my-gift-list 
		font-size 0
		text-align center
		li
			display inline-block
			width 25%
			font-size 14px 
			color #666
			padding 18px 0
			line-height 1
			
	.nav-coupon
		width 800px
		height 40px
		border-bottom 1px solid #820c9b
		ul
			width 540px
			height 40px
			margin 0 auto
			.active
				border-bottom 2px solid #820c96
			li
				display inline-block
				width 84px
				height 100%
				margin 0 40px
				text-align center
				box-sizing border-box
				cursor pointer
	.coupon-content
		margin-left 145px
	
	.coupon-list
		display none
	
	.coupon-list li
		display inline-block
		width 370px 
		height 131px
		border 1px solid #e6e6e6
		border-left none
		margin-top 40px
	.coupon-list li:nth-of-type(2n)
		margin-left 52px
	.coupon-sum 		
		float left 
		width 131px
		height 131px
		font-size 30px
		color #fff
		text-align center 
		line-height 131px
		font-weight bold	
	.canuse 
		background-image url('../../assets/images/canuse.png')
		background-repeat no-repeat
		background-position center center 
		
	.coupon-content
		p
			line-height 30px
		a
			display inline-block
			padding 8px 10px
			border: 1px solid #73468f
			border-radius 6px 
			font-size 12px  
			color #73468f
	.coupon-active
		display block
</style>