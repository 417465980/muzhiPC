<template>
  <div id="app">
      <support></support>
    	<Head></Head>
    	<keep-alive>
      		<router-view ></router-view>
    	</keep-alive>
	
		<Foot v-show="$store.state.show" ></Foot>
  </div>
</template>

<script>
import Head from "base/head";
import Foot from "base/Foot";
import support from "base/support";
import { mapActions } from "vuex";
import "babel-polyfill";
export default {
  components: {
    Head,
    Foot,
    support
  },
  mounted() {
    this.SET_SHOW();
  },
  methods: {
    ...mapActions(["SET_SHOW"])
  }
};
</script>
<style>
</style>



