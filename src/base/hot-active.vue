<template>
	<div class="hot_active">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<span class="middlespan"></span>
				<i class="icon_spri"></i>
				<span>热门活动</span>
			</div>
			<div class="hot_more fr">
				<router-link to="/active"><img src="../assets/images/more.png" alt=""></router-link>
			</div>
			
		</div>
		<ul>
			<li v-for="(item,index) in hotActive" :key="index" ><!-- @click="hotAc(item)" -->
				<figure>
					<router-link :to="'/news/'+item.id" tag="a"><img  v-lazy="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" :style="imgHeight"/></router-link>
					<!-- <img :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" :style="imgHeight"/> -->
					<figcaption class="hoveraction">
						{{item.title}}
					</figcaption>
				</figure>
				<div class="hotTimeCont clearfix">
					<div class="active_time fl">
						<div class="effective">
							<i></i>
							<span>活动时间：{{item.startDate}}至{{item.endDate}}</span>
						</div>
						<div class="remain_time">
							<i></i>
							<span>剩余时间：{{item.remain}}</span>
						</div>
					</div>                                                                                 
					<img class="end_icon fr" src="../assets/images/endIcon.png" :style="endIconW" v-show="isEnd[index]"/>
				</div>
			</li>
		</ul>
		
		{{count[0]}}
	</div>
</template>
<script>
import { getNews } from "api/muzhi";
import { timeHandle, countdown } from "common/js/time";
export default {
  data() {
    return {
      hotActive: [],
      isEnd: [],
      timer: null,
      count: []
    };
  },
  computed: {
    imgHeight() {
      var url = window.location.href;
      if (url.indexOf("news") > -1) {
        return "height:139px";
      } else {
        return "height:119px";
      }
    },
    endIconW() {
      var url = window.location.href;
      if (url.indexOf("news") === -1) {
        return "width:44px";
      }
    },
    aaab() {
      return setInterval(() => {
        //console.log(this.aaa[0].b)
        this.aaa[0].a = this.aaa[0].a + 1;
      }, 1000);
    }
  },
  mounted() {
    setTimeout(() => {
      this._getHotActive();
    }, 20);
  },

  methods: {
    _getHotActive() {
      for (var i in this.aaa) {
        this.aaa[i].b = 4;
      }

      let type = 1,
        page = 1,
        rows = 2;
      getNews(type, page, rows).then(res => {
        if (res.ret === true) {
          this.hotActive = res.rows;
          clearInterval(this.timer);
          this.timer = setInterval(() => {
            var arr = [];
            for (var i in this.count) {
              this.count[i] = this.count[i] + 1;
              arr.push(this.count[i]);
            }
            this.count = arr;
            var now = new Date();
            for (var i = 0; i < this.hotActive.length; i++) {
              var end = new Date(this.hotActive[i].endDate.replace(/-/g, "/"));
              end.setHours(23, 59, 59, 0);
              var time = parseInt((end.getTime() - now.getTime()) / 1000);
              this.hotActive[i].remain = this.remainTime(time);

              if (time > 0) {
                this.isEnd[i] = false;
              } else {
                clearInterval(this.timer);
                this.isEnd[i] = true;
              }
            }
          }, 1000);
        }
      });
    },
    hotAc(item) {
      this.$router.push({
        path: `/news/${item.id}`
      });
    },
    remainTime(time) {
      if (time >= 0) {
        var d = Math.floor(time / 86400);
        var h = Math.floor((time %= 86400) / 3600);
        var m = Math.floor((time %= 3600) / 60);
        var s = parseInt(time % 60);
        return d + " 天 " + h + " 小时 " + m + " 分 " + s + " 秒";
      } else {
        return "活动已经结束了哟";
      }
    }
  }
};
</script>
<style scoped>
.hot_active {
  width: 100%;
}
.hot_active .active_tit .hot_icon i {
  width: 32px;
  height: 32px;
  display: inline-block;
  background-position: -65px -10px;
  margin-right: 10px;
  vertical-align: middle;
}
.hot_active ul {
  border-top: 1px solid #e9e9e9;
  margin-top: 11px;
}
.hot_active ul figure img {
  width: 100%;
  margin: 20px 0 10px;
  height: auto;
}
.hot_active ul figure figcaption {
  color: #333333;
  font-size: 18px;
  cursor: pointer;
}
.hot_active li .hotTimeCont {
  position: relative;
}
.hot_active ul .active_time {
  font-size: 12px;
  color: #666666;
}
.hot_active ul .active_time .effective,
.hot_active ul .active_time .remain_time {
  height: 20px;
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.hot_active ul .active_time i {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid #999999;
  margin-right: 15px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
.hot_active ul .end_icon {
  margin-top: 5px;
}
</style>