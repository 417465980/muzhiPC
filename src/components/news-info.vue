<template>
	<div class="news_info">
		<div class="active_tit clearfix">
			<div class="hot_icon fl">
				<i class="icon_spri"></i>
				<span>新闻资讯</span>
			</div>
			<div class="hot_more fr">
				<router-link :to="{path:'/news/all'}" tag="a" ><img src="../assets/images/more.png" alt=""></router-link>
			</div>
		</div>
		<div class="new_content">
			<slot></slot>
			<ul>
				<li v-for="(item,index) in newList" :key="index" @click="homeNews(item)">
					<a  href="javascript:;" class="">{{item.adType}}</a>
					<span class="hoveraction pis-hover">{{item.title}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      sty1: true,
      sty2: true,
      sty3: true,
      sty4: true
    };
  },
  props: {
    newList: {
      type: Array,
      default: []
    }
  },
  methods: {
    homeNews(item) {
      this.$router.push({
        path: `/news/${item.id}`
      });
    }
  }
};
</script>
<style scoped>
.sty1 {
  color: #ff6500;
  border: 1px solid #ff6500;
}
.sty2 {
  color: #4991e9;
  border: 1px solid #4991e9;
}
.sty3 {
  color: #12c700;
  border: 1px solid #12c700;
}
.sty4 {
  color: #f83232;
  border: 1px solid #f83232;
}
.sty5 {
  color: #ff982b;
  border: 1px solid #ff982b;
}
.news_info {
  width: 300px;
}
.news_info .active_tit .hot_icon i {
  width: 24px;
  height: 28px;
  display: inline-block;
  background-position: -117px -54px;
  margin-right: 10px;
  vertical-align: middle;
}
.news_info .new_content {
  border-top: 1px solid #e9e9e9;
  margin-top: 10px;
}
.news_info .new_content p {
  background: linear-gradient(to right, #716da8, #d0296e);
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
  color: #d0296e\0;
  background: none\0;
  padding: 20px 0;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
}

.news_info .new_content li {
  width: 300px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.news_info .new_content li a {
  flex: 0 0 43;
  margin-right: 10px;
  height: 22px;
  width: 43px;
  border: 1px solid #cf387f;
  text-align: center;
  line-height: 22px;
  color: #cf387f;
  font-size: 12px;
  border-radius: 5px;
  display: inline-block\0;
  box-sizing: border-box;
}
.news_info .new_content li span {
  color: #666666;
  font-size: 14px;
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>