<template>
	<div class="load_more" @click="loadMore">
		<p class=""></p>
	</div>
</template>
<script>
export default {
  methods: {
    loadMore() {
      this.$emit("hasMore");
    }
  }
};
</script>
<style scoped>
</style>