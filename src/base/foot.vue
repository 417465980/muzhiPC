<template>

	<div class="footer" v-if="show" ref = 'footer'>
		<div class="min-width">
			<p><a href="http://game.91muzhi.com/developer-resource" class="pis-hover">商务合作</a>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/user/authen" class="pis-hover" v-if="token">防沉迷认证</router-link><router-link to="/login" v-else  class="pis-hover">防沉迷认证</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link tag="span"  class="pis-hover" to="/index">企业官网</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/about" tag="span"  class="pis-hover"> 关于我们</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/mzagreement" class="pis-hover" tag="a">用户协议</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link tag="a"  class="pis-hover" to="/service">客服中心</router-link ></p>
			<p>深圳市拇指游玩科技有限公司&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014ALL&nbsp;&nbsp;Rights&nbsp;&nbsp;Reserved.</p>
			
			<p>网络文化经营许可证:&nbsp;&nbsp;<a class="pis-hover" target="_blank" href="https://www.91muzhi.com/add_value.html">粤网文[2018]2287-804号</a> </p>
			<p>增值电信业务经营许可证： <a class="pis-hover" href="http://game.91muzhi.com/assets/images/%E5%A2%9E%E5%80%BC%E7%94%B5%E4%BF%A1%E4%B8%9A%E5%8A%A1%E7%BB%8F%E8%90%A5%E8%AE%B8%E5%8F%AF%E8%AF%81.jpg" target="_blank">粤B2-20150359</a>&nbsp;&nbsp;<a class="pis-hover" target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备14027729号-1</a></p>
			<p>健康游戏公告：抵制不良游戏&nbsp;&nbsp;拒绝盗版游戏&nbsp;&nbsp;注意自我保护&nbsp;&nbsp;谨防受骗上当&nbsp;&nbsp;适度游戏益脑&nbsp;&nbsp;沉迷游戏伤身&nbsp;&nbsp;合理安排时间&nbsp;&nbsp;享受健康生活</p>
		</div>
	</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {},
  methods: {
    footpos() {
      var bodyHeight = document.body.clientHeight;
      var screenHeight = window.screen.availHeight;
      if (bodyHeight < screenHeight) {
        this.$refs.footer.style.top = screenHeight - bodyHeight + 255 + "px";
      } else {
        this.$refs.footer.style.top = screenHeight + 255 + "px";
      }
    },
    showfoot() {
      let that = this;
      setTimeout(() => {
        that.show = true;
      }, 200);
    }
  },
  computed: {
    ...mapState(["token"])
  },
  watch: {
    $route() {
      this.show = false;
      this.showfoot();
    }
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  padding: 30px 0 55px;
  background-color: #1e2023; /* position: absolute; */
}
.footer div p {
  color: #fff;
  margin-top: 25px;
  text-align: center;
}
.footer div p:first-child,
.footer div p:last-child {
  font-size: 14px;
}
.footer div p:nth-of-type(2),
.footer div p:nth-of-type(3),
.footer div p:nth-of-type(4) {
  font-size: 12px;
}
.footer a {
  color: #fff;
}
.footer a:hover,
.footer span:hover {
  color: #820c9b;
}
</style>
