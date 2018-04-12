<template>
	<div class="gmListWrap">
		<slot name="hotLb_Tit"></slot>
		<div class="game_list">
			<ul class="clearfix">

				<li v-for="(item,index) in hotGift" :key="index">
					{{item.giftIconUrl}}
					<a class="gm_icon fl">
						<img :src="item.giftIconUrl|addHttp"/>
					</a>
					<div class="item_title fl">
						<p :title="item.gameName">{{item.gameName}}</p>
						<span :title="item.giftName">{{item.giftName}}</span>
						<a :href="item.download" target="_blank" class="hotGmBtn">   
							<i class="icon_spri"></i>
							<span>领取</span>
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {url,token,userdata,hint} from '../../common/js/general';
	import axios from 'axios'
	export default{
		data(){
			return{
				hotGift:[],
				username:userdata.name,
				token,
				rows:10,
				page:1,
				url
			}
		},
		methods:{
			findMyGifts(){
				let paramsUrl = new URLSearchParams()
				let that = this;
				paramsUrl.append('username', that.username);
				paramsUrl.append('token', that.token);
				paramsUrl.append('page', that.page);
				paramsUrl.append('rows', that.rows);
				axios.post(url + '/muzhiplat/pc2/user/findMyGifts',paramsUrl).then(function(res){
					hint(that.$refs,res.data.msg)
					that.hotGift = res.data.rows
				}).catch(function(res){
					console.log(res)
				})
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