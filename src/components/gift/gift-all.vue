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
							<span class="middlespan	"></span>
							<i class="icon_spri"></i>
							<span @click="markfqa(item.download)">领取</span>
						</a>
					</div>
				</li>
			</ul>

		</div>
		<div class="load_more" @click="addgift" v-if="hotGift.length>0&&show">
			<span class="hoveraction">查看更多</span>
			<a>
				<i class="gmCen_spri"></i>
			</a>
		</div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
		<div class="markfqa" @click.stop="close" v-show="bool">
            <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
                <div class="markbox">
                    
                        <div class="close" @click.stop="close">×</div>
                        <div @click.prevent="close">
                         
							<div >
								<p>
									<span>请到app领取</span><br>
									<a href="markhtml" class="markhtml">点击下载app</a>
								</p>
							</div>  
                        </div>
                </div>
             </transition>
        </div>
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
				rows:8,
				page:1,
				url,
				show:true,
				bool:false,
				markhtml:''
			}
		},
		methods:{
			findMyGifts(){
				let that = this;
				let paramsUrl =qs.stringify({
					'page': that.page,
					'rows': that.rows,
				})
				axios.post(url + '/muzhiplat/pc2/gift/findGiftsByPlace',paramsUrl).then(function(res){
					if(res.data.ret){
						res.data.msg="加载成功"
					}
					// hint(that.$refs,res.data.msg)
					that.hotGift = res.data.rows
					
				}).catch(function(res){
					console.log(res)
				})
			},
			receivebag(){
				hint(this.$refs,'请到App领取')
			},
			addgift(){
				
				let that = this;
				that.page =that.page+1
				let paramsUrl =qs.stringify({
					
					'page': that.page,
					'rows': that.rows,
				})
				axios.post(url + '/muzhiplat/pc2/gift/findGiftsByType',paramsUrl).then(function(res){
					if(res.data.ret){
						res.data.msg="加载成功"
					}
					hint(that.$refs,res.data.msg)
					that.hotGift= that.hotGift.concat(res.data.rows)
					if(res.data.rows.length==0){
						this.show = false
					}
				}).catch(function(res){
					alert('您浏览器版本太低了，请升级浏览器')
					console.log(res)
				})
			},
			markfqa(download){
                this.markhtml = download
                this.bool =!this.bool
            },
            close(){
                this.bool =!this.bool
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