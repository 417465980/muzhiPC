<template>
	<div class="clsifi_list">
		<ul class="clearfix">
			<li v-for="(item,index) in allList" :key="index" class="img-hover-border ">
				<div class="listIcon fl">
					<router-link :to="'/game/'+item.id" tag="p"><img v-lazy="'http://game.91muzhi.com/muzhiplat'+item.character" /><span class="imgfilter"></span></router-link>
				</div>
				<div class="listTitle fl">
					<router-link :to="'/game/'+item.id" tag="p" class="hoveraction">{{item.name}}</router-link>
					<span>类型：{{item.type}}&nbsp;&nbsp;&nbsp;&nbsp;大小{{item.appSize}}M</span>
					<p class="introduce" :title="item.introduction">简介：{{item.introduction}}</p>
					<div class="clearfix">
						<a class="getLb fl" href="javascript:;"  @click="markfqa(item.downloadLink)">
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
			<load-more @hasMore="allMore"><p class="more-game"></p></load-more>
		</div>
         <expect v-if="!this.allList.length">
            <p>无此分类游戏，敬请期待...</p>
        </expect>
		<div class="markfqa " @click.stop="close" v-show="bool">
            <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
                <div class="markbox markbox-gift">
					<div class="close" @click.stop="close">×</div>
					<div @click.prevent="function(){return false}">
						<div class="mark-content">
							<p>
								<span class="f18 lh24">请到拇指游戏宝领取</span><br>
                  <a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk"><img class="receive" src="../../assets/images/2.png" alt=""></a>
								<a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk" class="markhtml downbtn">马上下载</a>
							</p>
						</div>  
					</div>
                </div>
             </transition>
        </div>
	</div>
</template>
<script>
import LoadMore from "base/load-more";
import expect from "base/expect";
import { gameListMixin } from "common/js/mixin";
export default {
  mixins: [gameListMixin],
  components: {
    LoadMore,
    expect
  },
  data() {
    return {
      allList: [],
      type: 2,
      page: 1,
      rows: 10,
      total: 0,
      hasMore: false,
      bool: false,
      markhtml: ""
    };
  },
  methods: {
    markfqa(download) {
      this.markhtml = download;
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  }
};
</script>
<style scoped>
</style>
