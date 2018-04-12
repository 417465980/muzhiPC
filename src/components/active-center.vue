<template>
	<div class="topBorder">
		<div class="cont_box clearfix">
			<div class="activeCen_left fl">
				<load-app></load-app>
				<gift-rank></gift-rank>
			</div>
			<div class="gmCen_right fr">
				<active-box></active-box>
			</div>
		</div>
	</div>
</template>
<script>
	import LoadApp from 'base/load-app'
	import GiftRank from 'base/gift-rank'
	import ActiveBox from 'components/active-box'
	export default{
		components:{
			LoadApp,
			GiftRank,
			ActiveBox
		}
	}
</script>
<style scoped>
	
</style>