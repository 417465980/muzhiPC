<template>
	<div id="search " class="topBorder">
        <div class="min-width mb20">
            <p class="search-result "><i class="icon_spri"></i><span>搜索结果</span></p>
            <div class="search-box">
                <ul>
                    --1{{$route.name}}
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
                    <li class="game-list">
                        <div>
                            <h3>正统三国</h3>
                            <p>类型：角色扮演 大小100M</p>
                            <p alt="">简洁：《正统三国》是一看</p>
                            <p><span class="giftReceive hover-base"><i class="icon_spri"></i>礼包领取</span><a class="downgame hover-base"><i class="icon_spri"></i>游戏下载</a></p>
                        </div>
                    </li>
      
                </ul>
            </div>
            <div class="cl"></div>
        </div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import axios from "axios";
import { url, hint } from "../common/js/general";
export default {
  data() {
    return {
      gamedata: {}
    };
  },
  methods: {},
  mounted() {
    setTimeout(function() {
      let paramsUrl = new URLSearchParams();
      let that = this;
      paramsUrl.append("keyword", "");
      axios
        .post(url + "/muzhiplat/pc2/game/findGameByKeywords", paramsUrl)
        .then(function(res) {
          console.log(res.data);
          that.gamedata = res.data.rows;
          hint(that.$refs, res.data.msg);
        })
        .catch(function(res) {
          console.log(res);
        });
    }, 20);
  }
};
</script>
<style scoped lang="stylus">
.search-result {
    i {
        display: inline-block;
        width: 32px;
        height: 32px;
        background-position: -10px -158px;
        vertical-align: middle;
    }

    span {
        display: inline-block;
        padding-left: 10px;
        line-height: 40px;
        font-size: 20px;
        color: #333;
        vertical-align: middle;
    }
}

.search-box {
    width: 100%;
}

.game-list {
    float: left;
    width: 405px;
    height: 160px;
    border: 1px solid #e6e6e6;
    background: url('../assets/images/search.png') no-repeat -20px bottom;
    margin-top: 30px;

    div {
        margin-left: 150px;
        p{
            font-size 13px
            color #666
            line-height 20px
        }
        h3 {
            font-size: 16px;
            color: #333;
            padding: 20px 0 16px;
            line-height: 1;
        }
    }

    
}

.giftReceive, .downgame {
    display: inline-block;
    width: 88px;
    height: 28px;
    border: 1px solid #666;
    border-radius: 6px;
    color: #666;
    font-size: 13px;
    margin-top 10px
}

.giftReceive:hover, .downgame:hover {
    border: none;
    color: #fff;
}

.downgame {
    margin-left: 8px;
}

.giftReceive i, .downgame i {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: 8px;
    margin-left: 10px;
    margin-right: 5px;
}

.giftReceive i {
    background-position: -108px -166px;
}

.giftReceive:hover i {
    background-position: -137px -166px;
}

.downgame i {
    background-position: -71px -166px;
}

.downgame:hover i {
    background-position: -165px -166px;
}

.game-list:nth-of-type(2n) {
    margin-left: 60px;
}
</style>
