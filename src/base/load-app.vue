<template>
	<div class="load_app">
		<div class="content clearfix">
			<div class="app_icon fl">
				<img src="../assets/images/mzapp.png" />
			</div>
			<div class="app_title fl">
				<p>拇指游戏宝APP</p>
				<span>最全拇指礼包领取平台</span>
				<a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk">
					<i class="gmCen_spri"></i>
					<span>下载</span>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
	.load_app{width: 308px;height: 93px;border: 1px solid #e9e9e9;padding: 20px 20px 10px;}
	.load_app .content{height: 95px;width: 100%;}
	.load_app .content .app_icon{width:95px;height: 95px;display: flex;justify-content: center;align-items: center;margin-right: 20px;}
	.load_app .content .app_icon img{height: auto;max-height: 100%;max-width: 100%;}
	.load_app .content .app_title{margin-top:5px;font-size: 0;}
	.load_app .content .app_title p{font-size: 16px;}
	.load_app .content .app_title > span{font-size:15px;color: #666666;line-height: 30px;}
	.load_app .content .app_title a{width:112px;height: 34px;display: block;font-size:16px;border-radius: 6px;color: #FFFFFF;display: flex;justify-content: center;
		align-items: center;
		background: -moz-linear-gradient(left,#6362a6,#d12878); 
		background: -o-linear-gradient(left,#6362a6,#d12878); 
		background: -webkit-gradient(linear,0 0,100% 100%,from(#6362a6), to(#d12878)); /*Old gradient for webkit*/
		background:-webkit-linear-gradient(left,#6362a6,#d12878);   /*new gradient for Webkit*/
		filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#6362a6, endColorstr=#d12878);/*IE<9>*/
		-ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=1, startColorstr=#6362a6, endColorstr=#d12878)";/*IE8+*/
	}
	.load_app .content .app_title a i{display: inline-block; background-position:-61px -101px;width: 16px; height: 16px;margin-right: 7px;}
	.app_title a span{line-height: 34px;}
</style>