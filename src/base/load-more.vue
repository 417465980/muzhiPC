<template>
	<div class="load_more" @click="loadMore">
		<slot></slot>
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