<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="game_list">
			<ul class="clearfix">
				<li v-for="(item,index) in hotGift" :key="index">
					<a class="gm_icon fl">
						<img :src="item.giftIconUrl|addHttp"/>
					</a>
					<div class="item_title fl">
						<p :title="item.gameName" class="hoveraction">{{item.gameName}}</p>
						<span :title="item.giftName">{{item.giftName}}</span>
						<a href="javascript:;" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span @click="receivebag">领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
	import {url,hint} from '../../common/js/general';
	import axios from 'axios'
	import qs from 'qs'
	export default{
		data(){
			return{
				hotGift:[],
				place:['hotGift','recomGift'],
				rows:10,
				page:1,
				url
			}
		},
		methods:{
			findMyGifts(){
				let that = this;
				let paramsUrl =qs.stringify({
					'place': that.place[1],
					'page': that.page,
					'rows': that.rows,
				})
				
			
				axios.post(url + '/muzhiplat/pc2/gift/findGiftsByPlace',paramsUrl).then(function(res){
					hint(that.$refs,res.data.msg)
					that.hotGift = res.data.rows
				}).catch(function(res){
					console.log(res)
				})
			},
			receivebag(){
				alert('请到App领取')
			}

		},
		mounted(){
			this.findMyGifts()
		},
		filters:{
			addHttp(val){
				return url+val
			}
		}
		
		
	}
</script>
<style scoped>
	
</style>