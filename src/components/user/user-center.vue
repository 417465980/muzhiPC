<template>
	<div id="user">
		<user-info></user-info>
		<div class="user-warp max-width">
			<div class="user-main-left">
				<ul class="user-main-left-box">
					<router-link to="/user/account " tag="li">账号信息<span :class="{active:true}"></span></router-link>
					<router-link to="/user/myGame" tag="li">我的游戏<span></span></router-link>
					<router-link to="/user/myGift" tag="li">我的礼包<span></span></router-link>
					<router-link to="/user/myCoupon" tag="li">我的礼券<span></span></router-link>
					<router-link to="/user/myWallet" tag="li">我的钱包<span></span></router-link>
				</ul>
			</div>
			<div class="user-main-right">
				
				<router-view></router-view>
				
			</div>
		</div>
	</div>
</template>
<script>
	import UserInfo from './user-info'
	export default{
		data(){
			return {
				active:true
			}
		},
		components:{
			UserInfo,
			
		},
		data(){
			return {

			}
		}
	}	
</script>
<style scoped lang="stylus">
	#user 
		padding-bottom 70px
	.user-main-left
		float:left;
		width:400px;
		.user-main-left-box
			width:313px;
			li
				padding 20px;
				line-height:1;
				text-align:center;
				font-size:14px;
				color:#666;
				border-top:1px solid #e9e9e9;
				position relative
				
			li:last-child
				border-bottom:1px solid #e9e9e9;
			.router-link-active
				background: linear-gradient(left,#6461a5,#cf2878);
				background: -webkit-linear-gradient(left,#6461a5,#cf2878);
				color #fff
				span 
					position absolute
					top 26px
					right 45px
					margin 0 auto
					width 26px
					height 2px
					background  rgba(255,255,255,.4)
	.user-main-right
		margin-left:400px;
		margin-top:60px;
		width:auto;
		min-height:354px;
				

</style>