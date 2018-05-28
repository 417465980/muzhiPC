<template>
	<div class="topBorder gift-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<load-app></load-app>
				<gift-rank></gift-rank>
			</div>
			<div class="gmCen_right fl">
				<div class="lbClsifiTit">
					<div class="clsifi_title">
						<div class="clsifi_icon">
							<i class="giftCen_icon"></i>
							<span>&nbsp;礼包分类</span>
						</div>
						<div class="type_wrap">
							<router-link :to="{path:item.path}" tag="div" class="clsifi_type clearfix"  v-for="(item,index) in giftTypeFields" :key="index" @click.native="selectGift(index)">
								<a class="fl hoveraction">
									{{item.type}}
									<b v-show="giftCurIndex === index"><i></i><i></i></b>
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
				</div>
				<div class="hotLbCont">
					<keep-alive>
						<router-view/>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import LoadApp from 'base/load-app'
	import GiftRank from 'base/gift-rank'
	
	export default{
		components:{
			LoadApp,
			GiftRank,
			
		},
		data(){
			return{
				giftTypeFields:[
					{
						type:'全部',
						path:'all'
					},
					{
						type:'热门礼包',
						path:'latest'
					},
					{
						type:'推荐礼包',
						path:'novice'
					},
			/* 		{
						type:'专属礼包',
						path:'exclusive'
					},
					{
						type:'特权礼包',
						path:'privilege'
					},
					{
						type:'首发礼包',
						path:'starting'
					},
					{
						type:'白金礼包',
						path:'platinum'
					},
					{
						type:'豪华礼包',
						path:'luxury'
					},
					{
						type:'节日礼包',
						path:'festival'
					}, */
					{
						type:'其他',
						path:'other'
					}
				],
				giftCurIndex:0
			}
		},
		methods:{
			 selectGift(index){
			 	this.giftCurIndex = index
			 }
		}
	}
</script>
<style scoped>
	.gift-center{ margin-bottom:50px;}
	.gift-center .gmCen_right{width: 850px;padding-top:15px;}
	.gift-center .gmCen_right .lbClsifiTit{margin:0 0 40px 40px;}
	.gift-center .gmCen_right .hotLbCont{margin:0 0 35px 10px;}
	
</style>