<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
	    <div class="slide-img" v-for="(item,index) in slides" :key="index">
	      <a :href="slides[nowIndex].jumpUrl" target="_blank">
	      	<transition name="slide-trans">
	          <img v-if="isShow" :src="'http://game.91muzhi.com/muzhiplat'+slides[nowIndex].imgUrl">
	        </transition>
	        <transition name="slide-trans-old">
	          <img v-if="!isShow" :src="'http://game.91muzhi.com/muzhiplat'+slides[nowIndex].imgUrl">
	        </transition>
	      </a>
	    </div>
	    <ul class="slide-pages">
	      <li v-for="(item, index) in slides" :key="index" @click="goto(index)" :class="{on:index === nowIndex}"></li>
	    </ul>
		<a class="prev" @click="goto(prevIndex)"></a>
		<a class="next" @click="goto(nextIndex)"></a>
  </div>
</template>
<script>
	export default{
		props:{
			slides:{
				type:Array,
				default:[]
			},
			invSpeed:{
				type:Number,
				default: 4000 
			}
		},
		mounted(){
			this.runInv();
		},
		data(){
			return{
				nowIndex:0,
				isShow:true  
			}
		},
		computed:{
			prevIndex(){
				if(this.nowIndex ===0){
					return this.slides.length-1;
				}else{
					return this.nowIndex -1;
				}
			},
			nextIndex(){
				if(this.nowIndex === this.slides.length-1){
					return 0;
				}else{
					return this.nowIndex +1;
				}
			}
		},
		
		methods:{
			goto (index) {   
		      this.isShow = false
		      setTimeout(() => {
		        this.isShow = true
		        this.nowIndex = index
		       // this.$emit('onchange',index)
		      }, 10)
		    },
			runInv(){
				this.timer = setInterval(() => {
					this.goto(this.nextIndex);
				},this.invSpeed)
			},
			clearInv (){
				clearInterval(this.timer);
			}
		}
	}
</script>

<style scoped>

	.slide-trans-enter-active {
		transition: all .5s;
	}
	.slide-trans-enter {
		transform: translateX(900px);
	}
	.slide-trans-old-leave-active {
		transition: all .5s;
		transform: translateX(-900px);
	}

	.slide-show {
		position: relative;
		width: 848px;
		height: 400px;
		overflow: hidden;
	}

	.slide-img {
		width: 100%;
		height: 100%;
	}
	.slide-img img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	.slide-pages {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		-webkit-transform: translateX(-50%);
		-ms-transform: translateX(-50%);-o-transform: translateX(-50%);-moz-transform: translateX(-50%)    
	}
	.slide-pages li {
		display: inline-block;
		width: 10px;
		height:10px;
		border-radius: 50%;
		margin-right:10px; 
		cursor: pointer;
		background-color: #fff;
	}
	.slide-pages .on{
		background-color:red
	}
	.slide-show .prev,.slide-show .next{display:block; position:absolute;top: 200px;margin-top:-25px;width: 50px;height:50px;background-repeat: no-repeat;
		background-position: center center; background-size:50% auto;
	}
	.slide-show .prev{left: 15px;background-image: url('../assets/images/prev.png')}
	.slide-show .next{right: 15px;background-image: url('../assets/images/next.png')}
</style>