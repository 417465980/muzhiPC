<template>
	<div class="topBorder news-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<game-rank></game-rank>
				<div class="newsHotActive">
					<hot-active>
						<img slot="index" slot-scope="props" class="end_icon fr" src="../assets/images/endIcon.png" />
					</hot-active>
				</div>
			</div>
			<div class="gmCen_right fr">
				<div class="clsifi_title">
					<div class="clsifi_icon">
						<i class="icon_spri"></i>
						<span>资讯专题</span>
					</div>
					<div class="type_wrap">
						<router-link :to="{path:'/news/'+item.path}" tag="div" class="clsifi_type clearfix"  v-for="(item,index) in newTypeFields" :key="index" @click.native="selectNews(index)">
							<a class="fl hoveraction">
								{{item.type}}
								<b v-show="newCurIndex === index"><i></i><i></i></b>
							</a>
							<div class="clsifi_arrow fl">
								<div>
									<i></i>
									<i></i>
								</div>
							</div>
						</router-link>
					</div>
				</div>
				<keep-alive>
					<router-view/>
				</keep-alive>
			</div>
		</div>
	</div>
</template>
<script>
	import GameRank from 'base/game-rank'
	import HotActive from 'base/hot-active'
	export default{
		components:{
			GameRank,
			HotActive
		},
		data(){
			return{
				newTypeFields:[
					{
						type:'全部',
						path:'all'
					},
					{
						type:'热门资讯',
						path:'hot'
					},
					{
						type:'游戏测评',
						path:'measure'
					},
					{
						type:'游戏攻略',
						path:'strategy'
					},
					{
						type:'游戏公告',
						path:'announce'
					}
				],
				newCurIndex:0
			}
		},
		methods:{
			selectNews(index){
			 	this.newCurIndex = index
			 }
		}
	}
</script>
<style scoped>
	.news-center .gmCen_right{width:810px;padding:15px 0 0 40px;}
	.news-center .clsifi_title .clsifi_icon i{width: 32px; height: 32px;display:block;background-position:-65px -10px;margin-right: 10px;}
</style>