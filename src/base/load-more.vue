<template>
	<div class="load_more" @click="loadMore">
		<span>查看更多</span>
		<a>
			<i class="gmCen_spri"></i>
		</a>
	</div>
</template>
<script>
	export default{
		methods:{
			loadMore(){
				this.$emit('hasMore')
			}
		}	
	}
</script>
<style scoped>
	.load_more{width: 115px;height:40px;margin:0 auto;text-align: center;display: flex;align-items: center;cursor: pointer}
	.load_more a{width:35px;height: 100%;display: flex;justify-content: center;align-items: center;}
	.load_more a i{ width: 17px; height: 17px;background-position:-56px -58px;display: block;}
	.load_more span{color:#666666;font-size:18px;line-height: 40px;}
</style>