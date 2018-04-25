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
					<div v-for="(itemcont,index) in couponlist" :key="index" ref="itemcont" :class="{'coupon-list':true, 'coupon-active':index=='acct'}">
						<ul>
							<li v-for="(item,i) in itemcont" :key="i">
								<p :class="{ canuse:index=='acct', cantuse:index == 'cantuse'||index == 'perms',  'coupon-sum':true}">￥{{item.rebate_num}}</p>
								<div class="coupon-content">
									<p :class="{f16:'true', g3:'true', ellipsis:'true', permswidth:index == 'cantuse'||index == 'perms'}">{{item.remark}}</p>
									<p class="f14 g9 " v-if="index=='acct'">有效期：{{item.start_date|dateformat}}-{{item.start_date|dateformat}}</p>
									<p class="f14 g9 " v-if="index == 'cantuse'||index == 'perms'">{{item.start_date|dateformat}}-{{item.start_date|dateformat}}</p>
									<a v-if="index=='acct'" href="javascript:;">下载app使用</a>
									<div v-if="index=='perms'" class="perms" href="javascript:;">已使用</div>
									<div v-if="index=='cantuse'" class="perms" href="javascript:;">已失效</div>
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
	import {url,hint,token,userdata} from '../../common/js/general'
	export default{
		data(){
			return {
				info:{
					username:userdata.name,
					token,
					type:'3',
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
					}
				],
				selected: '1',
				coupon:[{
					name:'canuse',
					content:'可使用'
				},{
					name:'alreadyuse',
					content:'已使用'
				},{
					name:'cantuse',
					content:'已失效'
				}],
				couponlist:{
					acct:[],
					perms:[],
					cantuse:[]
				}
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
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl)
			},
			getCoupon4(){
				let paramsUrl =  new URLSearchParams();
				let that = this;
				paramsUrl.append('username',that.info.username);
				paramsUrl.append('token',that.info.token);
				paramsUrl.append('type',4);
				paramsUrl.append('page',that.info.page);
				paramsUrl.append('rows',that.info.rows);
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl)
			},
			getCoupon5(){
				let paramsUrl =  new URLSearchParams();
				let that = this;
				paramsUrl.append('username',that.info.username);
				paramsUrl.append('token',that.info.token);
				paramsUrl.append('type',5);
				paramsUrl.append('page',that.info.page);
				paramsUrl.append('rows',that.info.rows);
				return axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl)
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
			var that = this ;
			axios.all([this.getCoupon3(),this.getCoupon4(),this.getCoupon5()]).then(axios.spread(function(acct,perms,cantuse){
				that.couponlist.acct = acct.data.rows
				that.couponlist.perms = perms.data.rows
				that.couponlist.cantuse = cantuse.data.rows
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
		},
		filters:{
			dateformat(val){
				return val.split('-').join('.')
			}
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
		position relative
		display flex
		align-items flex-start
		justify-content center
		flex-direction column
		height 131px
		margin-left 145px
	.coupon-list
		display none
	.perms
		position absolute
		right 10px 
		top 36px 
		width 60px
		height 60px
		border 1px solid #999
		border-radius  30px
		font-size  14px
		color #999
		text-align center
		line-height 60px
		transform rotate(45deg)
	.permswidth
		width 140px 

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
	.cantuse
		background-image url('../../assets/images/cantuse.png')
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