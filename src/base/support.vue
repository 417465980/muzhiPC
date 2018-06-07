<template>
    <div id="support-test" ref="support-test">
        <div class="links-guide">
            <p class="browsers-info emphasize-red">您的浏览器仅支持本网站的部分功能！</p>
            <p class="browsers-info">推荐使用谷歌浏览器、火狐浏览器或者360浏览器等任何一款浏览器的最新版本访问本网站。</p>
            <p class="browsers">
                <a>
                    <img src="../assets/images/google.jpg" alt="谷歌浏览器" title="谷歌浏览器"></a>
                <a>
                    <img src="../assets/images/firefox.jpg" alt="火狐浏览器" title="火狐浏览器"></a>
                <a>
                    <img src="../assets/images/360.jpg" alt="360浏览器" title="360浏览器"></a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    //检测浏览器是否支持显示本网站

    if (!window.applicationCache || !this.supportStyle("animation")) {
      var supportTest = this.$refs["support-test"],
        body = document.getElementsByTagName("body")[0];

      supportTest.style.display = "block";
      body.style.overflow = "hidden";
    }

    //以下函数引用自http://www.jb51.net/article/56412.htm
  },
  methods: {
    supportStyle: function(style) {
      var prefix = ["webkit", "Moz", "ms", "o"],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function(string) {
          return string.replace(/-(\w)/g, function($0, $1) {
            return $1.toUpperCase();
          });
        };

      for (i in prefix) humpString.push(_toHumb(prefix[i] + "-" + style));

      humpString.push(_toHumb(style));

      for (i in humpString) if (humpString[i] in htmlStyle) return true;

      return false;
    }
  }
};
</script>
<style scope>
#support-test {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  z-index: 9999;
}
.links-guide {
  position: relative;
  margin: 50px auto 0 auto;
  width: 320px;
  height: auto;
  padding: 10px 10px 10px 10px;
  background-color: #fff;
}
.links-guide p {
  font-size: 14px;
  font-family: 宋体;
  letter-spacing: 1px;
  text-align: left;
  width: 100%;
  height: auto;
  line-height: 1.6;
}
.emphasize-red {
  color: red;
}
.browsers-info {
  text-indent: 2em;
}
.browsers {
  border: 1px solid #aaa;
  padding-left: 8px;
}
.browsers a {
  display: inline-block;
  width: 84px;
  height: 84px;
  margin: 5px 3px;
}
.browsers a img {
  width: 100%;
  height: 100%;
}
</style>

