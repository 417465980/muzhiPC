<template>
	<div id="wallet">
		<div class="my-wallet">
			<p>拇指币余额：<span>100</span><a href="javascript:;">立即充值</a></p>
		</div>
		<div class="my-gift-nav">
			<p>&nbsp;&nbsp;充值记录</p>
			<ul>
				<li><a href="javascript:;">充值订单号</a></li>
				<li><a href="javascript:;">充值金额</a></li>
				<li><a href="javascript:;">拇指币</a></li>
				<li><a href="javascript:;">充值时间</a></li>
			</ul>
		</div>
		<div id="roll-box" ref="rollBox">
			<div id="roll-content" ref="rollContent" class="my-gift-box">
				<div class="my-gift-list">
					<ul>
						<li>23000000232320124515</li>
						<li>￥30</li>
						<li>30</li>
						<li>2017-12-14</li>
					</ul>
				</div>
				<div class="my-gift-list">
					<ul>
						<li>23000000232320124515</li>
						<li>￥30</li>
						<li>30</li>
						<li>2017-12-14</li>
					</ul>
				</div>
				<div class="my-gift-list">
					<ul>
						<li>23000000232320124515</li>
						<li>￥30</li>
						<li>30</li>
						<li>2017-12-14</li>
					</ul>
				</div>
			</div>
			<div id="boxout" ref="boxout" class="boxout">
				<span ref="rollspan" @mousedown = 'rollspan' ></span>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import {url,hint} from '../../common/js/general'
	export default{
		
		data(){
			return {
				info:{
					username:'pengqian',
					token:'d8e2b1af431a0b376fd389c46dbfdb24'
				},
				rows:[]
			}
		},
		methods:{
			//滚动条
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
			//滚动条事件
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
			}

		},
		mounted(){
			//查看充值记录
			let paramsUrl =  new URLSearchParams();
			let that = this;
			paramsUrl.append('username',that.info.username);
			paramsUrl.append('token',that.info.token);
			axios.post(url+'/muzhiplat/pc2/user/findMyRecharge',paramsUrl).then(function(res){
				console.log(res.data)
				that.rows = res.data.rows
				hint(that.$refs,res.data.msg)
			}).catch(function(res){
				console.log(res)
			})

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
				if(parseInt(getComputedStyle(ele.rollContent,false)['height'])<parseInt(getComputedStyle(ele.rollBox,false)['height'])){
					ele.boxout.style.display = "none"
				}
			})
		}
	}	
</script>
<style scoped lang="stylus" >
	.my-wallet
		margin:20px auto
		color #333
		a 
			float right
			background linear-gradient(left, #6461a5, #cf2878) 
			background -webkit-linear-gradient(left, #6461a5, #cf2878) 
			color #fff 
			dispaly inline-block 
			padding 10px 20px 
			border 1px solid #999 
			border-radius 6px 
			font-size 14px 
		span 
			font-size 16px
			color #820c9b
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
		p
			font-size 16px
			color #820c9b
			text-align left
			line-height 20px
			vertical-align top
			margin-bottom 20px
			&:before
				content:''
				display inline-block
				width 3px
				height 20px
				background #820c9b
				vertical-align top
	.my-gift-nav li
		display inline-block
		width 25%
		a 
			display inline-block
			width 98px
			height 28px
			border:1px solid #820c9b
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
			

</style>