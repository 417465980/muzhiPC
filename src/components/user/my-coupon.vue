<template>
	<div id='coupon'>
		<div id="roll-box" ref="rollBox">
			<div id="roll-content" ref="rollContent" class="my-coupon-box">
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
	import {url,hint,token} from '../../common/js/general'
	export default{
		
		data(){
			return {
				info:{
					username:'pengqian',
					token,
					type:'1',
					page:'10',
					rows:'1',
				},
				rows:[]
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
			}

		},
		mounted(){
			//获取礼包
			let paramsUrl =  new URLSearchParams();
			let that = this;
			paramsUrl.append('username',that.info.username);
			paramsUrl.append('token',that.info.token);
			paramsUrl.append('type',that.info.type);
			paramsUrl.append('page',that.info.page);
			paramsUrl.append('rows',that.info.rows);

			axios.post(url+'/muzhiplat/pc2/user/findMyCoupon',paramsUrl).then(function(res){
				console.log(res.data)
				that.rows = res.data.rows
				hint(that.$refs,res.data.msg)
			}).catch(function(res){
				console.log(res)
			})
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