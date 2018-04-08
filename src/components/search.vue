<template>
	<div id="search " class="topBorder">
        <div class="min-width">
            <p class="search-result "><i class="icon_spri"></i><span>搜索结果</span></p>
        </div>
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>

export default {
  data() {
    return {
		
    };
  },
  methods: {
 
  },
  mounted(){
  },

};
</script>
<style scoped lang="stylus">
	
    .search-result
        i 
            display inline-block
            width 32px
            height 32px
            background-position -10px -158px
            vertical-align middle
        span 
            display inline-block
            padding-left 10px
            line-height 40px
            font-size 20px
            color #333
            vertical-align middle

</style>