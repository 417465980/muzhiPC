<template>
	<div class="clsifi_list">
		<ul class="clearfix">
			<li v-for="(item,index) in allList" :key="index">
				<div class="listIcon fl">
					<router-link :to="'/game/'+item.id" tag="p"><img  v-lazy="'http://game.91muzhi.com/muzhiplat'+item.character" /><span class="imgfilter"></span></router-link>
				</div>
				<div class="listTitle fl">
					<router-link :to="'/game/'+item.id" tag="p" class="hoveraction">{{item.name}}</router-link>
					<span>类型：{{item.type}}&nbsp;&nbsp;&nbsp;&nbsp;大小{{item.appSize}}M</span>
					<p class="introduce">简介：{{item.introduction}}</p>
					<div class="clearfix">
						<a class="getLb fl">
							<span class="middlespan"></span>
							<i class="gmCen_spri"></i>
							<span>礼包领取</span>
						</a>
						<a :href="item.downloadLink" class="gmLoad fl">
							<span class="middlespan"></span>
							<i class="gmCen_spri"></i>
							<span>游戏下载</span>
						</a>
					</div>
				</div>
			</li>
		</ul>
		<div class="moreWrap" v-show="hasMore === true">
			<load-more @hasMore="allMore"></load-more>
		</div>
         <expect v-if="!this.allList.length">
            <p>无此分类游戏，敬请期待...</p>
        </expect>
	</div>
</template>
<script>
    import LoadMore from 'base/load-more'
    import expect from 'base/expect'
    import {gameListMixin} from 'common/js/mixin'
    export default{
        mixins: [gameListMixin],
		components:{
            LoadMore,
            expect
        },
        data(){
			return{
                allList:[],
                type:6,
                page:1,
                rows:10,
                total:0,
                hasMore:false
            }
		}
    }
</script>
<style scoped>
	
</style>
