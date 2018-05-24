<template>
	<div class="gm_rank">
		<div class="rank_title">
			<i></i>
			<span>热门游戏榜</span>
		</div>
		<ul>
			<li v-for="(item,index) in giftRank" :key="index" @mouseover="rankShow(index)" @mouseout="rankHide(index)">
				<div class="showRankGm clearfix" v-if="currentIndex === index">
					<div class="rankGmIcon fl">
						<img :src="'http://game.91muzhi.com/muzhiplat'+item.giftIconUrl" />
						<div>
							<span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i>
						</div>
					</div>
					<div class="gmRank_tit fl">
						<router-link to="" class="hoveraction" @click.native="receivebag">{{item.gameName}}</router-link>
						<span>{{item.giftName}}</span>
					</div>
					<div class="rankGmBtn fr">
						<i class="activeCenRrankIco gmCen_spri" @click="receivebag"></i>    
                    </div>
				</div>
				<div class="hotRank_tit" v-else>
					<div>
						<span class="hotRank-index">{{index+1}}</span><i></i><i class="addI"></i><i></i>
					</div>
					<span>{{item.gameName}}</span>
				</div>
			</li>
		</ul>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
	import {hotGift} from 'api/muzhi'
	import {hint} from '../common/js/general'
	export default{
		data(){
			return{
                giftRank:[],
				currentIndex:0
			}
		},
		mounted(){
			setTimeout(()=>{
                this._getGiftRank()
			},20)
		},
		methods:{
            _getGiftRank(){
				let place = 'hotGift'
				let page =1
				let rows =10
				hotGift(place,page,rows).then((res) =>{
					if(res.ret === true){
                       this.giftRank = res.rows
					}	
				})	
			},
			rankShow(index){
				this.currentIndex = index
			},
			rankHide(index){
				this.currentIndex = index
			},
			receivebag(){
				hint(this.$refs,'请到App领取')
			}
		}
	}
</script>
<style scoped>
	
</style> 





