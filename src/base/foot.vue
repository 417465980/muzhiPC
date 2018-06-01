<template>
	<div class="footer" ref = 'footer'>
		<div class="min-width">
			<p><router-link to="/developer" >商务合作</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;防沉迷认证&nbsp;&nbsp;|&nbsp;&nbsp;<router-link tag="span" to="/index">企业官网</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/about" tag="span"> 关于我们</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link to="/mzagreement" tag="a">用户协议</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;<router-link tag="a" to="/service">客服中心</router-link ></p>
			<p>深圳市拇指游玩科技有限公司&nbsp;&nbsp;版权所有&nbsp;&nbsp;2014ALL&nbsp;&nbsp;Rights&nbsp;&nbsp;Reserved.</p>
			
			<p>网络文化经营许可证:&nbsp;&nbsp;<a target="_blank" href="http://game.91muzhi.com/assets/images/网络文化经营许可证.jpg">粤网文[2015]1169-062号</a> </p>
			<p>增值电信业务经营许可证： <a href="http://game.91muzhi.com/assets/images/%E5%A2%9E%E5%80%BC%E7%94%B5%E4%BF%A1%E4%B8%9A%E5%8A%A1%E7%BB%8F%E8%90%A5%E8%AE%B8%E5%8F%AF%E8%AF%81.jpg" target="_blank">粤B2-20150359</a>&nbsp;&nbsp;<a target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备14027729号-1</a></p>
			<p>健康游戏公告：抵制不良游戏&nbsp;&nbsp;拒绝盗版游戏&nbsp;&nbsp;注意自我保护&nbsp;&nbsp;谨防受骗上当&nbsp;&nbsp;适度游戏益脑&nbsp;&nbsp;沉迷游戏伤身&nbsp;&nbsp;合理安排时间&nbsp;&nbsp;享受健康生活</p>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //this.footpos();
  },
  methods: {
    footpos() {
      var bodyHeight = document.body.clientHeight;
      var screenHeight = window.screen.availHeight;
      if (bodyHeight < screenHeight) {
        this.$refs.footer.style.top = screenHeight - bodyHeight + 255 + "px";
      } else {
        this.$refs.footer.style.top = screenHeight + 255 + "px";
      }
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
</style>
