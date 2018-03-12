<template>
	<div class="gm_rank">
		<div class="rank_title">
			<i></i>
			<span>热门游戏榜</span>
		</div>
		<ul>
			<li v-for="(item,index) in rankList" @mouseover="rankShow(index)" @mouseout="rankHide(index)">
				<div class="showRankGm clearfix" v-if="index == isShow">
					<div class="rankGmIcon fl">
						<img :src="item.gmIcon" />
						<div>
							{{index+1}}<i></i><i></i>
						</div>
					</div>
					<div class="gmRank_tit fl">
						<p>{{item.title}}</p>
						<slot name="index" :type="item.type" :appSize="item.appSize"></slot>
					</div>
					<div class="rankGmBtn fr">
						<slot name="rankFigIcon"></slot>
					</div>
				</div>
				<div class="hotRank_tit" v-else>
					<div>
						{{index+1}}<i></i><i></i>
					</div>
					<span>{{item.title}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:{
			rankList:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				isShow:null
			}
		},
		methods:{
			rankShow(index){
				this.isShow = index
			},
			rankHide(index){
				this.isShow = null
			}
		}
	}
</script>
<style scoped>
	.gm_rank{margin-top: 10px;}
	.rank_title{height: 20px;line-height: 20px;display: flex;align-items: center;padding: 15px 0;border-bottom: 1px solid #f0f0f0;}
	.rank_title i{width: 3px;height: 20px;display: inline-block;background-color:#820c9b;margin-right: 10px;}
	.rank_title span{font-size: 20px;}
	.gm_rank .hotRank_tit,.gm_rank .showRankGm{border-bottom: 1px solid #f0f0f0;display: flex;align-items: center;}
	.gm_rank .hotRank_tit{height: 50px;}
	.gm_rank .hotRank_tit div,.gm_rank .showRankGm .rankGmIcon div{
		width: 20px;
	    height: 25px;
	    z-index: 2;
	    border: 1px solid #820c9b;
	    display: inline-block;
	    overflow: hidden;
	    border-bottom: none;
	    text-align: center;
	    font-size: 14px;
	}
	.gm_rank .hotRank_tit div{ position: relative;color:#820c9b;}
	.gm_rank .showRankGm .rankGmIcon div{position: absolute;top: 0;left:0;background-color:#820c9b;color: #fff;}
	.gm_rank .hotRank_tit div i,.gm_rank .showRankGm .rankGmIcon i{
		width: 0;
	    height: 0;
	    display: block;
	    position: absolute;
	    left: -10px;
	    top: 0;
	    z-index: 5;
	    border-top: 19px transparent dashed;
	    border-left: 20px transparent dashed;
	    border-right: 20px transparent dashed;
	    overflow: hidden;
	}
	
	.gm_rank ul .hotRank_tit i:first-child,.gm_rank .showRankGm .rankGmIcon i:first-child{border-bottom: 10px #820c9b solid;}
	.gm_rank ul .hotRank_tit i:last-child,.gm_rank .showRankGm .rankGmIcon i:last-child{top: 1px;border-bottom: 10px white solid;}
	.gm_rank .hotRank_tit span{margin-left: 15px;}
	.gm_rank .hotRank_tit span,.showRankGm .gmRank_tit p{font-size: 16px;color:#666666;}
	.gm_rank .showRankGm{height:75px;padding: 20px 0;}
	.gm_rank .showRankGm .rankGmIcon{width: 77px;height: 77px;display: flex;align-items: center;position: relative;margin-right: 15px;}
	.gm_rank .showRankGm .rankGmIcon img{height: auto;max-height: 100%;max-width: 100%;}
	.showRankGm .gmRank_tit{width:196px;}
	.showRankGm .gmRank_tit p{margin:2px 0 10px;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	.showRankGm .gmRank_tit span{font-size: 16px;color:#b6b6b6;}
	.showRankGm .rankGmBtn{ margin: 0 15px;}
	.showRankGm .rankGmBtn i{width: 28px; height: 28px;display: block;}
	.showRankGm .rankGmBtn .gmCenRrankIco{ background-position: -58px -10px;}
	.showRankGm .rankGmBtn .activeCenRrankIco{background-position: -10px -10px;} 
</style> 





