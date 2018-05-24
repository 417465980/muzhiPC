<template>
	<div class="acBox">
		<div class="acIcon">
			<i class="icon_spri"></i>
			<span>全部活动</span>
			
		</div>
		<ul class="clearfix">
			<li v-for="(item,index) in activeList" :key="index">
			
				<div class="ac_img">
					<router-link :to="'/news/'+item.id" tag="a"><img :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" /></router-link>
					<!-- <img  @click="selectActive(item)" :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" /> -->
				</div>
				<div class="ac_title clearfix">
					<div class="active_time fl">
						<p><router-link :to="'/news/'+item.id" class="hoveraction" tag="a">{{item.title}}</router-link></p>
						<!-- <p  @click="selectActive(item)">{{item.title}}</p> -->
						<div class="effective">
							<i></i>
							<span>活动时间：{{item.startDate}}至{{item.endDate}}</span>
						</div>
						<div class="remain_time">
							<i></i>
							<span>剩余时间：<span v-if="type">{{item.remain}}</span></span>
						</div>
					</div>
					
					<img class="end_icon fr" v-if="item.time<=0" src="../assets/images/endIcon.png" />
				</div>
			</li>
		</ul>
		{{count[0]}}
		<div class="moreWrap" v-show="hasMore === true">
			<load-more @hasMore="activeMore"></load-more>
		</div>
	</div>
</template>
<script>
	import LoadMore from 'base/load-more'
	import {getNews} from 'api/muzhi'
	import Vue from 'vue'
	export default{
		components:{
			LoadMore
		},
		data(){
			return{
				activeList:[],
				type:1,
				page:1,
				rows:6,
				total:0,
				hasMore:false,
				activetime:[],
				count:[],
				timer:null
			}
		},
		mounted(){
			setTimeout(()=>{
				this._getActive()
			},20)
		},
		methods:{
			_getActive(){
				getNews(this.type,this.page,this.rows).then((res) =>{
					if(res.ret === true){
						this.activeList = res.rows
						var that = this;
						clearInterval(this.timer)
						//var count=[]
						this.timer = setInterval(()=>{
							var arr =[]
							for(var i in this.count){
								this.count[i]=this.count[i]+1	
								arr.push(this.count[i])
														
							}
							this.count = arr
							
							var now = new Date();
							for(var i =0 ; i<this.activeList.length;i++){
								var end = new Date(this.activeList[i].endDate.replace(/-/g,"/"));
								
								end.setHours(23, 59, 59, 0);
								
								var time = parseInt((end.getTime() - now.getTime()) / 1000);
								
								
								this.activeList[i].remain  = this.remainTime(this.activeList[i].endDate,time)
								this.activeList[i].time  =time
								
							}
							//this.activeList = this.activeList
							//console.log(count[0].remain)
						},1000)
						
						if(this.activeList.length < res.total){
                            this.hasMore = true
                        }else{
                            this.hasMore = false
                        }
					}
				})
			},
			activeMore(){

                this.page++
				this.total += this.rows
				var that = this
                getNews(this.type,this.page,this.rows).then((res) =>{
                    if(res.ret === true){
						this.activeList = this.activeList.concat(res.rows)
						var now = new Date();
							for(var i =0 ; i<that.activeList.length;i++){
								var end = new Date(that.activeList[i].endDate.replace(/-/g,"/"));
								
								end.setHours(23, 59, 59, 0);
								
								var time = parseInt((end.getTime() - now.getTime()) / 1000);
								
								that.activeList[i].remain  = that.remainTime(that.activeList[i].endDate,time)
							}
                        if(!res.rows.length || (this.total+this.rows) >= res.total){
                            this.hasMore = false
                        }
                    }
				})
            },
			selectActive(item){
				this.$router.push({
					path:`/news/${item.id}`
				})
			},
			remainTime(endDate,time){
				if(time>=0){
					var d = Math.floor(time / 86400);  
					var h = Math.floor((time %= 86400) / 3600); 
					var m = Math.floor((time %= 3600) / 60);  
					var s = parseInt(time % 60); 
					return   d + " 天 " + h + " 小时 " + m + " 分 " + s + " 秒";
				}else{
					return '活动已经结束了哟'
				}
			}
		},
		filters:{

		}
	}
</script>
<style scoped>
	.acBox{width: 810px;padding:10px 0 0 40px;}
	.acBox .acIcon{width: 100%;height:56px;border-bottom:1px solid #e9e9e9;position: relative;margin-bottom: 20px;}
	.acBox .acIcon i{width: 32px; height: 32px;background-position:-65px -10px;display: inline-block;margin-right: 15px;}
	.acBox .acIcon span{font-size: 20px;}
	.acBox .acIcon:before,.acBox .acIcon:after{left: 65px;}
	.acBox .acIcon:before{top:56px;}
	.acBox .acIcon:after{top: 56px;}
	.acBox ul li{width: 385px;float:left;margin-bottom: 30px;}
	.acBox ul li:nth-child(odd){margin-right: 40px;}
	.acBox li .ac_img{width: 100%;height: 163px;margin-bottom:15px;}
	.acBox li .ac_img img{width:100%; height:100%;}
	.acBox li .active_time{width:314px;height: 70px;}

	.acBox li .active_time p{font-size:18px;color: #333333;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	
	.acBox li .active_time span{font-size: 13px;color: #666666;font-family: simsun,"宋体";}
	.acBox li .active_time .effective,.acBox li .active_time .remain_time{height: 20px;display: flex;align-items: center;margin-top:5px;}
	.acBox li .active_time i{display:inline-block; width:5px;height: 5px;border: 1px solid #999999;margin-right: 15px;
			transform: rotate(45deg);-webkit-transform: rotate(45deg);-ms-transform: rotate(45deg);-moz-transform: rotate(45deg);-o-transform: rotate(45deg);
		}
	.acBox li .ac_title{position: relative;}
	.acBox li .ac_title .end_icon{position: absolute;bottom: 0;}
	.acBox .moreWrap{margin-top: 35px;}
</style>