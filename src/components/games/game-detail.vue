<template>
	<div class="topBorder news-center">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<game-rank></game-rank>
				<div class="newsHotActive">
					<hot-active></hot-active>
				</div>
			</div>
			<div class="gmCen_right fr">
                <div class="game-detail">
                    <div class="info_pro">
                        <div class="fl game-nav">
                            <i class="icon_spri"></i>
                            <span>游戏详情</span>
                        </div>
                       <!--  <router-link to="" class="fr" >+</router-link> -->
                    </div>
                    <div class="game-intro">
                        <div class="game-name">
                            <div class="fl game-column-left">
                                <img :src="rows.icon|addHttp" alt="">
                                <div class="game-name-box">
                                    <h4><span>{{rows.name}}</span><a v-if="rows.website" :href="rows.website">官网</a><a v-else href="javascript:;">官网</a></h4>
                                    <p>版本：1.0.0.0</p>
                                    <p>类型：{{rows.type}}</p>
                                    <p>大小：{{rows.appSize}}M</p>
                                </div>

                            </div>
                            <div class="game-column-right listTitle fr">
                                <a class="getLb game-active" href="javascript:;" @click="receivebag"><i class="gmCen_spri"></i> <span>礼包领取</span></a><br>
                               <a  :href="rows.downloadLink" class="gmLoad game-active "><i class="gmCen_spri"></i> <span>游戏下载</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="info_pro">
                        <div class="mt40 game-nav">
                            <i class=""></i>
                            <span>游戏简介</span>
                        </div>
                    </div>
                    <div class="game-intro">
                        <div>
                            <div class="intro">
                                <p class="">
                                    {{rows.introduction}}
                                </p>
                            </div> 
                        </div>
                    </div>
                    <div class="info_pro">
                        <div class="mt40 game-nav">
                            <i class=""></i>
                            <span>游戏截图</span>
                        </div>
                    </div>
                    <div class="swipe-wrapper">
                        <mt-swipe :auto="4000" ref="swipe">
                            <mt-swipe-item v-for="(item, index) in screenshots" :key="index" class="slide1"><img class="swipe-img" :src="item|addHttp" alt=""></mt-swipe-item>
                        </mt-swipe>
                        <div>
                          <a class="prev swiperbtn gmCen_spri" href="javascript:;" @click='prev'></a>
                          <a class="next swiperbtn gmCen_spri" href="javascript:;" @click="next"></a>
                      </div>
                    </div>
                    
                </div>
			</div>
		</div>
	</div>
</template>
<script>
    import vue from 'vue'
    import {gameListMixin} from 'common/js/mixin'
    import GameRank from 'base/game-rank'
	import HotActive from 'base/hot-active'
	import {mapGetters} from 'vuex'
	import axios from 'axios'
    import {url } from 'common/js/general'
    import MintUi from 'mint-ui'
    import {Swipe } from 'mint-ui'
    import 'mint-ui/lib/style.css'
    vue.use(MintUi,Swipe)
    export default{
        mixins: [gameListMixin],
		components:{
            GameRank,
            HotActive
        },
        data(){
			return{
                rows:[],
                screenshots:[]
            }
		},
		methods:{
			receivebag(){
				alert('请到App领取')
            },
            getData(){
                var id = window.location.href.split('/game/')[1].split('/')[0]
                id = id=='all'?null:id
                var that = this
                if(id){
                    axios.post(url + '/muzhiplat/pc2/game/'+id,).then(function(res){
                        that.rows = res.data.rows
                        that.screenshots = res.data.rows.screenshots.split(',')
                    }).catch(function(res){
                        
                    })				
                }
            },
            next(){
                this.$refs.swipe.next();
            },
            prev(){
                this.$refs.swipe.prev();
            },
        },
        created (){
            this.getData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'getData'
        },
        filters:{
            addHttp(data){

                if(data.indexOf('undefined')!=-1){
                    return data
                }else{
                    return url+data
                }
            },
        
        }
    }
</script>
<style scoped lang="stylus">
    .gmCen_right
        width 800px
        margin-bottom 50px
        margin-left 50px
        margin-top 10px

    .info_pro

        height 29px
        padding-bottom 20px
        line-height 20px
        border-bottom 1px solid #f0f0f0

	    .game-nav
            display flex
            align-items center
            position relative
            i
                display inline-block
                width 34px
                height 34px
                background-position -117px -9px;
                margin-right 10px
            span
                font-size 20px
            &:before
                top 50px
                left 50px   
            &:after
                top 49px
                left 50px 
	.game-intro
        margin 40px 45px
    .game-name
        font-size 0
    .game-column-left
        img 
            display inline-block
            width 116px
            height 116px
           
    .game-name
        display inline-block
        width 100%
        h4 
            padding 12px 0
            font-style normal
            font-weight normal
            span
                font-size 16px
                color #333
                vertical-align middle
            a
                display inline-block
                padding 2px 6px 
                border 1px solid #a5a5a5
                box-sizing border-box
                font-size 12px
                color #666
                vertical-align middle
                margin-left 10px
                border-radius 6px
        p 
            font-size 13px
            color #666
            padding 5px 0
    .getLb
        i 
            background-position -40px -127px
        &:hover i
            background-position -10px -127px

    .gmLoad
        i 
            background-position -99px -127px
        &:hover i
            background-position -68px -127px
    .game-active
        display block 
        margin-top 20px
        height: 38px;
        width: 120px;
        border: 1px solid #c7c7c7;
        border-radius: 5px;
        font-size 0
        color #666
        i 
            display: inline-block;
            vertical-align middle
            width: 18px;
            height: 18px;
            margin-right: 5px;
            margin-left 15px
        span 
            vertical-align middle
            line-height 38px
            font-size 16px
         &:hover span 
            color #fff
    .game-column-right
        height 128px
    .game-name-box
        display inline-block
        margin-left 16px
    .intro 
        text-indent  2rem
        font-size 13px
        color #666
        line-height 36px
    .mt40 
        margin-top 40px
    .swipe-wrapper
        height 600px
        width 340px
        margin 50px auto
        position relative
    .swiperbtn
        display block 
        position absolute
        top 50%
        width 43px
        height 43px
    .prev
        left -120px
        background-position -10px -158px
    .next 
        right -120px
        background-position -76px -158px
    .swipe-img
        width 100%
    .mint-swipe-indicator.is-active 
        background #f00

</style>
