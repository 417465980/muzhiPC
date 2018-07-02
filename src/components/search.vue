<template>
    <div class="search " ref="search">
         <keep-alive>
            <div  class="clsifi_list min-width">
                <div v-if="rows.length == 0"  class="nonegame">
                        <img  src="../../static/images/nosearch.png" alt="">
                        <p class="g9">未能查询到游戏.</p>
                </div>
                <ul v-else class="clearfix">
              
                    <li v-for="(item,index) in rows" :key="index" class="img-hover-border ">
                      <div class="listIcon fl">
                        <router-link :to="'/game/'+item.id" tag="p"><img  v-lazy="'http://game.91muzhi.com/muzhiplat'+item.character" /><span class="imgfilter"></span></router-link>
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
            </div>
        </keep-alive>
        <div class="markfqa" @click.stop="close" v-show="bool">
          <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
            <div class="markbox markbox-gift">
              <div class="close" @click.stop="close">×</div>
              <div @click.stop="function(){return false}">
                <div class="mark-content">
                  <p>
                    <span class="f18 lh24">请到拇指游戏宝领取</span><br>
                    <a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk"><img class="receive" src="../assets/images/2.png" alt=""></a>
                    <a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk" class="markhtml downbtn">马上下载</a>
                  </p>
                </div>  
              </div>
            </div>
          </transition>
        </div>
        <transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import { url, hint } from "common/js/general";
import "../common/style/animate.css";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      keyword: decodeURI(this.$route.params.keyword),
      rows: [],
      url,
      bool: false,
      markhtml: ""
    };
  },
  methods: {
    search(keyword) {
      let that = this;
      let paramsUrl = decodeURI(
        qs.stringify({
          keywords: keyword
        })
      );
      axios
        .post(url + "/muzhiplat/pc2/game/findGameByKeywords", paramsUrl)
        .then(function(res) {
          that.rows = res.data.rows;
          if (res.data.rows.length > 0) {
            hint(that.$refs, "查询成功");
          } else {
            hint(that.$refs, "未能查询到游戏");
          }
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    receivebag() {
      alert("请到App领取");
    },
    markfqa() {
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  },
  mounted() {
    this.search(this.keyword);
    let height = parseInt(getComputedStyle(this.$refs.search, null).height);
    if (height <= document.documentElement.clientHeight - 296 - 133) {
      this.$refs.search.style.height =
        document.documentElement.clientHeight - 296 - 133 + "px";
    }
  },
  beforeRouteUpdate(to, from, next) {
    var key = decodeURI(to.params.keyword);
    this.search(key);
  }
};
</script>
<style scoped >
.clsifi_list {
  padding-top: 25px;
}
.nonegame {
  text-align: center;
  margin-top: 200px;
}
</style>    
