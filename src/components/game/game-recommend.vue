<template>
	<div class="gm_recomd">
		<div class="recomd_tit">
			<i class="icon_spri"></i>
			<span>精品游戏推荐</span>
		</div>
		<ul class="clearfix">
			<li v-for="(item,index) in recomdList"  @mouseover="showCode(index)" @mouseout="hideCode(index)" :key="index">
				<a href="#"><img :src="item.imgUrl" /></a>
				<div class="load" v-if="index == isShow">
					<div class="code">
						<img :src="item.wxCode">
					</div>
					<div class="title">
						<h3>{{item.title}}</h3>
						<p>{{item.describ}}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isShow:null,
				recomdList:[
					{
						imgUrl:require('../../assets/images/ddt.png'),
						wxCode:require('../../assets/images/wx.png'),
						title:'百战斗斗堂',
						describ:'角色扮演100M'
					},
					{
						imgUrl:require('../../assets/images/ddt.png'),
						wxCode:require('../../assets/images/wx.png'),
						title:'还珠格格',
						describ:'角色扮演100M'
					},
					{
						imgUrl:require('../../assets/images/ddt.png'),
						wxCode:require('../../assets/images/wx.png'),
						title:'倒霉熊',
						describ:'角色扮演100M'
					},
					{
						imgUrl:require('../../assets/images/ddt.png'),
						wxCode:require('../../assets/images/wx.png'),
						title:'官居一品',
						describ:'角色扮演100M'
					}
				]
			}
		},
		methods:{
			showCode(index){
				this.isShow = index
			},
			hideCode(index){
				this.isShow = null
			}
		}
	}
</script>
<style scoped>
	.gm_recomd{margin:30px 0;}
	.recomd_tit{display: flex;align-items: center;}
	.recomd_tit i{ width: 30px; height: 29px;display:block;background-position: -10px -63px;margin-right: 10px;}
	.recomd_tit span{font-size: 20px;}
	.gm_recomd ul li{float: left;width: 278px;height: 316px;margin-top: 12px;margin-right: 29px;position: relative;}
	.gm_recomd ul li:last-child{margin-right: 0 !important;}
	.gm_recomd .load{ color: #fff; position: absolute;bottom: 0; display: flex;align-items: center;justify-content: center;width: 100%;height: 100px;background: rgba(0,0,0,0.8);}
	.gm_recomd .load .code{width: 77px;flex: 0 0 77;margin-right: 10px;}
	.gm_recomd .load .title h3{line-height: 25px;}
	.gm_recomd .load .title p{line-height: 25px;color: #bcbcbf;}
	
</style>