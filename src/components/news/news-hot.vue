<template>
	<div class="new_list">
		<ul>
			<li class="clearfix" v-for="(item,index) in allNewsList" :key="index"  @click="selectNew(item)"> 
				<div class="new_img fl">
					<img :src="'http://game.91muzhi.com/muzhiplat'+item.bigPicUrl" />
				</div>
				<div class="new_title fl">
					<h1 class="hoveraction">{{item.title}}</h1>
					<p>{{item.childTitle}}</p>
				</div>
				<div class="new_time fr" v-if="item.addDate">
					<span>{{item.addDate}}</span>
				</div>
			</li>
		</ul>
		<div class="more_news" v-show="hasMore === true">
			<load-more @hasMore="allNews"></load-more>
		</div>
		<expect v-if="!this.allNewsList.length">
            <p>无此分类资讯，敬请期待...</p>
        </expect>
	</div>
</template>
<script>
import LoadMore from "base/load-more";
import expect from "base/expect";
import { mapMutations } from "vuex";
import { listMixin } from "common/js/mixin";
export default {
  mixins: [listMixin],
  components: {
    LoadMore,
    expect
  },
  data() {
    return {
      allNewsList: [],
      type: 4,
      page: 1,
      rows: 5,
      total: 0,
      hasMore: false
    };
  },
  methods: {
    ...mapMutations({
      setNewsInfo: "SET_NEWS_INFO"
    })
  }
};
</script>
<style scoped>
</style>