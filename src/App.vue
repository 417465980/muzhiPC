<template>
  <div id="app">
    	<Head></Head>
    	<keep-alive>
      		<router-view></router-view>
    	</keep-alive>
			<Foot></Foot>
  </div>
</template>

<script>
import Head from 'base/head'
import Foot from 'base/Foot'
export default {
  	components:{
  		Head,
  		Foot
  	}
}
</script>

<style>
		
</style>



