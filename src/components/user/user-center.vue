<template>
	<div id="user">
		<user-info :gift="newmsg"></user-info>
		<div class="user-warp max-width">
			<div class="user-main-left">
				<ul class="user-main-left-box">
					<router-link v-for="(item,index) in navMsg" class="hoverie9"  :key="index" :to="{path:item.path}" @click.native="newmsg=index"  tag="li">{{item.msg}}<span></span></router-link>
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
				active:true,
				navMsg:[{
						path:'account',
						msg:'账号信息'
					},{
						path:'myGame',
						msg:'我的游戏'
					},{
						path:'myGift',
						msg:'我的礼包'
					},{
						path:'myCoupon',
						msg:'我的礼券'
					},{
						path:'myWallet',
						msg:'我的钱包'
					},
				],
				newmsg:''
			}
		},
		components:{
			UserInfo,
		},
		
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
				cursor pointer 
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