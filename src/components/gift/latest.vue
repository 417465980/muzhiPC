<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="game_list">
			<ul class="clearfix">
				<li v-for="(item,index) in hotGift" :key="index">
					<a class="gm_icon fl">
						<img :src="'http://game.91muzhi.com/muzhiplat'+item.giftIconUrl"/>
					</a>
					<div class="item_title fl">
						<p :title="item.gameName">{{item.gameName}}</p>
						<span :title="item.giftName">{{item.giftName}}</span>
						<a :href="item.download" target="_blank" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span @click="receivebag">领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {url,hint} from '../../common/js/general';
	import axios from 'axios'
	export default{
		
		data(){
			return{
				hotGift:[],
				type:[0,1,2],
				rows:10,
				page:1,
				url
			}
		},
		methods:{
			findMyGifts(){
				let paramsUrl = new URLSearchParams()
				let that = this;
				paramsUrl.append('type', that.type[2]);
				paramsUrl.append('page', that.page);
				paramsUrl.append('rows', that.rows);
				axios.post(url + '/muzhiplat/pc2/gift/findGiftsByType',paramsUrl).then(function(res){
					hint(that.$refs,res.data.msg)
					that.hotGift = res.data.rows
					console.log(res.data.rows)
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