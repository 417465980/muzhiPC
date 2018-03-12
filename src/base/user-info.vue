<template>
	<div class="login">
		
			<div class="login_top clearfix">
				<div class="avatars fl">
					<img src="../assets/images/user_icon.png" />
				</div>
				<a class="exit fr">退出</a>
				<div class="user_title fl">
					<div>
						<span>花卉</span>
						<img src="../assets/images/vip_1.png" />
					</div>
					<p>这个人很懒，什么也没留下,什么也没留下什么也没留下</p>
				</div>
			</div>
			<div class="login_botm">
				<ul class="clearfix">
					 <li class="gift">
					 	<i class="user_spri"></i>
					 	<p><a>礼包：</a><span>5</span></p>
					 </li>
					 <li class="lj">
					 	<i class="user_spri"></i>
					 	<p><a>礼劵：</a><span>10</span></p>
					 </li>
					 <li class="muzhi_money">
					 	<i class="user_spri"></i>
					 	<p><a>拇指币：</a><span>0</span></p>
					 </li>
				</ul>
			</div>
			<div class="play_gm">
				<div class="title">
					<i class="icon_spri"></i>
					<span>最近玩过的游戏</span>
				</div>
				<ul class="clearfix">
					<li>
						<a>
							<img src="../assets/images/gmIcon.png"/>
							<p>梦幻奇侠传</p>
						</a>
					</li>
					<li>
						<a>
							<img src="../assets/images/gmIcon.png"/>
							<p>梦幻奇侠传</p>
						</a>
					</li>
					<li>
						<a>
							<img src="../assets/images/gmIcon.png"/>
							<p>梦幻奇侠传</p>
						</a>
					</li>
					<li>
						<a>
							<img src="../assets/images/gmIcon.png"/>
							<p>梦幻奇侠传</p>
						</a>
					</li>
				</ul>
			</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.login{height:398px;width: 350px;border: 1px solid #e9e9e9;}
	 .login_top{height: 97px;margin:20px 20px 10px;}
	 .login_top .avatars{width:103px;height:97px;display: flex;align-items: center;justify-content: center;margin-right: 20px;}
	 .login_top .avatars img{max-width: 100%;height: auto;max-height: 100%;}
	 .login_top .exit{font-size: 15px;color: #666666;text-decoration: underline;}
	 .login_top .user_title div{display: flex;align-items: center;}
	 .login_top .user_title span{font-weight:bold;font-size: 16px;margin-right: 15px;}
	 .login_top .user_title p{color: #b0b0b0;font-size: 14px;margin-top: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:187px;}
	 .login_botm{border-bottom: 1px solid #e9e9e9;padding-bottom: 15px;}
	 .login_botm .lj{position: relative;}
	 .login_botm li{float: left;font-size: 16px;width: 33%;text-align: center;}
	 .login_botm li a{color: #746aa7;}
	 .login_botm li{color: #af2f7d;}
	 .login_botm .lj:before, .login_botm .lj:after{content:'';width:1px;height:25px;background-color: #ededed;position: absolute;top: 43%;margin-top: -12px;}
	 .login_botm .lj:before{left: 0;}
	 .login_botm .lj:after{right: 0;}
	 .login_botm li i{width: 78px;height: 78px;display: inline-block;margin-bottom: 3px;}
	 .login_botm .gift i{background-position:-10px -10px;}
	 .login_botm .lj i{background-position:-108px -10px;}
	 .login_botm .muzhi_money i{ background-position:-108px -108px;}
	 .play_gm{padding: 10px 20px 20px;box-sizing: border-box;-webkit-box-sizing: border-box;-o-box-sizing: border-box;-ms-box-sizing: border-box;-moz-box-sizing: border-box;}
	.play_gm .title span{font-size: 16px;}
	.play_gm ul li{float: left;text-align: center;width: 65px;margin-right: 16px;}
	.play_gm ul li:last-child{margin-right: 0 !important;}
	.play_gm ul li img{height: 65px;margin: 12px 0 5px;}
	.play_gm ul li p{font-size: 12px;color:#666666;}
	
</style>






















