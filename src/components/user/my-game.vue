<template>
	<div id="my-game">
		<div class="">
			<div class="my-game-main">
				<div class="subnav">&nbsp;&nbsp;我的游戏</div>
				<ul class="my-game-list" v-if="!!game.length">
					<li v-for="(item,index) in game" :key="index">
						<div>
							<img class="my-game-icon pis-hover" width="80" height="80" :src="item.icon|addHttp" alt="">
							<div class="my-game-info">
								<p>{{item.name}}</p>
								<a :href="item.website" terget="_blank" class="officialWeb">官网</a>
								<a href="javascript:;" @click="markfqa" class="gift-packbag"><i></i>礼包</a></div>
						</div>
					</li>
				</ul>
				<div v-else >
				<img class="center-img" src="static/images/4.png">
				<p class="g6 f16 tc mt20">前往&nbsp;<router-link to="/game/all" class="g6 red" tag="a">游戏中心</router-link>下载吧</p>
			</div>	
			</div>
			<div class="subnav">&nbsp;&nbsp;精品游戏推荐</div>
			<ul class="my-game-list" v-if="!!rows.length">
				<li v-for="data in rows" :key="data.$index">
					<div>
						<router-link :to="'/game/'+data.id"><img class="my-game-icon pis-hover" :src="data.icon|addHttp" alt=""></router-link>
						<div class="my-game-info">
							<p>{{data.name}}</p>
							<a :href="data.website||'javascript:;'" class="officialWeb">官网</a>
							<a href="javascript:;"  @click="markfqa" class="gift-packbag"><i></i>礼包</a>
						</div>
					</div>
				</li>
			</ul>
			<div v-else >
				<img class="center-img" src="static/images/4.png">
				<p class="g6 f16 tc mt20">前往&nbsp;<router-link to="/game/all" class="g6 red" tag="a">游戏中心</router-link>下载吧</p>
			</div>
		</div>
		<div class="markfqa " @click.stop="close" v-show="bool">
			<transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
				<div class="markbox markbox-gift">
					<div class="close" @click.stop="close">×</div>
					<div @click.stop="function(){return false}">
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
import axios from "axios";
import qs from "qs";
import { url } from "../../common/js/general";
import { mapState } from "vuex";
export default {
  data() {
    return {
      rows: [],
      bool: false,
      markhtml: ""
    };
  },
  methods: {
    getgame() {
      let that = this;
      let paramsUrl = qs.stringify({
        place: "gameBoutique"
      });

      axios
        .post(url + "/muzhiplat/pc2/game/findGameByPlace", paramsUrl)
        .then(function(res) {
          that.rows = res.data.rows;
          if (res.data.ret) {
            res.data.msg = "获取成功";
          }
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    markfqa() {
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  },
  computed: {
    ...mapState(["userdata", "token", "game"])
  },
  mounted() {
    this.getgame();
  },
  filters: {
    addHttp(data) {
      return url + data;
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    game: "getgame"
  }
};
</script>
<style scoped lang="stylus">
.subnav {
	font-size: 20px;
	color: #af2f7d;
	line-height: 22px;

	&:before {
		content: '';
		vertical-align: top;
		display: inline-block;
		width: 3px;
		height: 22px;
		background: #af2f7d;
	}
}

.my-game-main {
	margin: 35px 0;
}

.my-game-list {
	li {
		display: inline-block;
		width: 230px;
		margin: 25px 0;
	}

	li+li {
		margin-left: 50px;
	}

	li:nth-of-type(3n-2) {
		margin-left: 0;
	}
}

.my-game-icon {
	width: 80px;
	float: left;
}

.my-game-info {
	margin-left: 90px;

	p {
		text-align: left;
		line-height: 1;
		padding: 14px 0;
		font-size: 16px;
		color: #333;
	}

	a {
		display: inline-block;
		width: 64px;
		height: 32px;
		border-radius: 6px;
		text-align: center;
		font-size: 14px;
		line-height: 32px;
		color: #666;
		border: 1px solid #999;
		background: #fff;
		cursor: pointer;

		&:hover {
			background: linear-gradient(left, #6461a5, #cf2878);
			background: -webkit-linear-gradient(left, #6461a5, #cf2878);
			color: #fff;
		}
	}
}
</style>