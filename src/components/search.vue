<template>
    <div class="search ">
         <keep-alive>
            <div  class="clsifi_list min-width">
                <div v-if="rows.length == 0"  class="nonegame">
                        <p>未能查询到游戏.</p>
                </div>
                <ul v-else class="clearfix">
                    <li v-for="(item,index) in rows" :key="index">
                        <router-link class="listIcon fl" tag="div" :to="'/game/'+item.id">
                            <img :src="'http://game.91muzhi.com/muzhiplat'+item.icon" />
                        </router-link>
                        <div class="listTitle fl">
                            <router-link tag="p" :to="'/game/'+item.id">{{item.name}}</router-link>
                            <span>类型：{{item.type}}&nbsp;&nbsp;&nbsp;&nbsp;大小{{item.appSize}}M</span>
                            <p class="introduce" :title="item.introduction">简介：{{item.introduction}}</p>
                            <div class="clearfix">
                                <a class="getLb fl">
                                    <i class="gmCen_spri"></i>
                                    <span @click="receivebag">礼包领取</span>
                                </a>
                                <a :href="item.downloadLink" class="gmLoad fl">
                                    <i class="gmCen_spri"></i>
                                    <span>游戏下载</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </keep-alive>
        <transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
    import {url,hint} from 'common/js/general' 
    import '../common/style/animate.css'
    import axios from 'axios';
    import qs from 'qs'
    export default{
        data(){
            return{
                keyword:decodeURI(this.$route.params.keyword),
                rows:[]
            }
        },
        methods:{
            search(keyword){
                 let that = this;
                let paramsUrl =decodeURI(qs.stringify({
					'keywords':keyword,
				}))
                console.log(keyword)
                axios.post(url+'/muzhiplat/pc2/game/findGameByKeywords',paramsUrl).then(function(res){
                   that.rows = res.data.rows;
                   if(res.data.rows.length > 0){
                        hint(that.$refs,'查询成功')
                   }else{
                       hint(that.$refs,'未能查询到游戏')
                   }
                }).catch(function(res){
                    console.log(res)
                })
            },
            receivebag(){
                alert('请到App领取')
            }
        },
        mounted(){
            alert(2)
            alert(this.keyword)
            this.search(this.keyword)
        },
        beforeRouteUpdate(to, from, next) {
            alert(1)
            var key = decodeURI(to.params.keyword)
            alert(key)
            this.search(key)

        },
  
    }
</script>
<style scoped >
.clsifi_list{margin-top: 25px;}
.clsifi_list ul li{width: 383px;height: 160px;border: 1px solid #e6e6e6;margin-bottom: 30px;}
.clsifi_list ul li:nth-child(odd){float: left;}
.clsifi_list ul li:nth-child(even){float: right;}
.clsifi_list li .listIcon{height: 100%;width: 90px;display: flex;align-items: flex-start;justify-content: center;margin-right: 10px;    margin-left: 10px;margin-top:16px;}
.clsifi_list li .listIcon img{height: auto;max-height: 100%;max-width: 100%;}
.clsifi_list li .listTitle p:first-child{font-size: 16px;line-height: 50px;}
.clsifi_list li .listTitle span{font-size: 13px;color: #959595;}
.clsifi_list li .listTitle .introduce{width:237px; font-size: 14px;color: #959595;line-height: 30px;margin-bottom: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
.clsifi_list li .listTitle a{height: 25px;width: 85px;border: 1px solid #c7c7c7;border-radius: 5px;display: flex;align-items: center;justify-content: center;}
.clsifi_list li .listTitle a:first-child{margin-right: 8px;}
.clsifi_list .listTitle .getLb i,.clsifi_list .listTitle .gmLoad i{display: inline-block; width: 12px; height: 12px;margin-right: 5px;}
.clsifi_list .listTitle .getLb i{background-position: -106px -10px;}
.clsifi_list .listTitle .gmLoad i{background-position: -10px -103px;}
.clsifi_list .listTitle .getLb:hover i{ background-position:-106px -42px}
.clsifi_list .listTitle .gmLoad:hover i{background-position:-42px -103px}
.clsifi_list .moreWrap{margin-top: 30px;}
.nonegame{ width :1200px; height :200px;margin:100px auto;}
.nonegame p{ text-align:center; font-size :20px; color:#666;}
</style>    
