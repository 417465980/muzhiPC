<template>
	<div class="cont_box gm_center clearfix">
		<div class="gmCen_left fl">
			
			<user-info v-if="showInfo"></user-info>
			<reg-info v-else></reg-info>
			<game-rank></game-rank>
		</div>
		<div class="gmCen_right fr">
			<div class="clsifi_title">
				<div class="clsifi_icon">
					<i class="icon_spri"></i>
					<span>游戏分类</span>
				</div>
				<div class="type_wrap">
					<router-link   v-for="(item,index) in gmTypeFields" :to="{path:item.path}"  class="clsifi_type clearfix"  :key="index" @click.native="selectGame(index)">
						<a class="fl hoveraction" >
							{{item.type}}
							<b v-show="curIndex === index"><i></i><i></i></b>
						</a>
						<div class="clsifi_arrow fl">
							<div>
								<i></i>
								<i></i>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
	</div>
</template>
<script>
import RegInfo from "base/reg-info";
import UserInfo from "base/user-info";
import GameRank from "base/game-rank";
import { token } from "common/js/general";
export default {
  components: {
    UserInfo,
    GameRank,
    RegInfo
  },
  data() {
    return {
      token,
      gmTypeFields: [
        {
          type: "全部",
          path: "all"
        },
        {
          type: "休闲益智",
          path: "casual"
        },
        {
          type: "角色扮演",
          path: "role"
        },
        {
          type: "经营策略",
          path: "business"
        },
        {
          type: "动作冒险",
          path: "adventure"
        },
        {
          type: "棋牌天地",
          path: "chess"
        },
        {
          type: "飞行射击",
          path: "shoot"
        },
        {
          type: "体育竞技",
          path: "sport"
        },
        {
          type: "网络游戏",
          path: "network"
        }
      ],
      curIndex: 0,
      showInfo: false
    };
  },
  methods: {
    selectGame(index) {
      this.curIndex = index;
    },
    _checkToken() {
      if (window.localStorage.getItem("token")) {
        this.showInfo = true;
      } else {
        this.showInfo = false;
      }
    }
  },
  created() {
    this._checkToken();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm._checkToken();
    });
  }
};
</script>
<style scoped>
.gm_center {
  margin-bottom: 50px;
}
.gm_center .gmCen_right {
  border-top: 1px solid #e9e9e9;
  width: 810px;
  padding: 15px 0 0 40px;
}
</style>